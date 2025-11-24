export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  stock: number
  category: string
  createdAt: string
  updatedAt: string
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 199.99,
    image: "/wireless-headphones.png",
    stock: 50,
    category: "Electronics",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with heart rate monitor and GPS",
    price: 299.99,
    image: "/smartwatch-lifestyle.png",
    stock: 30,
    category: "Electronics",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Laptop Backpack",
    description: "Water-resistant laptop backpack with USB charging port",
    price: 59.99,
    image: "/laptop-backpack.png",
    stock: 100,
    category: "Accessories",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    description: "RGB mechanical gaming keyboard with blue switches",
    price: 149.99,
    image: "/mechanical-keyboard.png",
    stock: 45,
    category: "Electronics",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI",
    price: 49.99,
    image: "/wireless-mouse.png",
    stock: 75,
    category: "Electronics",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "6",
    name: "USB-C Hub",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader",
    price: 39.99,
    image: "/usb-c-hub.jpg",
    stock: 60,
    category: "Accessories",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "7",
    name: "Phone Stand",
    description: "Adjustable aluminum phone stand for desk",
    price: 24.99,
    image: "/phone-stand.jpg",
    stock: 120,
    category: "Accessories",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "8",
    name: "Webcam 1080p",
    description: "Full HD webcam with auto-focus and noise reduction",
    price: 79.99,
    image: "/classic-webcam.png",
    stock: 35,
    category: "Electronics",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export function getProducts(category?: string): Product[] {
  if (category) {
    return mockProducts.filter((p) => p.category === category)
  }
  return mockProducts
}

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return mockProducts.slice(0, 4)
}

export const products = mockProducts
