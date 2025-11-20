import { writable, derived } from "svelte/store"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  categoryId: string
  image: string
  stock: number
  rating: number
}

const products: Product[] = [
  {
    id: "1",
    name: "Laptop Pro",
    description: "Laptop de alta performance con procesador último modelo",
    price: 1299.99,
    originalPrice: 1599.99,
    categoryId: "1",
    image: "/laptop-profesional.jpg",
    stock: 15,
    rating: 4.5,
  },
  {
    id: "2",
    name: "Auriculares Inalámbricos",
    description: "Auriculares con cancelación de ruido activa",
    price: 199.99,
    categoryId: "1",
    image: "/auriculares-wireless.jpg",
    stock: 32,
    rating: 4.3,
  },
  {
    id: "3",
    name: "Camiseta Premium",
    description: "Camiseta de algodón 100% premium",
    price: 29.99,
    originalPrice: 39.99,
    categoryId: "2",
    image: "/plain-tshirt.png",
    stock: 50,
    rating: 4.2,
  },
  {
    id: "4",
    name: "Pantalón Denim",
    description: "Pantalón denim clásico ajuste perfecto",
    price: 59.99,
    categoryId: "2",
    image: "/pantalon-denim.jpg",
    stock: 40,
    rating: 4.4,
  },
  {
    id: "5",
    name: "El Quijote",
    description: "Novela clásica de Miguel de Cervantes",
    price: 14.99,
    categoryId: "3",
    image: "/quijote-libro.jpg",
    stock: 25,
    rating: 4.8,
  },
  {
    id: "6",
    name: "Guía de Python",
    description: "Aprende Python desde cero",
    price: 39.99,
    originalPrice: 49.99,
    categoryId: "3",
    image: "/python-programming-book.png",
    stock: 18,
    rating: 4.6,
  },
  {
    id: "7",
    name: "Bicicleta Mountain Bike",
    description: "Bicicleta todo terreno con suspensión",
    price: 599.99,
    categoryId: "4",
    image: "/bicicleta-mountain.jpg",
    stock: 10,
    rating: 4.7,
  },
  {
    id: "8",
    name: "Botella Deportiva",
    description: "Botella térmica 750ml",
    price: 24.99,
    categoryId: "4",
    image: "/botella-deportiva.jpg",
    stock: 60,
    rating: 4.1,
  },
  {
    id: "9",
    name: "Lámpara LED",
    description: "Lámpara de escritorio LED inteligente",
    price: 44.99,
    categoryId: "5",
    image: "/lampara-led-escritorio.jpg",
    stock: 22,
    rating: 4.5,
  },
  {
    id: "10",
    name: "Almohada Premium",
    description: "Almohada ergonómica con espuma viscoelástica",
    price: 74.99,
    categoryId: "5",
    image: "/almohada-ergonomica.jpg",
    stock: 35,
    rating: 4.6,
  },
]

export const productsStore = writable<Product[]>(products)
export const selectedCategoryStore = writable<string | null>(null)

export const filteredProductsStore = derived(
  [productsStore, selectedCategoryStore],
  ([$products, $selectedCategory]) => {
    if (!$selectedCategory) return $products
    return $products.filter((p) => p.categoryId === $selectedCategory)
  },
)

export function getProductById(id: string) {
  return products.find((p) => p.id === id)
}

export function searchProducts(query: string) {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (p) => p.name.toLowerCase().includes(lowercaseQuery) || p.description.toLowerCase().includes(lowercaseQuery),
  )
}
