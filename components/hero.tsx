import { company } from "@/lib/unitex"

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src="/unitex/hero-lobby.png"
        alt="宇泰参与打造的奢华酒店大堂空间"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/45 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-10">
        <p className="mb-6 text-xs tracking-[0.45em] text-background/70">
          SINCE {company.founded} · 国际品牌代理
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] text-background text-balance sm:text-6xl lg:text-7xl">
          以材料的语言
          <br />
          诠释空间的高级
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-background/80">
          {company.intro}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm tracking-[0.2em] text-background/85">
          <span>墙纸</span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span>布艺 & 皮革</span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span>地毯</span>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 hidden flex-col items-end gap-1 lg:flex lg:right-10">
        <span className="text-xs uppercase tracking-[0.35em] text-background/60">Wallcovering · Upholstery · Carpet</span>
        <span className="font-serif text-sm tracking-[0.3em] text-background/80">{company.taglineEn}</span>
      </div>
    </section>
  )
}
