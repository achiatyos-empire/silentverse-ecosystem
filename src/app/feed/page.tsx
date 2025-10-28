export default function FeedPage() {
  const demo = [
    { id: 1, author: "@nova", body: "SilentVerse is launching soon!" },
    { id: 2, author: "@echo", body: "Learning hub mockups look 🔥" },
  ]

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Feed</h2>
      <div className="space-y-3">
        {demo.map((p) => (
          <article key={p.id} className="rounded-lg border p-3">
            <div className="text-sm text-gray-500">{p.author}</div>
            <div className="mt-1">{p.body}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
