import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://mexelenergysustain.com").replace(/\/$/u, "");

  const routes = [
    "",
    "/mexel432",
    "/tes",
    "/products",
    "/applications",
    "/industries",
    "/industries/power-energy",
    "/industries/mining",
    "/industries/hvac-data-centers", // Keep for Data Centers/Mining overlap
    "/knowledge-hub",
    "/knowledge-hub/advanced-engineering",
    "/knowledge-hub/case-studies",
    "/knowledge-hub/case-studies/kriel",
    "/knowledge-hub/engineering-playbook",
    "/knowledge-hub/engineering-playbook/fundamentals",
    "/knowledge-hub/engineering-playbook/protocol",
    "/knowledge-hub/engineering-playbook/iot-dosing",
    "/knowledge-hub/engineering-playbook/station-readiness",
    "/knowledge-hub/engineering-playbook/troubleshooting",
    "/knowledge-hub/engineering-playbook/safety-compliance",
    "/knowledge-hub/resources",
    "/about",
    "/company-profile",
    "/contact",
    "/legal",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}/`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/tes" || route === "/mexel432" ? 0.9 : 0.8,
  }));
}
