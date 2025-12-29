import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mexelenergysustain.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/tes",
    "/products",
    "/applications",
    "/industries",
    "/industries/power-energy",
    "/industries/mining",
    "/industries/refineries",
    "/industries/sugar-ethanol",
    "/industries/food-beverage",
    "/industries/agriculture",
    "/industries/hvac-data-centers",
    "/industries/ports",
    "/knowledge-hub",
    "/knowledge-hub/case-studies",
    "/knowledge-hub/case-studies/kriel",
    "/knowledge-hub/resources",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/tes" ? 0.9 : 0.8,
  }));
}
