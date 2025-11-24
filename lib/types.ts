export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string | null
  stock: number
  category: string | null
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  id: string
  cartId: string
  productId: string
  quantity: number
  product: Product
}

export interface Cart {
  id: string
  userId: string
  items: CartItem[]
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  quantity: number
  price: number
  product: Product
}

export interface Order {
  id: string
  userId: string
  total: number
  status: string
  paymentIntentId: string | null
  createdAt: Date
  items: OrderItem[]
}
