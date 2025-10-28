import { notFound } from "next/navigation"


export default function ProfilePage({ params }: { params: { handle: string } }) {
const { handle } = params
if (!handle) return notFound()


return (
<section className="space-y-3">
<h2 className="text-2xl font-semibold">Profile: @{handle}</h2>
<div className="grid gap-4 md:grid-cols-3">
<div className="rounded-lg border p-4 md:col-span-2">
<div className="font-medium">Timeline</div>
<div className="mt-2 text-sm text-gray-600">User activity will appear here.</div>
</div>
<aside className="rounded-lg border p-4">
<div className="font-medium">About</div>
<div className="mt-2 text-sm text-gray-600">Bio, links, badges…</div>
</aside>
</div>
</section>
)
}
