import { projects, otherProjects } from "@/lib/unitex"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="mb-20 text-center">
        <p className="text-xs tracking-[0.35em] text-accent">HOTEL PROJECTS</p>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground text-balance lg:text-5xl">
          酒店项目案例
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          从国宾馆到国际酒店集团，宇泰以专业与诚信，参与塑造众多奢华空间。
        </p>
      </div>

      <div className="flex flex-col gap-24 lg:gap-32">
        {projects.map((p, i) => {
          const reversed = i % 2 === 1
          return (
            <article
              key={p.nameEn}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div className={`lg:col-span-7 ${reversed ? "lg:order-2 lg:col-start-6" : ""}`}>
                <div className="overflow-hidden">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={`${p.nameZh}项目空间`}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
              </div>
              <div
                className={`lg:col-span-5 ${
                  reversed ? "lg:order-1 lg:col-start-1 lg:pr-8" : "lg:pl-8"
                }`}
              >
                <p className="text-xs tracking-[0.25em] text-accent">{p.location}</p>
                <h3 className="mt-4 font-serif text-3xl leading-snug text-foreground text-balance">
                  {p.nameZh}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted-foreground">{p.nameEn}</p>
                <div className="mt-6 h-px w-12 bg-accent" />
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-28 border-t border-border pt-12">
        <p className="text-xs tracking-[0.3em] text-muted-foreground">国内外精装修项目 · SELECTED PROJECTS</p>
        <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((name) => (
            <li
              key={name}
              className="flex items-center gap-3 border-b border-border/60 pb-4 text-foreground"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
