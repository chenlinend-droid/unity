import { products } from "@/lib/unitex"

export function Products() {
  return (
    <section id="products" className="bg-primary py-28 text-primary-foreground lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.35em] text-accent">PRODUCT RANGE</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-balance lg:text-5xl">产品范畴</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            从墙面到地面，从触感到光泽，宇泰以体系化的材料组合，构建空间的整体气质。
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-3">
          {products.map((p, i) => (
            <article key={p.nameEn} className="group bg-primary">
              <div className="overflow-hidden">
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={`宇泰${p.nameZh}材料`}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="px-7 py-8">
                <span className="font-serif text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-2xl">{p.nameZh}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/55">{p.nameEn}</p>
                <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
