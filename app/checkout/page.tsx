"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import useSWR from "swr"
import { toast } from "@/hooks/use-toast"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function CheckoutForm({ orderId }: { orderId: string }) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      })

      if (error) {
        toast({
          title: "Payment failed",
          description: error.message,
          variant: "destructive",
        })
        setIsProcessing(false)
        return
      }

      toast({
        title: "Payment successful!",
        description: "Your order has been placed",
      })

      router.push(`/orders/${orderId}`)
    } catch (error) {
      console.error("[v0] Payment error:", error)
      toast({
        title: "Error",
        description: "Failed to process payment",
        variant: "destructive",
      })
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button type="submit" className="w-full" size="lg" disabled={!stripe || isProcessing}>
        {isProcessing ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  )
}

export default function CheckoutPage() {
  const router = useRouter()
  const [orderId, setOrderId] = useState<string | null>(null)
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const { data: cartData } = useSWR("/api/cart", fetcher)

  useEffect(() => {
    const createOrder = async () => {
      try {
        // Create order
        const orderRes = await fetch("/api/orders", {
          method: "POST",
        })

        if (!orderRes.ok) {
          const data = await orderRes.json()
          throw new Error(data.error || "Failed to create order")
        }

        const orderData = await orderRes.json()
        setOrderId(orderData.order.id)

        // Create payment intent
        const paymentRes = await fetch("/api/payments/create-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId: orderData.order.id }),
        })

        if (!paymentRes.ok) {
          throw new Error("Failed to create payment intent")
        }

        const paymentData = await paymentRes.json()
        setClientSecret(paymentData.clientSecret)
      } catch (error) {
        console.error("[v0] Checkout error:", error)
        toast({
          title: "Error",
          description: "Failed to initialize checkout",
          variant: "destructive",
        })
        router.push("/cart")
      }
    }

    if (cartData?.cart?.items?.length > 0) {
      createOrder()
    } else if (cartData?.cart?.items?.length === 0) {
      router.push("/cart")
    }
  }, [cartData, router])

  if (!clientSecret || !orderId) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center py-8">
        <p className="text-muted-foreground">Loading checkout...</p>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Payment Details</h2>
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: { theme: "stripe" },
            }}
          >
            <CheckoutForm orderId={orderId} />
          </Elements>
        </div>
      </div>
    </div>
  )
}
