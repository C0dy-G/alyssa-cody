import type React from "react"
import type { Metadata } from "next"
import { Poiret_One, Noto_Sans_Devanagari } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poiretOne = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiret",
  display: "swap",
})

const notoSans = Noto_Sans_Devanagari({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wedding Celebration - October 16, 2025",
  description: "Join us for our wedding celebration in San Francisco",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poiretOne.variable} ${notoSans.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
