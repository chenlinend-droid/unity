import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://v0-project-beryl-gamma-65.vercel.app/sitemap.xml",
  }
}
