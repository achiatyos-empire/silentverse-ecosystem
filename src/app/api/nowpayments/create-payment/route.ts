import { NextRequest } from "next/server"

// IMPORTANT: Ensure NEXT_PUBLIC_NOWPAYMENTS_API_KEY and PAYOUT_WALLET are set in your .env file
const NOWPAYMENTS_API_KEY = process.env.NOWPAYMENTS_API_KEY || ""
const NOWPAYMENTS_API_URL = "https://api.nowpayments.io/v1/payment"

// Mock database query (replace with actual Prisma/DB lookup)
// The price should always be fetched from the database, not trusted from the client.
const getProductDetails = (id: string) => {
  if (id === "p1") return { price_amount: 49.00, title: "SV Hoodie", order_description: "SV Hoodie Purchase" }
  if (id === "p2") return { price_amount: 99.00, title: "Course Bundle", order_description: "Mastery Course Bundle" }
  return null
}

export async function POST(req: NextRequest) {
  try {
    if (!NOWPAYMENTS_API_KEY) {
      throw new Error("NOWPAYMENTS_API_KEY is not configured.")
    }

    const { productId, orderId } = await req.json() // orderId is a placeholder for a unique identifier
    const productData = getProductDetails(productId)
    
    if (!productData) {
        return Response.json({ error: "Product not found" }, { status: 404 })
    }

    // 1. Prepare data for NOWPayments API call
    const payload = {
      price_amount: productData.price_amount, // The product price in FIAT currency (e.g., USD)
      price_currency: "usd", // Fiat currency, adjust as needed
      // Optional: pay_currency (If not specified, customer can choose on the invoice page)
      order_id: orderId || `SV-${Date.now()}`, // Internal unique ID
      order_description: productData.order_description,
      ipn_callback_url: `${req.nextUrl.origin}/api/nowpayments/ipn-webhook`, // IMPORTANT: Create this endpoint later
      success_url: `${req.nextUrl.origin}/dashboard?payment=success`,
      cancel_url: `${req.nextUrl.origin}/market?payment=canceled`,
    }

    // 2. Call the NOWPayments Create Payment API
    const npResponse = await fetch(NOWPAYMENTS_API_URL, {
      method: "POST",
      headers: { 
        "X-Api-Key": NOWPAYMENTS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const npData = await npResponse.json()

    if (!npResponse.ok || npData.error) {
      console.error("NOWPayments API Error:", npData)
      return Response.json({ error: npData.message || "Failed to create payment with NOWPayments." }, { status: 500 })
    }

    // 3. Return the hosted payment page URL to the client
    // The hosted checkout URL is returned as 'invoice_url' in the response
    return Response.json({ url: npData.invoice_url }) 

  } catch (error) {
    console.error("NOWPayments Integration Error:", error)
    return Response.json({ error: (error as Error).message }, { status: 500 })
  }
}

// NOTE: You must also create the IPN Webhook endpoint at
// src/app/api/nowpayments/ipn-webhook/route.ts to securely confirm payments.
