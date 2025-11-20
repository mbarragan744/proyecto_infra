import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

// Simulación de base de datos
const orders: Map<string, any[]> = new Map()

export const GET: RequestHandler = async ({ request, params }) => {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 })
    }

    const token = authHeader.replace("Bearer ", "")
    const userId = Buffer.from(token, "base64").toString()

    const userOrders = orders.get(userId) || []
    const order = userOrders.find((o) => o.id === params.id)

    if (!order) {
      return json({ error: "Pedido no encontrado" }, { status: 404 })
    }

    return json({ order })
  } catch (error) {
    return json({ error: "Error al obtener pedido" }, { status: 500 })
  }
}

export const PATCH: RequestHandler = async ({ request, params }) => {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 })
    }

    const token = authHeader.replace("Bearer ", "")
    const userId = Buffer.from(token, "base64").toString()

    const { status } = await request.json()

    const userOrders = orders.get(userId) || []
    const order = userOrders.find((o) => o.id === params.id)

    if (!order) {
      return json({ error: "Pedido no encontrado" }, { status: 404 })
    }

    order.status = status
    orders.set(userId, userOrders)

    return json({ message: "Pedido actualizado", order })
  } catch (error) {
    return json({ error: "Error al actualizar pedido" }, { status: 500 })
  }
}
