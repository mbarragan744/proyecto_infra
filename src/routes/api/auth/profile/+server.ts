import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async ({ request }) => {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 })
    }

    const token = authHeader.replace("Bearer ", "")
    const email = Buffer.from(token, "base64").toString()

    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const user = users.find((u: any) => u.email === email)

    if (!user) {
      return json({ error: "Usuario no encontrado" }, { status: 404 })
    }

    const { password: _, ...userWithoutPassword } = user
    return json({ user: userWithoutPassword })
  } catch (error) {
    return json({ error: "Error al obtener perfil" }, { status: 500 })
  }
}

export const PATCH: RequestHandler = async ({ request }) => {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 })
    }

    const token = authHeader.replace("Bearer ", "")
    const email = Buffer.from(token, "base64").toString()

    const updates = await request.json()
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    const userIndex = users.findIndex((u: any) => u.email === email)
    if (userIndex === -1) {
      return json({ error: "Usuario no encontrado" }, { status: 404 })
    }

    const updatedUser = { ...users[userIndex], ...updates, password: users[userIndex].password }
    users[userIndex] = updatedUser

    localStorage.setItem("users", JSON.stringify(users))

    const { password: _, ...userWithoutPassword } = updatedUser
    return json({ message: "Perfil actualizado", user: userWithoutPassword })
  } catch (error) {
    return json({ error: "Error al actualizar perfil" }, { status: 500 })
  }
}
