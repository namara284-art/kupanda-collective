import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-settings";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${siteConfig.domain}/sitemap.xml`,
  };
}
