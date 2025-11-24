import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/auth"

// 📌 Obtener carrito
export async function GET() {
  try {
    const auth = await requireAuth()

    let cart = await prisma.cart.findUnique({
      where: { userId: auth.userId },
      include: {
        items: {
          include: { product: true },
        },
      },
    })

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId: auth.userId },
        include: {
          items: { include: { product: true } },
        },
      })
    }

    const total = cart.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    )

    return NextResponse.json({ cart, total })
  } catch (error) {
    console.error("Get cart error:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

// 📌 Agregar producto al carrito
export async function POST(request: NextRequest) {
  try {
    const auth = await requireAuth()
    const { productId, quantity = 1 } = await request.json()

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    })

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // ⚠️ Si quieres manejar stock, descomenta esto:
    // if (product.stock < quantity) {
    //   return NextResponse.json({ error: "Insufficient stock" }, { status: 400 })
    // }

    let cart = await prisma.cart.findUnique({
      where: { userId: auth.userId },
    })

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId: auth.userId },
      })
    }

    const existingItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
    })

    if (existingItem) {
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
      })
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      })
    }

    const updatedCart = await prisma.cart.findUnique({
      where: { id: cart.id },
      include: {
        items: { include: { product: true } },
      },
    })

    const total = updatedCart?.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    ) ?? 0

    return NextResponse.json({ cart: updatedCart, total })
  } catch (error) {
    console.error("Add to cart error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// 📌 Vaciar carrito
export async function DELETE() {
  try {
    const auth = await requireAuth()

    const cart = await prisma.cart.findUnique({
      where: { userId: auth.userId },
    })

    if (cart) {
      await prisma.cartItem.deleteMany({
        where: { cartId: cart.id },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Clear cart error:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
