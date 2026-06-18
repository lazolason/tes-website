import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { startExportPreviewServer } from "../preview-export.mjs";

const rootDir = process.cwd();
const port = Number(process.env.SMOKE_PORT || 3101);
const baseUrl = `http://127.0.0.1:${port}`;
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function log(step, message) {
  console.log(`[${step}] ${message}`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForUrl(url, timeoutMs = 30_000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        return;
      }
    } catch {
      // Retry until the timeout expires.
    }

    await sleep(1_000);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

function spawnCommand(command, args, step) {
  const child = spawn(command, args, {
    cwd: rootDir,
    env: process.env,
    stdio: ["ignore", "pipe", "pipe"],
  });

  child.stdout.on("data", (chunk) => {
    process.stdout.write(`[${step}] ${chunk}`);
  });
  child.stderr.on("data", (chunk) => {
    process.stderr.write(`[${step}] ${chunk}`);
  });

  return child;
}

async function stopProcess(child) {
  if (!child || child.exitCode !== null) {
    return;
  }

  child.kill("SIGTERM");

  await Promise.race([
    new Promise((resolve) => child.once("exit", resolve)),
    sleep(5_000).then(() => {
      if (child.exitCode === null) {
        child.kill("SIGKILL");
      }
    }),
  ]);
}

async function runCommand(command, args) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: rootDir,
      env: process.env,
      stdio: "inherit",
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(`${command} ${args.join(" ")} exited with code ${code}`),
      );
    });
  });
}

async function readText(filePath) {
  return fs.readFile(filePath, "utf8");
}

async function collectTextFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectTextFiles(fullPath)));
      continue;
    }

    if (/\.(html|js|json|txt|xml|php)$/u.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function runNavigationAndContactSmoke() {
  const child = spawnCommand(
    npmCommand,
    ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)],
    "next-dev",
  );

  try {
    await waitForUrl(`${baseUrl}/contact/`);

    log("smoke", "Checking homepage navigation labels");
    const homepage = await (await fetch(`${baseUrl}/`)).text();
    assert(
      homepage.includes("Knowledge Hub"),
      "Homepage navigation is missing Knowledge Hub",
    );
    assert(
      homepage.includes("Industries"),
      "Homepage navigation is missing Industries",
    );
    assert(
      homepage.includes("Request Technical Audit"),
      "Homepage CTA is missing",
    );

    log("smoke", "Checking contact page content");
    const contactPage = await (await fetch(`${baseUrl}/contact/`)).text();
    assert(
      contactPage.includes("Send a message"),
      "Contact page title is missing",
    );
  assert(
    contactPage.includes("Afrihost mail server"),
    "Contact page deployment note is missing",
  );
  assert(
    contactPage.includes('action="/contact.php"'),
    "Contact form is not configured to post to /contact.php",
  );

    log("smoke", "Submitting valid contact payload");
    const validResponse = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        name: "Smoke Test",
        email: "smoke@example.com",
        organisation: "QA",
        interest: "TES for industrial cooling-water systems",
        description: "Regression suite smoke submission.",
      }),
    });
    const validPayload = await validResponse.json();
    assert(validResponse.ok, "Valid contact submission failed");
    assert(
      validPayload.success === true,
      "Valid contact payload was not accepted",
    );

    log("smoke", "Submitting invalid contact payload");
    const invalidResponse = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        name: "A",
        email: "invalid-email",
      }),
    });
    const invalidPayload = await invalidResponse.json();
    assert(
      invalidResponse.status === 400,
      "Invalid contact submission did not return 400",
    );
    assert(
      Array.isArray(invalidPayload.errors) && invalidPayload.errors.length > 0,
      "Invalid contact payload did not return validation errors",
    );
  } finally {
    await stopProcess(child);
  }
}

