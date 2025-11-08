// This simulates where you would use a tRPC hook (e.g., from @trpc/react-query)
// function useGetFeedPosts() { return { data: [], isLoading: false } }
// const { data: posts, isLoading } = useGetFeedPosts() 

export default function FeedPage() {
  // REPLACED WITH STATIC DATA FOR DEMO PURPOSES, ASSUMING DB FETCHING IS NEXT
  const posts = [
    { id: 1, author: "@nova", body: "SilentVerse is launching soon!" },
    { id: 2, author: "@echo", body: "Learning hub mockups look 🔥" },
    { id: 3, author: "@admin", body: "The new data layer is online. Time to integrate!" },
  ]

  // if (isLoading) return <p className="text-sv-muted">Loading cosmic data...</p>

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Feed (Database Ready)</h2>
      <div className="space-y-3">
        {posts.map((p) => (
          <article key={p.id} className="rounded-lg border p-3">
            <div className="text-sm text-sv-muted">{p.author}</div>
            <div className="mt-1">{p.body}</div>
          </article>
        ))}
        {posts.length === 0 && (
           <p className="text-sv-muted">No posts found. Start populating the `Post` model in your database.</p>
        )}
      </div>
    </section>
  )
}
