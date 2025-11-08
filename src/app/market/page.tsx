"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

// This simulates where you would use a tRPC hook (e.g., from @trpc/react-query)
// function useGetProducts() { /* ... */ }

function useGetProductsMock() {
  const products = [
    // Prices are now in FIAT units (e.g., USD) for NOWPayments compatibility
    { id: "p1", title: "SV Hoodie", price: 49.00, description: "Limited Edition SV Apparel", image: "/logo.png" },
    { id: "p2", title: "Course Bundle: Mastery", price: 99.00, description: "Full access to all current courses.", image: "/globe.svg" },
  ]
  return { products, isLoading: false }
}

export default function MarketPage() {
  const { products, isLoading } = useGetProductsMock()

  if (isLoading) return <section className="space-y-4"><p className="text-sv-muted">Retrieving catalog from the void...</p></section>

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Marketplace (NOWPayments Integrated)</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <p className="text-xs text-sv-muted">
        Backend **NOWPayments** endpoint is now connected. You must configure your `.env` and create the IPN webhook to finalize.
      </p>
    </section>
  )
}

interface Product {
  id: string
  title: string
  price: number // in FIAT (e.g., USD)
  description: string
}

function ProductCard({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    setLoading(true)
    try {
      // Use a simple mock order ID for now. In a real app, this comes from Prisma/DB.
      const mockOrderId = `ORD-${Date.now()}` 

      // 1. Call the new NOWPayments API Route
      const response = await fetch("/api/nowpayments/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          productId: product.id, 
          quantity: 1, 
          orderId: mockOrderId,
          // NOTE: Price is intentionally NOT sent as the main payment price to the server, 
          // as per best practice (price should be fetched server-side from DB)
        }),
      })

      const data = await response.json()
      
      if (data.url) {
        // 2. Redirect to the hosted NOWPayments Invoice/Payment URL
        router.push(data.url)
      } else {
        throw new Error(data.error || "Failed to create NOWPayments session.")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Error initiating crypto payment. See console for details.")
    } finally {
      setLoading(false)
    }
  }

  const displayPrice = `$${product.price.toFixed(2)}`

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
        {loading ? "Generating Crypto Invoice..." : "Pay with Crypto"}
      </button>
    </div>
  )
}
