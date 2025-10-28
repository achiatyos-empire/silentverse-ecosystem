export default function DashboardPage() {
const cards = [
{ title: "Learning Progress", body: "0 courses started" },
{ title: "Saved Posts", body: "0 saved" },
{ title: "Orders", body: "0 orders" },
{ title: "Notifications", body: "All caught up" },
]
return (
<section className="space-y-4">
<h2 className="text-2xl font-semibold">Dashboard</h2>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
{cards.map((c) => (
<div key={c.title} className="rounded-lg border p-4">
<div className="font-medium">{c.title}</div>
<div className="mt-1 text-sm text-gray-600">{c.body}</div>
</div>
))}
</div>
</section>
)
}
