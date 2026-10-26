import type { MetadataRoute } from "next"

import { ARTICLES } from "@/lib/articles"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const newest = ARTICLES[0]

  return [
    {
      url: SITE_URL,
      lastModified: newest?.created_at,
      changeFrequency: "hourly",
      priority: 1,
    },
    ...ARTICLES.map((article) => ({
      url: `${SITE_URL}/berita/${article.slug}`,
      lastModified: article.created_at,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [article.thumbnail_url],
    })),
  ]
}
