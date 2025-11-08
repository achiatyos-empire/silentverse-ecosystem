import Link from "next/link"

export default function HomePage() {
  return (
    // Note: The flex-1 in layout.tsx ensures this content is centered vertically 
    // within the available screen space.
    <section className="space-y-10 text-center max-w-3xl mx-auto">
      <div className="space-y-6">
        {/* REMOVED: The large logo/title block 
        <div className="flex items-center justify-center gap-3">
          <img src="/logo.png" alt="SilentVerse" width={56} height={56} className="rounded-none" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">SILENTVERSE</h1>
        </div>
        */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">SILENTVERSE</h1>
        <p className="text-sv-muted">
          Infinite value — zero noise. A calm, cosmic space for learning, connection, and curated discovery.
        </p>
      </div>

      <div>
        <Link
          href="/verse"
          className="inline-block rounded-full bg-sv-accent text-black px-7 py-3 text-sm font-semibold hover:bg-sv-accent-strong transition focus:outline-none focus:ring-2 focus:ring-sv-accent-strong focus:ring-offset-2 focus:ring-offset-black"
        >
          ENTER THE VERSE
        </Link>
        <p className="mt-2 text-xs text-sv-muted">Opens the portal to explore everything SilentVerse offers.</p>
      </div>
    </section>
  )
}
