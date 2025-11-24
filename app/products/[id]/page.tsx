import { notFound } from "next/navigation"
import Image from "next/image"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { getProductById } from "@/lib/mock-data"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image
            src={product.image || "/placeholder.svg?height=600&width=600"}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col">
          <div>
            {product.category && <p className="text-sm text-muted-foreground">{product.category}</p>}
            <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
            <p className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</p>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold">Description</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{product.description}</p>
          </div>

          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              {product.stock > 0 ? (
                <>
                  <span className="font-medium text-foreground">{product.stock}</span> items in stock
                </>
              ) : (
                <span className="font-medium text-destructive">Out of stock</span>
              )}
            </p>
          </div>

          <div className="mt-auto pt-8">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}
