import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Unistai",
  description: "设计公司官网内容管理系统，支持项目、产品、新闻与下载资料的 Markdown CMS。",
  generator: "Next.js",
  metadataBase: new URL("https://v0-project-beryl-gamma-65.vercel.app"),
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
