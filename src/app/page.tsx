import Link from "next/link"

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to SilentVerse</h1>
      <p className="max-w-2xl text-gray-600">
        Your learning hub, global chatroom, social feed, and buy-only marketplace — all in one ecosystem.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Learning Hub" href="/learn" desc="Courses & lessons" />
        <Card title="Global Chat" href="/chat" desc="Realtime conversation" />
        <Card title="Social Feed" href="/feed" desc="Posts & reels" />
        <Card title="Marketplace" href="/market" desc="Curated store" />
        <Card title="Profile" href="/u/you" desc="Timeline & badges" />
        <Card title="Dashboard" href="/dashboard" desc="Stats & activity" />
      </div>
    </section>
  )
}

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="group rounded-xl border p-4 transition hover:shadow-sm">
      <div className="mb-1 font-medium">{title}</div>
      <div className="text-sm text-gray-500">{desc}</div>
      <div className="mt-2 text-xs text-gray-400 group-hover:text-gray-600">Open →</div>
    </Link>
  )
}
