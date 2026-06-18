import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://mexelenergysustain.com").replace(/\/$/u, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/", "/forms/", "/contact.php", "/company-profile-static/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
