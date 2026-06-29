import type { MetadataRoute } from "next"
import { getContentItems } from "@/lib/content"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, products] = await Promise.all([getContentItems("projects"), getContentItems("products")])
  const baseUrl = "https://v0-project-beryl-gamma-65.vercel.app"

  return [
    { url: baseUrl, lastModified: new Date() },
    ...projects.map((item) => ({ url: `${baseUrl}${item.urlPath}`, lastModified: new Date() })),
    ...products.map((item) => ({ url: `${baseUrl}${item.urlPath}`, lastModified: new Date() })),
  ]
}
