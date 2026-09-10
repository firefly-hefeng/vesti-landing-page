import React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono, Manrope } from "next/font/google"

import "./globals.css"

import { LanguageProvider } from "@/lib/i18n"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
})

export const metadata: Metadata = {
  title: "Vesti — The working-memory engine for domain-specific agents",
  description:
    "Vesti captures agent conversations across browsers and CLI coding agents, organizes them into structured local memory, and serves recall to any agent through MCP.",
  generator: "v0.app",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
