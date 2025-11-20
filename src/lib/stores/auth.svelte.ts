import { writable } from "svelte/store"

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  address?: string
  city?: string
  postalCode?: string
  country?: string
  password: string
  role: "customer" | "admin"
}

interface AuthError {
  field?: string
  message: string
}

function createAuthStore() {
  const { subscribe, set, update } = writable<User | null>(null)
  const errorStore = writable<AuthError | null>(null)

  // Inicializar usuarios de demostración
  const initializeDemoUsers = () => {
    const users = localStorage.getItem("users")
    if (!users) {
      const demoUsers: User[] = [
        {
          id: "demo1",
          email: "demo@example.com",
          name: "Usuario Demo",
          password: "demo123",
          phone: "+34 666 777 888",
          address: "Calle Principal 123",
          city: "Madrid",
          postalCode: "28001",
          country: "España",
          role: "customer",
        },
      ]
      localStorage.setItem("users", JSON.stringify(demoUsers))
    }
  }

  initializeDemoUsers()

  return {
    subscribe,
    setError: (error: AuthError | null) => {
      errorStore.set(error)
    },
    subscribeError: errorStore.subscribe,

    // Crear usuario (registro)
    register: (email: string, name: string, password: string): boolean => {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]")

      if (users.some((u) => u.email === email)) {
        errorStore.set({ field: "email", message: "Este email ya está registrado" })
        return false
      }

      if (password.length < 6) {
        errorStore.set({ field: "password", message: "La contraseña debe tener al menos 6 caracteres" })
        return false
      }

      const newUser: User = {
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
      }

      users.push(newUser)
      localStorage.setItem("users", JSON.stringify(users))
      set(newUser)
      errorStore.set(null)
      return true
    },

    // Iniciar sesión
    login: (email: string, password: string): boolean => {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]")
      const user = users.find((u) => u.email === email && u.password === password)

      if (!user) {
        errorStore.set({ message: "Email o contraseña incorrectos" })
        return false
      }

      set(user)
      localStorage.setItem("currentUser", JSON.stringify(user))
      errorStore.set(null)
      return true
    },

    // Mostrar/obtener perfil
    getProfile: () => {
      const stored = localStorage.getItem("currentUser")
      if (stored) {
        return JSON.parse(stored) as User
      }
      return null
    },

    // Actualizar perfil
    updateProfile: (updates: Partial<User>): boolean => {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]")
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null")

      if (!currentUser) {
        errorStore.set({ message: "No hay usuario autenticado" })
        return false
      }

      const userIndex = users.findIndex((u) => u.id === currentUser.id)
      if (userIndex === -1) {
        errorStore.set({ message: "Usuario no encontrado" })
        return false
      }

      const updatedUser = { ...users[userIndex], ...updates }
      users[userIndex] = updatedUser

      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(updatedUser))
      set(updatedUser)
      errorStore.set(null)
      return true
    },

    // Cambiar contraseña
    changePassword: (currentPassword: string, newPassword: string): boolean => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null")

      if (!currentUser) {
        errorStore.set({ message: "No hay usuario autenticado" })
        return false
      }

      if (currentPassword !== currentUser.password) {
        errorStore.set({ field: "currentPassword", message: "La contraseña actual es incorrecta" })
        return false
      }

      if (newPassword.length < 6) {
        errorStore.set({ field: "newPassword", message: "La nueva contraseña debe tener al menos 6 caracteres" })
        return false
      }

      if (currentPassword === newPassword) {
        errorStore.set({ message: "La nueva contraseña debe ser diferente a la actual" })
        return false
      }

      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]")
      const userIndex = users.findIndex((u) => u.id === currentUser.id)

      if (userIndex === -1) {
        errorStore.set({ message: "Usuario no encontrado" })
        return false
      }

      users[userIndex].password = newPassword
      const updatedUser = { ...users[userIndex] }

      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(updatedUser))
      set(updatedUser)
      errorStore.set(null)
      return true
    },

    // Cerrar sesión
    logout: () => {
      set(null)
      localStorage.removeItem("currentUser")
      errorStore.set(null)
    },

    // Inicializar desde localStorage
    initializeFromLocalStorage: () => {
      const stored = localStorage.getItem("currentUser")
      if (stored) {
        set(JSON.parse(stored))
      }
    },
  }
}

export const authStore = createAuthStore()
