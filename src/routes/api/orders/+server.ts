import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface Order {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: "pending" | "confirmed" | "shipped" | "delivered"
  createdAt: string
  deliveryDate?: string
}

// Simulación de base de datos en memoria
const orders: Map<string, Order[]> = new Map()

export const GET: RequestHandler = async ({ request, url }) => {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 })
    }

    const token = authHeader.replace("Bearer ", "")
    const userId = Buffer.from(token, "base64").toString()

    const userOrders = orders.get(userId) || []
    return json({ orders: userOrders })
  } catch (error) {
    return json({ error: "Error al obtener pedidos" }, { status: 500 })
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

    const { items, total } = await request.json()

    if (!items || items.length === 0 || !total) {
      return json({ error: "items y total son requeridos" }, { status: 400 })
    }

    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      userId,
      items,
      total,
      status: "confirmed",
      createdAt: new Date().toISOString(),
      deliveryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    }

    const userOrders = orders.get(userId) || []
    userOrders.unshift(newOrder)
    orders.set(userId, userOrders)

    return json({ message: "Pedido creado exitosamente", order: newOrder }, { status: 201 })
  } catch (error) {
    return json({ error: "Error al crear pedido" }, { status: 500 })
  }
}
