import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 3301;
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");

const MIME_TYPES = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".php", "application/x-httpd-php"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

function resolvePort(rawPort, fallbackPort = DEFAULT_PORT) {
  if (rawPort == null || rawPort === "") {
    return fallbackPort;
  }

  const parsedPort = Number(rawPort);

  if (!Number.isInteger(parsedPort) || parsedPort < 0 || parsedPort > 65535) {
    throw new Error(
      `Invalid preview port "${rawPort}". Use a whole number between 0 and 65535.`,
    );
  }

  return parsedPort;
}

function isInsideDirectory(parentDir, candidatePath) {
  const relativePath = path.relative(parentDir, candidatePath);
  return (
    relativePath === "" ||
    (!relativePath.startsWith("..") && !path.isAbsolute(relativePath))
  );
}

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function getContentType(filePath) {
  return (
    MIME_TYPES.get(path.extname(filePath).toLowerCase()) ||
    "application/octet-stream"
  );
}

async function resolveExportFile(exportDir, pathname) {
  let decodedPathname;

  try {
    decodedPathname = decodeURIComponent(pathname);
  } catch {
    return { statusCode: 400 };
  }

  if (decodedPathname.includes("\0")) {
    return { statusCode: 400 };
  }

  const relativePath = decodedPathname.replace(/^\/+/, "");
  const candidatePaths = [];

  if (relativePath === "") {
    candidatePaths.push(path.resolve(exportDir, "index.html"));
  } else {
    candidatePaths.push(path.resolve(exportDir, relativePath));
    candidatePaths.push(path.resolve(exportDir, relativePath, "index.html"));

    if (!path.extname(relativePath)) {
      candidatePaths.push(path.resolve(exportDir, `${relativePath}.html`));
    }
  }

  for (const candidatePath of candidatePaths) {
    if (!isInsideDirectory(exportDir, candidatePath)) {
      continue;
    }

    if (!(await pathExists(candidatePath))) {
      continue;
    }

    const fileStats = await stat(candidatePath);

    if (fileStats.isDirectory()) {
      const indexPath = path.join(candidatePath, "index.html");

      if (await pathExists(indexPath)) {
        return {
          statusCode: 200,
          filePath: indexPath,
          fileStats: await stat(indexPath),
        };
      }

      continue;
    }

    return {
      statusCode: 200,
      filePath: candidatePath,
      fileStats,
    };
  }

  const notFoundPath = path.resolve(exportDir, "404.html");

  if (await pathExists(notFoundPath)) {
    return {
      statusCode: 404,
      filePath: notFoundPath,
      fileStats: await stat(notFoundPath),
    };
  }

  return { statusCode: 404 };
}

function closeServer(server) {
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

export async function startExportPreviewServer({
  host = DEFAULT_HOST,
  port = resolvePort(process.env.PREVIEW_PORT),
  rootDir = repoRoot,
  exportDir = path.resolve(rootDir, "out"),
  silent = false,
} = {}) {
  try {
    await access(exportDir);
  } catch {
    throw new Error(
      `Export directory not found at ${exportDir}. Run "npm run build" before "npm run preview:export:serve".`,
    );
  }

  const server = createServer(async (request, response) => {
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, {
        Allow: "GET, HEAD",
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end("Method Not Allowed");
      return;
    }

    const requestUrl = new URL(request.url ?? "/", `http://${host}`);
    const resolvedFile = await resolveExportFile(
      exportDir,
      requestUrl.pathname,
    );

    if (!resolvedFile.filePath || !resolvedFile.fileStats) {
      response.writeHead(resolvedFile.statusCode, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end(
        resolvedFile.statusCode === 400 ? "Bad Request" : "Not Found",
      );
      return;
    }

    response.writeHead(resolvedFile.statusCode, {
      "Content-Length": resolvedFile.fileStats.size,
      "Content-Type": getContentType(resolvedFile.filePath),
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    const stream = createReadStream(resolvedFile.filePath);
    stream.on("error", () => {
      if (!response.headersSent) {
        response.writeHead(500, {
          "Content-Type": "text/plain; charset=utf-8",
        });
      }

      response.end("Failed to read preview file.");
    });
    stream.pipe(response);
  });

  await new Promise((resolve, reject) => {
    server.once("error", (error) => {
      if (error && typeof error === "object" && "code" in error) {
        if (error.code === "EADDRINUSE") {
          reject(
            new Error(
              `Preview port ${port} is already in use. Stop the existing server or set PREVIEW_PORT to a different value.`,
            ),
          );
          return;
        }
      }

      reject(error);
    });

    server.listen(port, host, () => resolve());
  });

  const address = server.address();
  const activePort =
    address && typeof address === "object" ? address.port : port;
  const previewUrl = `http://${host}:${activePort}`;

  if (!silent) {
    console.log(`[preview] Serving static export from ${exportDir}`);
    console.log(`[preview] Preview available at ${previewUrl}`);
    console.log("[preview] Press Ctrl+C to stop.");
  }

  return {
    server,
    exportDir,
    host,
    port: activePort,
    url: previewUrl,
    close: () => closeServer(server),
  };
}

async function runCli() {
  let previewServer;

  try {
    previewServer = await startExportPreviewServer();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown preview server error.";
    console.error(`[preview] ${message}`);
    process.exitCode = 1;
    return;
  }

  const shutdown = async (signal) => {
    console.log(
      `[preview] Received ${signal}. Shutting down preview server...`,
    );

    try {
      await previewServer.close();
      console.log("[preview] Server stopped.");
      process.exit(0);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown shutdown error.";
      console.error(`[preview] ${message}`);
      process.exit(1);
    }
  };

  process.once("SIGINT", () => {
    void shutdown("SIGINT");
  });
  process.once("SIGTERM", () => {
    void shutdown("SIGTERM");
  });
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  void runCli();
}
