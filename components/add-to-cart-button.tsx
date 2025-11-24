"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"
import { toast } from "@/hooks/use-toast"
import { mutate } from "swr"
import { useRouter } from "next/navigation"

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const router = useRouter()

  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      })

      if (!res.ok) {
        const data = await res.json()
        if (res.status === 401) {
          toast({
            title: "Login required",
            description: "Please login to add items to cart",
            variant: "destructive",
          })
          router.push("/login")
          return
        }
        throw new Error(data.error || "Failed to add to cart")
      }

      mutate("/api/cart")
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add to cart",
        variant: "destructive",
      })
    }
  }

  return (
    <Button className="w-full" size="lg" onClick={handleAddToCart} disabled={product.stock === 0}>
      <ShoppingCart className="mr-2 h-5 w-5" />
      {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
    </Button>
  )
}
