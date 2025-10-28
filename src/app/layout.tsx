import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SilentVerse",
  description: "Learning + Social + Marketplace ecosystem",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <header className="border-b bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              SilentVerse
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/learn" className="hover:underline">Learn</Link>
              <Link href="/feed" className="hover:underline">Feed</Link>
              <Link href="/chat" className="hover:underline">Chat</Link>
              <Link href="/market" className="hover:underline">Market</Link>
              <Link
                href="/dashboard"
                className="rounded-md bg-gray-900 px-3 py-1.5 text-white hover:bg-gray-700"
              >
                Dashboard
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer className="mt-12 border-t">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} SilentVerse • v0.1
          </div>
        </footer>
      </body>
    </html>
  )
}
