"use client" // This makes the whole module a Client Component

import type { Metadata } from "next"
// Metadata export can stay, but `type Metadata` import is used by Next.js in a build step
// For simplicity in a client component, we'll keep the direct imports.
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

// Exporting metadata from a client component can be tricky, but for this file's purpose, 
// we assume the core metadata is handled elsewhere or is not strictly dynamic here.
// For the sake of the exercise, we will proceed with the client component structure.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const NavLinks = () => {
    return (
      <div className="flex items-center gap-4 text-sm">
        <Link href="/learn" className="hover:text-sv-accent">Learn</Link>
        <Link href="/feed" className="hover:text-sv-accent">Feed</Link>
        <Link href="/chat" className="hover:text-sv-accent">Chat</Link>
        <Link href="/market" className="hover:text-sv-accent">Market</Link>
        <Link
          href="/dashboard"
          className="rounded-md bg-sv-accent px-3 py-1.5 text-black hover:bg-sv-accent-strong transition"
        >
          Dashboard
        </Link>
      </div>
    )
  }

  return (
    <html lang="en">
      <body className="nebula min-h-screen antialiased flex flex-col">
        {/* ===== Header (Logo & Conditional Nav) ===== */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur">
          <nav className="container flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              {/* Logo (no spelled-out text) */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="SilentVerse logo"
                  width={28}
                  height={28}
                />
              </Link>
            </div>

            {/* Conditional Navigation */}
            {!isHomePage && <NavLinks />}
          </nav>
        </header>

        {/* ===== Main ===== */}
        <main className="flex-1 container py-8">{children}</main>

        {/* ===== Footer (Centered) ===== */}
        <footer className="border-t border-white/10 mt-12">
          <div className="container py-6 text-sm text-sv-muted flex flex-col sm:flex-row sm:items-center sm:justify-center">
            <p className="mb-2 sm:mb-0 sm:mr-4">© {new Date().getFullYear()} SilentVerse</p>
            <p className="space-x-2">
              <Link href="/privacy" className="hover:text-sv-accent">Privacy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-sv-accent">Terms</Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
