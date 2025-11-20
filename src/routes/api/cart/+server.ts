import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

interface CartItem {
  id: string
  quantity: number
  product: any
}

interface Cart {
  userId: string
  items: CartItem[]
  total: number
}

// Simulación de base de datos en memoria
const carts: Map<string, Cart> = new Map()

export const GET: RequestHandler = async ({ request }) => {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 })
    }

    const token = authHeader.replace("Bearer ", "")
    const userId = Buffer.from(token, "base64").toString()

    const cart = carts.get(userId) || { userId, items: [], total: 0 }
    return json({ cart })
  } catch (error) {
    return json({ error: "Error al obtener carrito" }, { status: 500 })
  }
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 })
    }

    const token = authHeader.replace("Bearer ", "")
    const userId = Buffer.from(token, "base64").toString()

    const { productId, quantity, product } = await request.json()

    if (!productId || !quantity) {
      return json({ error: "productId y quantity son requeridos" }, { status: 400 })
    }

    const cart = carts.get(userId) || { userId, items: [], total: 0 }

    const existingItem = cart.items.find((item) => item.id === productId)
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.items.push({ id: productId, quantity, product })
    }

    // Calcular total
    cart.total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    carts.set(userId, cart)

    return json({ message: "Producto agregado al carrito", cart }, { status: 201 })
  } catch (error) {
    return json({ error: "Error al agregar al carrito" }, { status: 500 })
  }
}

export const DELETE: RequestHandler = async ({ request, url }) => {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 })
    }

    const token = authHeader.replace("Bearer ", "")
    const userId = Buffer.from(token, "base64").toString()

    const productId = url.searchParams.get("productId")

    const cart = carts.get(userId)
    if (!cart) {
      return json({ error: "Carrito no encontrado" }, { status: 404 })
    }

    cart.items = cart.items.filter((item) => item.id !== productId)
    cart.total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

    if (cart.items.length === 0) {
      carts.delete(userId)
    } else {
      carts.set(userId, cart)
    }

    return json({ message: "Producto removido del carrito", cart })
  } catch (error) {
    return json({ error: "Error al remover del carrito" }, { status: 500 })
  }
}

export const PATCH: RequestHandler = async ({ request }) => {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 })
    }

    const token = authHeader.replace("Bearer ", "")
    const userId = Buffer.from(token, "base64").toString()

    const { productId, quantity } = await request.json()

    const cart = carts.get(userId)
    if (!cart) {
      return json({ error: "Carrito no encontrado" }, { status: 404 })
    }

    const item = cart.items.find((i) => i.id === productId)
    if (!item) {
      return json({ error: "Producto no encontrado en carrito" }, { status: 404 })
    }

    if (quantity <= 0) {
      cart.items = cart.items.filter((i) => i.id !== productId)
    } else {
      item.quantity = quantity
    }

    cart.total = cart.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
    carts.set(userId, cart)

    return json({ message: "Carrito actualizado", cart })
  } catch (error) {
    return json({ error: "Error al actualizar carrito" }, { status: 500 })
  }
}
