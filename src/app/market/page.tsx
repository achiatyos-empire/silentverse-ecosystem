import { useState } from "react"
import { useRouter } from "next/navigation"

// This simulates where you would use a tRPC hook (e.g., from @trpc/react-query)
// function useGetProducts() { /* ... */ }

function useGetProductsMock() {
  const products = [
    { id: "p1", title: "SV Hoodie", price: 4900, description: "Limited Edition SV Apparel", image: "/logo.png" },
    { id: "p2", title: "Course Bundle: Mastery", price: 9900, description: "Full access to all current courses.", image: "/globe.svg" },
  ]
  // prices are now in cents to align with Stripe
  return { products, isLoading: false }
}

export default function MarketPage() {
  const { products, isLoading } = useGetProductsMock()

  if (isLoading) return <section className="space-y-4"><p className="text-sv-muted">Retrieving catalog from the void...</p></section>

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Marketplace (Stripe Integrated)</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <p className="text-xs text-sv-muted">
        Backend Stripe checkout route is now connected, awaiting full implementation.
      </p>
    </section>
  )
}

interface Product {
  id: string
  title: string
  price: number // in cents
  description: string
}

function ProductCard({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    setLoading(true)
    try {
      // 1. Call the new API Route (src/app/api/stripe/checkout/route.ts)
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, quantity: 1, title: product.title, price: product.price }),
      })

      const data = await response.json()
      
      if (data.url) {
        // 2. Redirect to Stripe Checkout Session
        router.push(data.url)
      } else {
        throw new Error(data.error || "Failed to create checkout session.")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Error initiating checkout. See console for details.")
    } finally {
      setLoading(false)
    }
  }

  const displayPrice = `$${(product.price / 100).toFixed(2)}`

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4 space-y-2">
      <div className="font-medium text-lg">{product.title}</div>
      <div className="text-sm text-sv-ink/70">{product.description}</div>
      <div className="text-sm text-sv-accent font-mono">{displayPrice}</div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="mt-3 rounded-md bg-sv-accent px-3 py-1.5 text-sm font-medium text-black transition hover:bg-sv-accent-strong disabled:opacity-50 w-full"
      >
        {loading ? "Processing..." : "Buy Now"}
      </button>
    </div>
  )
}
