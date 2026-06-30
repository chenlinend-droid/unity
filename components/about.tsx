import { milestones } from "@/lib/unitex"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-[0.35em] text-accent">ABOUT UNITEX</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground text-balance lg:text-5xl">
            关于宇泰
          </h2>
          <div className="mt-8 h-px w-16 bg-accent" />
          <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
            自 2012 年成立以来，宇泰始终专注于室内设计与装饰中的墙纸、布艺、皮革、地毯等材料选材与应用，
            代理多个国际高端品牌，为酒店、地产精装与高端私宅提供从选材到落地的一站式服务方案。
          </p>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            感恩遇见，用心服务，专业诚信，完美呈现。这是我们对每一个空间的承诺。
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <img
            src="/unitex/texture-detail.png"
            alt="宇泰精选的丝绸墙纸、皮革与羊毛地毯材质细节"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
            {milestones.map((m) => (
              <div key={m.year} className="bg-card px-6 py-8">
                <p className="font-serif text-3xl text-accent">{m.year}</p>
                <p className="mt-3 text-sm text-foreground">{m.textZh}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{m.textEn}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
