export default function MarketPage() {
  const products = [
    { id: "p1", title: "SV Hoodie", price: 49 },
    { id: "p2", title: "Course Bundle", price: 99 },
  ]

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Marketplace (buy-only)</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {products.map((p) => (
          <div key={p.id} className="rounded-lg border p-4">
            <div className="font-medium">{p.title}</div>
            <div className="text-sm text-gray-500">${p.price}</div>
            <button className="mt-3 rounded-md bg-gray-900 px-3 py-1.5 text-white">Add to cart</button>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500">Stripe checkout will be connected in a later step.</p>
    </section>
  )
}
