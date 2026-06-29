import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

const contentRoot = path.join(process.cwd(), "content")

const mimeTypes: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
}

export async function GET(_: Request, context: { params: Promise<{ path: string[] }> }) {
  const { path: segments } = await context.params
  const target = path.join(contentRoot, ...segments)
  const normalized = path.normalize(target)

  if (!normalized.startsWith(contentRoot) || !fs.existsSync(normalized) || fs.statSync(normalized).isDirectory()) {
    return new NextResponse("Not Found", { status: 404 })
  }

  const buffer = fs.readFileSync(normalized)
  const ext = path.extname(normalized).toLowerCase()
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": mimeTypes[ext] ?? "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
