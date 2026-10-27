import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/boutique", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/artisans", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/notre-histoire", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/cgv", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/confidentialite", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...products.map((product) => ({
      url: `${siteConfig.url}/boutique/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
