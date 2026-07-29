import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-settings";
import { programmes } from "@/content/programmes";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/our-work", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/stories-and-learning", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/partner-with-us", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/safeguarding", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const programmeRoutes = programmes.map((p) => ({
    path: `/our-work/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...programmeRoutes].map((route) => ({
    url: `${siteConfig.domain}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
