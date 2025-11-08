// This simulates where you would use a tRPC hook (e.g., from @trpc/react-query)
// function useGetCourses() { /* ... */ }

function useGetCoursesMock() {
  const courses = [
    { id: "c1", title: "Foundation: Web3 Basics", status: "In Progress" },
    { id: "c2", title: "Mastering Next.js & tRPC", status: "New" },
    { id: "c3", title: "Design Systems in Tailwind", status: "Completed" },
  ]
  return { courses, isLoading: false }
}

export default function LearnPage() {
  const { courses, isLoading } = useGetCoursesMock()

  if (isLoading) return <div className="space-y-4"><p className="text-sv-muted">Downloading knowledge...</p></div>

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Learning Hub (Dynamic)</h2>
      <p className="text-sv-muted">
        Courses and lessons powered by the new database schema.
      </p>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((c) => (
          <div key={c.id} className="rounded-lg border border-white/10 bg-white/5 p-4 space-y-1">
            <div className="font-medium text-lg">{c.title}</div>
            <div className={`text-sm ${c.status === 'Completed' ? 'text-green-400' : 'text-sv-accent'}`}>
              Status: {c.status}
            </div>
            {/* Link to a dynamic course page would go here */}
            <a href={`/learn/${c.id}`} className="block mt-2 text-sm text-sv-muted hover:text-sv-ink transition">
              View Course →
            </a>
          </div>
        ))}
        {courses.length === 0 && (
           <p className="text-sv-muted">No courses available. Seed your `Course` model to populate the hub.</p>
        )}
      </div>
    </div>
  )
}
