"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart-item"
import useSWR from "swr"
import { ShoppingBag } from "lucide-react"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function CartPage() {
  const { data, error, isLoading } = useSWR("/api/cart", fetcher)

  if (isLoading) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center py-8">
        <p className="text-muted-foreground">Loading cart...</p>
      </div>
    )
  }

  if (error || !data?.cart) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Failed to load cart</p>
          <Link href="/login" className="mt-4 inline-block">
            <Button>Login to view cart</Button>
          </Link>
        </div>
      </div>
    )
  }

  const { cart, total } = data

  if (cart.items.length === 0) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center py-8">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
          <h2 className="mt-4 text-2xl font-semibold">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">Start shopping to add items to your cart</p>
          <Link href="/products" className="mt-6 inline-block">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {cart.items.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-lg border bg-muted/50 p-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-2xl font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link href="/checkout" className="mt-6 block">
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
            </Link>

            <Link href="/products" className="mt-3 block">
              <Button className="w-full bg-transparent" variant="outline">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
