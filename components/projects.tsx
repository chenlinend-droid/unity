import Image from "next/image"
import Link from "next/link"
import type { ContentItem } from "@/lib/content"

type ProjectsProps = {
  items: ContentItem[]
}

export function Projects({ items }: ProjectsProps) {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="mb-20 text-center">
        <p className="text-xs tracking-[0.35em] text-accent">HOTEL PROJECTS</p>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground text-balance lg:text-5xl">
          閰掑簵椤圭洰妗堜緥
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          浠庡浗瀹鹃鍒板浗闄呴厭搴楅泦鍥紝瀹囨嘲浠ヤ笓涓氫笌璇氫俊锛屽弬涓庡閫犱紬澶氬ア鍗庣┖闂淬€?
        </p>
      </div>

      <div className="flex flex-col gap-24 lg:gap-32">
        {items.map((p, i) => {
          const reversed = i % 2 === 1
          const cover = p.cover ?? p.images[0] ?? "/placeholder.svg"

          return (
            <article
              key={p.slug}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div className={`lg:col-span-7 ${reversed ? "lg:order-2 lg:col-start-6" : ""}`}>
                <Link href={p.urlPath} className="block overflow-hidden">
                  <Image
                    src={cover}
                    alt={`${p.title} 项目空间`}
                    width={1600}
                    height={1000}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </Link>
              </div>
              <div
                className={`lg:col-span-5 ${
                  reversed ? "lg:order-1 lg:col-start-1 lg:pr-8" : "lg:pl-8"
                }`}
              >
                <p className="text-xs tracking-[0.25em] text-accent">{p.location ?? p.category}</p>
                <h3 className="mt-4 font-serif text-3xl leading-snug text-foreground text-balance">
                  <Link href={p.urlPath}>{p.title}</Link>
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted-foreground">
                  {p.year ?? p.category}
                </p>
                <div className="mt-6 h-px w-12 bg-accent" />
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                  {p.description ?? "点击进入详情页阅读完整介绍。"}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
