import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SilentVerse",
  description: "Learning • Social • Marketplace Ecosystem",
}

/**
 * Root layout component shared across all routes.
 * Handles header, footer, and page container.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">
        {/* ===== Header ===== */}
        <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50 fade-in">
          <nav className="container flex items-center justify-between py-3">
            <Link href="/" className="font-semibold text-lg tracking-tight">
              SilentVerse
            </Link>

            <div className="flex items-center gap-4 text-sm">
              <Link href="/learn" className="hover:underline">
                Learn
              </Link>
              <Link href="/feed" className="hover:underline">
                Feed
              </Link>
              <Link href="/chat" className="hover:underline">
                Chat
              </Link>
              <Link href="/market" className="hover:underline">
                Market
              </Link>
              <Link
                href="/dashboard"
                className="rounded-md bg-gray-900 px-3 py-1.5 text-white hover:bg-gray-700 transition"
              >
                Dashboard
              </Link>
            </div>
          </nav>
        </header>

        {/* ===== Main content ===== */}
        <main className="flex-1 container py-8 fade-in">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="border-t mt-12">
          <div className="container py-6 text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} SilentVerse. All rights reserved.
            </p>
            <p>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
