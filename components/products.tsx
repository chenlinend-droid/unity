import Image from "next/image"
import Link from "next/link"
import type { ContentItem } from "@/lib/content"

type ProductsProps = {
  items: ContentItem[]
}

export function Products({ items }: ProductsProps) {
  return (
    <section id="products" className="bg-primary py-28 text-primary-foreground lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.35em] text-accent">PRODUCT RANGE</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-balance lg:text-5xl">产品矩阵</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            从墙面到地面，从触感到光泽，宇泰以体系化的材料组合，构建空间的整体气质。
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-3">
          {items.map((p, i) => {
            const cover = p.cover ?? p.images[0] ?? "/placeholder.svg"
            return (
              <article key={p.slug} className="group bg-primary">
                <div className="overflow-hidden">
                  <Link href={p.urlPath}>
                    <Image
                      src={cover}
                      alt={`${p.title} 材料`}
                      width={1200}
                      height={1600}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="px-7 py-8">
                  <span className="font-serif text-sm text-accent">0{i + 1}</span>
                  <h3 className="mt-3 font-serif text-2xl">
                    <Link href={p.urlPath}>{p.title}</Link>
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/55">
                    {p.category ?? "Product"}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
                    {p.description ?? "点击进入详情页阅读完整介绍。"}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
