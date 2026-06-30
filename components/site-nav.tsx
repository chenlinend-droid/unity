"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const links = [
  { href: "#about", label: "关于", labelEn: "About" },
  { href: "#products", label: "产品", labelEn: "Products" },
  { href: "#projects", label: "案例", labelEn: "Projects" },
  { href: "#contact", label: "联系", labelEn: "Contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-5 transition-colors duration-500 lg:px-10 ${
          scrolled ? "text-foreground" : "text-background"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 bg-transparent">
          <Image
            src="/unistai.png"
            alt="Unistai logo"
            width={600}
            height={600}
            className="h-40 w-auto object-contain md:h-44 lg:h-48"
            priority
          />
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a className="group flex flex-col text-sm transition-colors hover:text-accent" href={l.href}>
                <span>{l.label}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] opacity-60">{l.labelEn}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden border border-current/40 px-5 py-2 text-xs tracking-[0.2em] transition-colors hover:border-accent hover:text-accent md:inline-block"
        >
          咨询合作
        </a>
      </nav>
    </header>
  )
}
