import { writable } from "svelte/store"
import type { Product } from "./stores/products.svelte.js"

export interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

function createCartStore() {
  const { subscribe, set, update } = writable<CartItem[]>([])
  let itemsArray: CartItem[] = []

  subscribe((items) => {
    itemsArray = items
  })

  return {
    subscribe,
    get items() {
      return itemsArray
    },
    addItem: (product: Product) => {
      update((items) => {
        const existingItem = items.find((item) => item.id === product.id)
        if (existingItem) {
          existingItem.quantity += 1
          return items
        }
        return [...items, { ...product, quantity: 1 }]
      })
    },
    removeItem: (id: string) => {
      update((items) => items.filter((item) => item.id !== id))
    },
    updateQuantity: (id: string, quantity: number) => {
      update((items) =>
        items
          .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item))
          .filter((item) => item.quantity > 0),
      )
    },
    clearCart: () => {
      set([])
    },
    getTotal: () => {
      return itemsArray.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
  }
}

export const cartItems = createCartStore()
