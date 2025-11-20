import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

const products = [
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
]

export const GET: RequestHandler = async ({ url }) => {
  const categoryId = url.searchParams.get("categoryId")
  const search = url.searchParams.get("search")

  let filtered = products

  if (categoryId) {
    filtered = filtered.filter((p) => p.categoryId === categoryId)
  }

  if (search) {
    const query = search.toLowerCase()
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query),
    )
  }

  return json({ products: filtered })
}
