import { contact, company } from "@/lib/unitex"

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.35em] text-accent">GET IN TOUCH</p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight text-balance lg:text-5xl">
              为您的空间，
              <br />
              寻找恰到好处的材料
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-primary-foreground/70">
              无论是酒店、地产精装还是高端私宅，欢迎与我们联系，获取专属的选材与落地方案。
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <dl className="space-y-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-primary-foreground/55">联系人 · Contact</dt>
                <dd className="mt-2 font-serif text-2xl">{contact.name}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-primary-foreground/55">电话 · Phone</dt>
                <dd className="mt-2">
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-lg transition-colors hover:text-accent">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-primary-foreground/55">邮箱 · Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${contact.email}`} className="text-lg transition-colors hover:text-accent">
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-primary-foreground/15 pt-10 sm:flex-row sm:items-center">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-lg tracking-[0.3em]">UNITEX</span>
            <span className="text-xs tracking-[0.2em] text-primary-foreground/55">宇泰</span>
          </div>
          <p className="text-xs tracking-[0.15em] text-primary-foreground/55">
            © {new Date().getFullYear()} {company.nameEn} · 国际品牌代理 · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
