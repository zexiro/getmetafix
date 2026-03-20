import { MetadataRoute } from "next";
import { posts } from "./blog/posts/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getmetafix.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/property-management-website-seo-guide-2026`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/woocommerce-seo-meta-tags-guide-2026`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/local-seo-restaurants-google-reviews-2026`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/duplicate-meta-descriptions-fix`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/growth-audit`,
      lastModified: new Date("2026-03-19"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/monitor`,
      lastModified: new Date("2026-03-19"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
