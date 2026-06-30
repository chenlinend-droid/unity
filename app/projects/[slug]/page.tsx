import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MarkdownContent } from "@/components/mdx-content"
import { getContentItem, getContentSlugs } from "@/lib/content"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getContentSlugs("projects").map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const item = await getContentItem("projects", slug)
  if (!item) return {}

  return {
    title: item.title,
    description: item.description ?? item.body.slice(0, 160),
    openGraph: {
      title: item.title,
      description: item.description ?? item.body.slice(0, 160),
      images: item.cover ? [{ url: item.cover }] : [],
    },
  }
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params
  const item = await getContentItem("projects", slug)
  if (!item) notFound()

  const images = item.images.length > 0 ? item.images : item.cover ? [item.cover] : []

  return (
    <main className="bg-background">
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          返回首页
        </Link>
        <h1 className="mt-6 font-serif text-4xl text-foreground lg:text-6xl">{item.title}</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-accent">
          {[item.location, item.year, item.category].filter(Boolean).join(" / ")}
        </p>
        <div className="mt-10 grid gap-6">
          {images.map((src) => (
            <img key={src} src={src} alt={item.title} className="w-full object-cover" />
          ))}
        </div>
        <article className="prose prose-neutral mt-12 max-w-none">
          <MarkdownContent html={item.html} />
        </article>
      </section>
    </main>
  )
}
