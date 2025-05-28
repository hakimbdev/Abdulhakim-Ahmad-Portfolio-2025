import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdulhakim Ahmad - AI-For-Education & SDGs Advocate | EdTech Strategist",
  description:
    "Education Technologist leveraging AI, software engineering, and data analytics to drive educational reform aligned with UN Sustainable Development Goals. CEO at iOrbit Labs.",
  keywords: [
    "AI",
    "Education Technology",
    "EdTech",
    "Software Engineer",
    "Data Analytics",
    "SDGs",
    "Nigeria",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Abdulhakim Ahmad" }],
  openGraph: {
    title: "Abdulhakim Ahmad - AI-For-Education & SDGs Advocate",
    description:
      "Education Technologist leveraging AI, software engineering, and data analytics to drive educational reform.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
