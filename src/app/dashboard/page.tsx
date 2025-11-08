export default function DashboardPage() {
  // These bodies are updated to reflect the new functionality (Prisma/Stripe)
  const cards = [
    { title: "Learning Progress", body: "0 courses started (Connects to 'CourseProgress')" },
    { title: "Saved Posts", body: "0 saved (Future DB Feature)" },
    { title: "Orders", body: "0 orders (Connects to 'Order' model)" },
    { title: "Notifications", body: "All caught up" },
  ]
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="font-medium">{c.title}</div>
            <div className="mt-1 text-sm text-sv-muted">{c.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
