import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Projects } from "@/components/projects"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Hero />
      <About />
      <Products />
      <Projects />
      <ContactFooter />
    </main>
  )
}
