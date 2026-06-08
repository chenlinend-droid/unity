import { materials } from "@/lib/materials"
import { MaterialCard } from "@/components/material-card"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
        <span className="font-serif text-lg tracking-[0.2em] text-foreground">MATIÈRE</span>
        <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
          <a href="#gallery" className="transition-colors hover:text-foreground">画廊 / Gallery</a>
          <a href="#about" className="transition-colors hover:text-foreground">关于 / About</a>
          <a href="#contact" className="transition-colors hover:text-foreground">联系 / Contact</a>
        </nav>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent">中 / EN</span>
      </header>

      {/* Hero */}
      <section className="flex min-h-screen flex-col justify-center px-6 pb-20 pt-32 md:px-12">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          建筑材料典藏 · The Material Library
        </p>
        <h1 className="max-w-5xl font-serif text-5xl font-medium leading-[1.05] text-foreground text-balance sm:text-7xl lg:text-8xl">
          匠心之材
          <span className="mt-2 block italic text-muted-foreground">Matter, Refined.</span>
        </h1>
        <p className="mt-10 max-w-xl text-pretty text-sm leading-relaxed text-foreground/70">
          一座关于质感与产地的画廊。我们遍寻全球，甄选每一种经得起时间打磨的建筑材料。
          <br />
          <span className="italic text-muted-foreground">
            A gallery of texture and provenance — globally sourced materials that endure the passage of time.
          </span>
        </p>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-t border-border px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-28 lg:gap-40">
          {materials.map((material, i) => (
            <MaterialCard
              key={material.index}
              material={material}
              align={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border px-6 py-20 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-3xl text-foreground md:text-4xl text-balance">
              寻找属于您的材料
              <span className="mt-1 block italic text-muted-foreground">Find your material</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground md:text-right">
            <span>studio@matiere.com</span>
            <span>上海 · 巴黎 · 米兰</span>
            <span>Shanghai · Paris · Milano</span>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-border pt-8 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} MATIÈRE</span>
          <span>建材画廊 / Material Gallery</span>
        </div>
      </footer>
    </main>
  )
}
