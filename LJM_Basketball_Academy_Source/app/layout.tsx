import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import TawkToWidget from "@/components/tawk-to-widget"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LJM Basketball Academy | Building Champions On & Off the Court",
  description:
    "Join our youth basketball program focused on skill development, teamwork, and character building for young athletes in our community.",
  generator: "v0.app",
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
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <TawkToWidget />
      </body>
    </html>
  )
}
