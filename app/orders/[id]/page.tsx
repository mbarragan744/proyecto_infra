"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import useSWR from "swr"
import { ArrowLeft } from "lucide-react"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const { data, error, isLoading } = useSWR(`/api/orders/${id}`, fetcher)

  if (isLoading) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center py-8">
        <p className="text-muted-foreground">Loading order...</p>
      </div>
    )
  }

  if (error || !data?.order) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Order not found</p>
          <Link href="/profile" className="mt-4 inline-block">
            <Button>Back to Profile</Button>
          </Link>
        </div>
      </div>
    )
  }

  const { order } = data

  return (
    <div className="container py-8">
      <Link
        href="/profile"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Profile
      </Link>

      <h1 className="mb-8 text-3xl font-bold">Order #{order.id.slice(0, 8)}</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {order.items.map((item: any) => (
              <div key={item.id} className="flex gap-4 rounded-lg border p-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={item.product.image || "/placeholder.svg?height=80&width=80" || "/placeholder.svg"}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Order Date</p>
              <p className="font-medium">{new Date(order.createdAt).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="font-medium capitalize">{order.status}</p>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-2xl font-bold">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
