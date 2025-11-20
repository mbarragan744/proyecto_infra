import { writable } from "svelte/store"

export interface Category {
  id: string
  name: string
  slug: string
  description: string
}

const categories: Category[] = [
  { id: "1", name: "Electrónica", slug: "electronica", description: "Dispositivos electrónicos" },
  { id: "2", name: "Ropa", slug: "ropa", description: "Prendas de vestir" },
  { id: "3", name: "Libros", slug: "libros", description: "Literatura y educación" },
  { id: "4", name: "Deportes", slug: "deportes", description: "Equipamiento deportivo" },
  { id: "5", name: "Hogar", slug: "hogar", description: "Artículos para el hogar" },
]

export const categoriesStore = writable<Category[]>(categories)

export function getCategories() {
  return categories
}

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id)
}
