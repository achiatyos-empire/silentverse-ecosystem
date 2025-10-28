"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

export default function HomePage() {
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          SILENTVERSE
        </h1>
        <p className="text-sv-muted">
          Infinite value — zero noise. A calm, cosmic space for learning,
          conversation, and curated discovery.
        </p>

        {/* CTA */}
        <div className="pt-2">
          <button
            ref={btnRef}
            onClick={() => setOpen(true)}
            className="rounded-full bg-sv-accent text-black px-6 py-3 text-sm font-semibold hover:bg-sv-accent-strong transition focus:outline-none focus:ring-2 focus:ring-sv-accent-strong focus:ring-offset-2 focus:ring-offset-black"
            aria-haspopup="dialog"
            aria-controls="sv-portal"
          >
            ENTER THE VERSE
          </button>
          <p className="mt-2 text-xs text-sv-muted">
            Press <kbd className="px-1 py-0.5 border rounded">Esc</kbd> to close the portal.
          </p>
        </div>
      </div>

      {/* About / Mission / Values */}
      <div className="grid gap-8 md:grid-cols-3">
        <Card title="About">
          SilentVerse is a focused ecosystem: a learning hub, global chatroom,
          social feed, and a buy-only marketplace—unified by purpose and
          simplicity.
        </Card>

        <Card title="Mission">
          Empower every seeker to learn, connect, and trade knowledge with
          clarity—without the noise that distracts from genuine growth.
        </Card>

        <Card title="Values">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Clarity:</strong> design for signal over noise.</li>
            <li><strong>Respect:</strong> privacy, safety, and accessibility.</li>
            <li><strong>Mastery:</strong> learn deeply, share generously.</li>
            <li><strong>Presence:</strong> realtime, responsive, human.</li>
          </ul>
        </Card>
      </div>

      {/* Full-screen reveal menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="sv-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              // stop propagation so inner clicks don't close
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
              className="mx-auto mt-24 w-[min(90vw,820px)] rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight">Choose your path</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-1 text-sm text-sv-muted hover:text-sv-ink"
                >
                  Close ✕
                </button>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <PortalLink href="/learn" title="Learn" desc="Courses, lessons, progress" />
                <PortalLink href="/feed" title="Feed" desc="Posts, media, discovery" />
                <PortalLink href="/chat" title="Chat" desc="Global conversation" />
                <PortalLink href="/market" title="Market" desc="Curated, buy-only" />
                <PortalLink href="/u/you" title="Profile" desc="Timeline & badges" />
                <PortalLink href="/dashboard" title="Dashboard" desc="Your activity & stats" />
              </div>

              <p className="mt-5 text-xs text-sv-muted">
                Tip: you can always use the top navigation or press Esc to leave the portal.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-card">
      <div className="mb-2 text-sm uppercase tracking-wide text-sv-accent">
        {title}
      </div>
      <div className="text-sm text-sv-ink/90">{children}</div>
    </div>
  )
}

function PortalLink({
  href,
  title,
  desc,
}: {
  href: string
  title: string
  desc: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-white/10 bg-black/30 p-4 transition hover:border-sv-accent/60 hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-sv-accent"
    >
      <div className="flex items-center justify-between">
        <div className="font-medium">{title}</div>
        <span className="text-sv-accent group-hover:translate-x-0.5 transition">→</span>
      </div>
      <div className="mt-1 text-sm text-sv-muted">{desc}</div>
    </Link>
  )
}
