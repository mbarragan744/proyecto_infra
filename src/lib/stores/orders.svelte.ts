import { writable } from "svelte/store"
import type { CartItem } from "$lib/store.svelte.js"

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "pending" | "confirmed" | "shipped" | "delivered"
  createdAt: Date
  deliveryDate?: Date
}

function createOrdersStore() {
  const { subscribe, set, update } = writable<Order[]>([])

  return {
    subscribe,
    createOrder: (userId: string, items: CartItem[], total: number) => {
      const order: Order = {
        id: `ORD-${Date.now()}`,
        userId,
        items,
        total,
        status: "confirmed",
        createdAt: new Date(),
        deliveryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 días
      }
      update((orders) => [order, ...orders])
      localStorage.setItem("orders", JSON.stringify(update((o) => o)))
    },
    getOrdersByUserId: (userId: string) => {
      let orders: Order[] = []
      subscribe((o) => (orders = o))()
      return orders.filter((order) => order.userId === userId)
    },
    updateOrderStatus: (orderId: string, status: Order["status"]) => {
      update((orders) => orders.map((order) => (order.id === orderId ? { ...order, status } : order)))
    },
  }
}

export const ordersStore = createOrdersStore()
