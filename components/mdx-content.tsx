type MarkdownContentProps = {
  html: string
}

export function MarkdownContent({ html }: MarkdownContentProps) {
  return (
    <div
      className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-img:my-8 prose-img:w-full"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
