"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function VersePage() {
  const [stage, setStage] = useState<"gate" | "unveiled">("gate")

  useEffect(() => {
    const t = setTimeout(() => setStage("unveiled"), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-120px)]">
      {/* Cinematic portal gate */}
      <AnimatePresence mode="wait">
        {stage === "gate" && (
          <motion.div
            key="gate"
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <Gate />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unveiled grid */}
      {stage === "unveiled" && (
        <motion.div
          key="unveil"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-10"
        >
          <header className="text-center space-y-3">
            <div className="inline-flex items-center gap-3">
              <img src="/logo.png" alt="SilentVerse" width={40} height={40} />
              <h1 className="text-3xl font-bold tracking-tight">ENTERED THE VERSE</h1>
            </div>
            <p className="text-sv-muted max-w-2xl mx-auto">
              Explore SilentVerse: a constellation of learning, realtime chat, social signal, and a curated marketplace.
            </p>
          </header>

          {/* Panels */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Panel
              href="/learn"
              title="Learn"
              desc="Courses, lessons, and progress tracking."
              badge="Learning Hub"
            />
            <Panel
              href="/feed"
              title="Feed"
              desc="Posts, media, threads, and discovery."
              badge="Social Space"
            />
            <Panel
              href="/chat"
              title="Chat"
              desc="Global chatroom with realtime presence."
              badge="Realtime"
            />
            <Panel
              href="/market"
              title="Market"
              desc="Curated buy-only catalog—digital & merch."
              badge="Marketplace"
            />
            <Panel
              href="/u/you"
              title="Profile"
              desc="Timeline, badges, and personal stats."
              badge="Identity"
            />
            <Panel
              href="/dashboard"
              title="Dashboard"
              desc="Your learning, posts, orders, and alerts."
              badge="Control Center"
            />
          </div>

          {/* Mission & Values */}
          <section className="grid gap-5 md:grid-cols-3">
            <MiniCard title="Brand Mission">
              Empower seekers to learn deeply, connect clearly, and trade knowledge—without the noise.
            </MiniCard>
            <MiniCard title="Values">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><b>Clarity</b> over noise</li>
                <li><b>Respect</b> for privacy & access</li>
                <li><b>Mastery</b> through practice</li>
                <li><b>Presence</b> in realtime</li>
              </ul>
            </MiniCard>
            <MiniCard title="Call to Action">
              <Link
                href="/learn"
                className="inline-block rounded-full bg-sv-accent text-black px-5 py-2 text-sm font-semibold hover:bg-sv-accent-strong transition"
              >
                Begin your path
              </Link>
            </MiniCard>
          </section>
        </motion.div>
      )}
    </section>
  )
}

/* ===== Components ===== */

function Gate() {
  // A premium-looking portal with diamond + iris + glow
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* subtle starfield shimmer via gradients */}
      <div className="absolute -inset-20 opacity-60 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 400px at 50% 40%, rgba(123,97,255,0.18), transparent 60%), radial-gradient(800px 560px at 50% 60%, rgba(142,116,255,0.12), transparent 60%)",
        }}
      />

      {/* diamond outline */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.2, rotate: 45 }}
        animate={{ scale: 1, opacity: 1, rotate: 45 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[220px] h-[220px] border border-sv-accent/70"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      >
        {/* iris */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="absolute inset-8 rounded-full border border-sv-accent/70"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />
        {/* pupil pulse */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: [0.4, 0.9, 0.7], opacity: [0.6, 1, 0.9] }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-[88px] rounded-full bg-sv-accent/80 shadow-[0_0_40px_rgba(123,97,255,0.7)]"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />
      </motion.div>
    </div>
  )
}

function Panel({
  href,
  title,
  desc,
  badge,
}: {
  href: string
  title: string
  desc: string
  badge: string
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-card transition hover:border-sv-accent/60 hover:shadow-[0_0_40px_rgba(123,97,255,0.15)] focus:outline-none focus:ring-2 focus:ring-sv-accent"
    >
      {/* glow sweep */}
      <span className="pointer-events-none absolute -inset-20 opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px 200px at 10% 10%, rgba(123,97,255,0.15), transparent 60%)",
        }}
      />
      <div className="mb-1 text-[10px] tracking-[0.15em] uppercase text-sv-accent">{badge}</div>
      <div className="flex items-center justify-between">
        <div className="font-medium text-lg">{title}</div>
        <div className="text-sv-accent group-hover:translate-x-0.5 transition">→</div>
      </div>
      <div className="mt-1 text-sm text-sv-muted">{desc}</div>
    </Link>
  )
}

function MiniCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-2 text-sm uppercase tracking-wide text-sv-accent">{title}</div>
      <div className="text-sm text-sv-ink/90">{children}</div>
    </div>
  )
}
