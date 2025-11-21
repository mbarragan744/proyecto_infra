import { json } from "@sveltejs/kit";
const POST = async ({ request }) => {
  const { email, name, password } = await request.json();
  if (!email || !name || !password) {
    return json({ error: "Todos los campos son requeridos" }, { status: 400 });
  }
  if (password.length < 6) {
    return json({ error: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 });
  }
  try {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u) => u.email === email)) {
      return json({ error: "Este email ya está registrado" }, { status: 409 });
    }
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
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    const { password: _, ...userWithoutPassword } = newUser;
    return json({ message: "Usuario registrado exitosamente", user: userWithoutPassword }, { status: 201 });
  } catch (error) {
    return json({ error: "Error al registrar usuario" }, { status: 500 });
  }
};
export {
  POST
};
