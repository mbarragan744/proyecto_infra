import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const POST: RequestHandler = async ({ request }) => {
  const { email, name, password } = await request.json()

  // Validaciones
  if (!email || !name || !password) {
    return json({ error: "Todos los campos son requeridos" }, { status: 400 })
  }

  if (password.length < 6) {
    return json({ error: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 })
  }

  try {
    // Obtener usuarios del localStorage simulado
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    // Verificar si el email ya existe
    if (users.some((u: any) => u.email === email)) {
      return json({ error: "Este email ya está registrado" }, { status: 409 })
    }

    // Crear nuevo usuario
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      password,
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      role: "customer",
      createdAt: new Date().toISOString(),
    }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    // No retornar la contraseña
    const { password: _, ...userWithoutPassword } = newUser

    return json({ message: "Usuario registrado exitosamente", user: userWithoutPassword }, { status: 201 })
  } catch (error) {
    return json({ error: "Error al registrar usuario" }, { status: 500 })
  }
}