async function runBuildExportVerification() {
  log("build", "Running production build and export");
  await runCommand(npmCommand, ["run", "build"]);

  const exportDir = path.join(rootDir, "out");
  const requiredFiles = [
    path.join(exportDir, "contact.php"),
    path.join(exportDir, "contact", "index.html"),
    path.join(exportDir, "index.html"),
  ];

  for (const requiredFile of requiredFiles) {
    await fs.access(requiredFile);
  }

  log("build", "Verifying export artifacts");
  await fs.access(path.join(exportDir, "contact.php"));

  try {
    await fs.access(path.join(exportDir, "api", "contact"));
    throw new Error("Static export should not contain out/api/contact");
  } catch (error) {
    if (
      error instanceof Error &&
      !error.message.includes("should not contain")
    ) {
      // Expected: the path does not exist.
    } else if (error instanceof Error) {
      throw error;
    }
  }

  try {
    await fs.access(
      path.join(exportDir, "images", "home-outcomes-cooling-water.png"),
    );
    throw new Error("Removed duplicate asset still exists in the export");
  } catch (error) {
    if (error instanceof Error && !error.message.includes("still exists")) {
      // Expected: the path does not exist.
    } else if (error instanceof Error) {
      throw error;
    }
  }

  const textFiles = await collectTextFiles(exportDir);
  let referencesPhpHandler = false;

  for (const filePath of textFiles) {
    const contents = await readText(filePath);

    if (contents.includes("/contact.php")) {
      referencesPhpHandler = true;
      break;
    }
  }

  assert(referencesPhpHandler, "Export output does not reference /contact.php");

  const exportedContactPage = await readText(
    path.join(exportDir, "contact", "index.html"),
  );
  assert(
    exportedContactPage.includes('action="/contact.php"'),
    "Exported contact form does not post to /contact.php",
  );
  assert(
    !exportedContactPage.includes('action="/api/contact"'),
    "Exported contact form still posts to /api/contact",
  );

  const [robots, sitemap, homePage, productsPage, krielPage] =
    await Promise.all([
      readText(path.join(exportDir, "robots.txt")),
      readText(path.join(exportDir, "sitemap.xml")),
      readText(path.join(exportDir, "index.html")),
      readText(path.join(exportDir, "products", "index.html")),
      readText(
        path.join(
          exportDir,
          "knowledge-hub",
          "case-studies",
          "kriel",
          "index.html",
        ),
      ),
    ]);

  assert(
    robots.includes("Disallow: /contact.php"),
    "robots.txt does not disallow /contact.php",
  );
  assert(
    robots.includes("Disallow: /forms/"),
    "robots.txt does not disallow /forms/",
  );
  assert(
    sitemap.includes("https://mexelenergysustain.com/contact/"),
    "sitemap.xml is missing the contact URL",
  );
  assert(
    sitemap.includes("https://mexelenergysustain.com/legal/"),
    "sitemap.xml is missing the legal URL",
  );
  assert(
    sitemap.includes(
      "https://mexelenergysustain.com/knowledge-hub/engineering-playbook/safety-compliance/",
    ),
    "sitemap.xml is missing engineering playbook child URLs",
  );
  assert(
    !sitemap.includes("<lastmod>"),
    "sitemap.xml should not contain build-time-changing lastmod values",
  );
  assert(
    homePage.includes('rel="canonical" href="https://mexelenergysustain.com/"'),
    "Homepage canonical URL is missing",
  );
  assert(
    productsPage.includes(
      'rel="canonical" href="https://mexelenergysustain.com/products/"',
    ),
    "Products canonical URL is missing",
  );
  assert(
    productsPage.includes('property="og:image" content="https://mexelenergysustain.com/og/mexel432.png"'),
    "Products Open Graph image is missing",
  );
  assert(
    krielPage.includes(
      'rel="canonical" href="https://mexelenergysustain.com/knowledge-hub/case-studies/kriel/"',
    ),
    "Kriel case study canonical URL is missing",
  );
}

async function runExportPreviewVerification() {
  const previewServer = await startExportPreviewServer({
    port: Number(process.env.SMOKE_PREVIEW_PORT || 3302),
    silent: true,
  });

  try {
    log("preview", `Serving exported site at ${previewServer.url}`);
    await waitForUrl(`${previewServer.url}/mexel432/`, 10_000);

    const [mexelResponse, contactResponse, assetResponse] = await Promise.all([
      fetch(`${previewServer.url}/mexel432/`),
      fetch(`${previewServer.url}/contact/`),
      fetch(`${previewServer.url}/power-station-clean.webp`),
    ]);

    assert(mexelResponse.ok, "Export preview did not serve /mexel432/");
    assert(contactResponse.ok, "Export preview did not serve /contact/");
    assert(
      assetResponse.ok,
      "Export preview did not serve power-station-clean.webp",
    );

    const mexelPage = await mexelResponse.text();
    const contactPage = await contactResponse.text();

    assert(
      mexelPage.includes("What Stations Actually Buy"),
      "Exported Mexel page is missing the thumbnail card section",
    );
    assert(
      mexelPage.includes("power-station-clean"),
      "Exported Mexel page does not reference the thumbnail asset",
    );
    assert(
      contactPage.includes("Send a message"),
      "Exported contact page title is missing",
    );
  } finally {
    await previewServer.close();
  }
}

try {
  await runNavigationAndContactSmoke();
  await runBuildExportVerification();
  await runExportPreviewVerification();
  log("smoke", "Regression suite completed successfully");
} catch (error) {
  console.error("[smoke] Regression suite failed");
  console.error(error);
  process.exitCode = 1;
}
