import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Truck, CreditCard, Shield } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/mock-data"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">Welcome to E-Shop</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Discover amazing products at unbeatable prices. Shop the latest electronics, accessories, and more with
              fast shipping and secure checkout.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link href="/products">
                <Button size="lg" className="gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Shop Now
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="mt-2 text-muted-foreground">Check out our most popular items</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/products">
              <Button variant="outline">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Fast Shipping</h3>
              <p className="mt-2 text-sm text-muted-foreground">Free delivery on orders over $50</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Secure Payment</h3>
              <p className="mt-2 text-sm text-muted-foreground">100% secure transactions</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Quality Guarantee</h3>
              <p className="mt-2 text-sm text-muted-foreground">30-day money-back guarantee</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Best Selection</h3>
              <p className="mt-2 text-sm text-muted-foreground">Curated products for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-balance">Ready to Start Shopping?</h2>
            <p className="mt-4 text-muted-foreground">
              Join thousands of satisfied customers and find your perfect products today.
            </p>
            <Link href="/products" className="mt-8 inline-block">
              <Button size="lg">Browse Products</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
