import { getContentItems } from "@/lib/content"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Projects } from "@/components/projects"
import { ContactFooter } from "@/components/contact-footer"

export default async function Page() {
  const [projects, products] = await Promise.all([
    getContentItems("projects"),
    getContentItems("products"),
  ])

  return (
    <main className="bg-background">
      <SiteNav />
      <Hero />
      <About />
      <Products items={products} />
      <Projects items={projects} />
      <ContactFooter />
    </main>
  )
}
