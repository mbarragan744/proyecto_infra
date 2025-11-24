import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/lib/mock-data"

export default async function ProductsPage() {
  const products = getProducts()

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="mt-2 text-muted-foreground">Browse our complete collection of products</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">No products available yet.</p>
        </div>
      )}
    </div>
  )
}
