"use client"

import Image from "next/image"
import type { Material } from "@/lib/materials"
import { cn } from "@/lib/utils"

export function MaterialCard({
  material,
  align,
}: {
  material: Material
  align: "left" | "right"
}) {
  return (
    <article
      className={cn(
        "group relative flex w-full flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-20",
        align === "right" && "md:flex-row-reverse",
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative w-full md:w-[58%] lg:w-[55%]",
          // staggered vertical offset on larger screens
          align === "right" ? "md:mt-0 lg:-mt-16" : "lg:mt-16",
        )}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary md:aspect-[3/4]">
          <Image
            src={material.image || "/placeholder.svg"}
            alt={`${material.name} ${material.nameEn}`}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.3em] text-background/80 mix-blend-difference">
            {material.index}
          </span>
        </div>
      </div>

      {/* Text */}
      <div
        className={cn(
          "flex w-full flex-col md:w-[42%] lg:w-[45%]",
          align === "right" ? "md:items-start md:text-left" : "md:items-end md:text-right",
        )}
      >
        <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-accent">
          {material.category}
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-muted-foreground">{material.categoryEn}</span>
        </p>

        <h3 className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
          {material.name}
        </h3>
        <p className="mt-1 font-serif text-xl italic text-muted-foreground sm:text-2xl">
          {material.nameEn}
        </p>

        <div
          className={cn(
            "my-6 h-px w-16 bg-border",
            align === "right" ? "md:mr-auto" : "md:ml-auto",
          )}
        />

        <p className="max-w-md text-sm leading-relaxed text-foreground/80">
          {material.description}
        </p>
        <p className="mt-4 max-w-md text-sm italic leading-relaxed text-muted-foreground">
          {material.descriptionEn}
        </p>

        <div
          className={cn(
            "mt-8 flex items-center gap-3",
            align === "right" ? "md:flex-row" : "md:flex-row-reverse",
          )}
        >
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
            {material.origin}
            <span className="mx-2">·</span>
            {material.originEn}
          </span>
        </div>
      </div>
    </article>
  )
}
