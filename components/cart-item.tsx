"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CartItem as CartItemType } from "@/lib/types"
import { toast } from "@/hooks/use-toast"
import { mutate } from "swr"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const updateQuantity = async (newQuantity: number) => {
    if (newQuantity < 1) return

    try {
      const res = await fetch(`/api/cart/${item.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to update quantity")
      }

      mutate("/api/cart")
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update quantity",
        variant: "destructive",
      })
    }
  }

  const removeItem = async () => {
    try {
      const res = await fetch(`/api/cart/${item.id}`, {
        method: "DELETE",
      })

      if (!res.ok) {
        throw new Error("Failed to remove item")
      }

      mutate("/api/cart")
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove item",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex gap-4 rounded-lg border p-4">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-muted">
        <Image
          src={item.product.image || "/placeholder.svg?height=100&width=100"}
          alt={item.product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold">{item.product.name}</h3>
          <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)} each</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => updateQuantity(item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => updateQuantity(item.quantity + 1)}
              disabled={item.quantity >= item.product.stock}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={removeItem}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
