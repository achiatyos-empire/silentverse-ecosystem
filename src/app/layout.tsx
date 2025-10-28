import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "SilentVerse",
  description: "Learning • Social • Marketplace Ecosystem",
  themeColor: "#0a0b12",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="nebula min-h-screen text-sv-ink antialiased flex flex-col">
        {/* ===== Header ===== */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur">
          <nav className="container flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              {/* Logo (transparent) */}
              {/* Put your transparent file at /public/logo.svg or /public/logo.png */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"           // or "/logo.png"
                  alt="SilentVerse logo"
                  width={28}
                  height={28}
                />
                <span className="font-semibold tracking-tight">SilentVerse</span>
              </Link>
            </div>

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
          </nav>
        </header>

        {/* ===== Main ===== */}
        <main className="flex-1 container py-8">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="border-t border-white/10 mt-12">
          <div className="container py-6 text-sm text-sv-muted flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} SilentVerse</p>
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
