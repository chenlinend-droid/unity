import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"

const contentRoot = path.join(process.cwd(), "content")

export type ContentKind = "projects" | "products" | "news" | "downloads"

export type ContentItem = {
  slug: string
  title: string
  location?: string
  year?: string
  category?: string
  cover?: string
  featured?: boolean
  description?: string
  path: string
  urlPath: string
  body: string
  html: string
  images: string[]
  links: Array<{ label: string; href: string }>
  downloads: Array<{ label: string; href: string }>
  meta: Record<string, unknown>
}

const sortByFrontmatter = (a: ContentItem, b: ContentItem) => {
  const featuredDiff = Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  if (featuredDiff !== 0) return featuredDiff
  const yearDiff = Number.parseInt(b.year ?? "0", 10) - Number.parseInt(a.year ?? "0", 10)
  if (!Number.isNaN(yearDiff) && yearDiff !== 0) return yearDiff
  return a.title.localeCompare(b.title, "zh-Hans-CN")
}

const toPublicPath = (baseDir: string, filePath: string) => {
  const relative = path.relative(baseDir, filePath).replaceAll(path.sep, "/")
  return relative.startsWith(".") ? relative : `/content/${relative}`
}

const scanImages = (dir: string) =>
  fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))

const markdownToHtml = async (markdown: string) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown)
  return String(file)
}

function readContentDir(kind: ContentKind) {
  const baseDir = path.join(contentRoot, kind)
  if (!fs.existsSync(baseDir)) return []

  return fs
    .readdirSync(baseDir)
    .map((entry) => path.join(baseDir, entry))
    .filter((entry) => fs.statSync(entry).isDirectory())
    .filter((entry) => !path.basename(entry).startsWith("_"))
}

export function getContentSlugs(kind: ContentKind) {
  return readContentDir(kind).map((dir) => path.basename(dir))
}

export async function getContentItems(kind: ContentKind) {
  const dirs = readContentDir(kind)
  const items = await Promise.all(
    dirs.map(async (dir) => {
      const sourcePath = path.join(dir, "index.md")
      if (!fs.existsSync(sourcePath)) return null

      const raw = fs.readFileSync(sourcePath, "utf8")
      const { data, content } = matter(raw)
      const images = scanImages(dir).map((file) => toPublicPath(contentRoot, path.join(dir, file)))
      const html = await markdownToHtml(content)

      const urlPath = `/${kind}/${path.basename(dir)}`
      const cover =
  typeof data.cover === "string"
    ? toPublicPath(contentRoot, path.join(dir, data.cover))
    : images[0]

      return {
        slug: path.basename(dir),
        title: String(data.title ?? path.basename(dir)),
        location: data.location ? String(data.location) : undefined,
        year: data.year ? String(data.year) : undefined,
        category: data.category ? String(data.category) : undefined,
        cover,
        featured: Boolean(data.featured),
        description: data.description ? String(data.description) : undefined,
        path: sourcePath,
        urlPath,
        body: content,
        html,
        images,
        links: Array.isArray(data.links) ? data.links : [],
        downloads: Array.isArray(data.downloads) ? data.downloads : [],
        meta: data,
      } satisfies ContentItem
    }),
  )

  return items.filter(Boolean).sort(sortByFrontmatter) as ContentItem[]
}

export async function getContentItem(kind: ContentKind, slug: string) {
  const items = await getContentItems(kind)
  return items.find((item) => item.slug === slug) ?? null
}

export function findAllMediaFiles(kind: ContentKind) {
  const baseDir = path.join(contentRoot, kind)
  if (!fs.existsSync(baseDir)) return []

  const files: string[] = []
  for (const dir of readContentDir(kind)) {
    for (const file of scanImages(dir)) {
      files.push(toPublicPath(contentRoot, path.join(dir, file)))
    }
  }
  return files
}
