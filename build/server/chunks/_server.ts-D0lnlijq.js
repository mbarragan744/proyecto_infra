import { j as json } from './index-CccDCyu_.js';

const POST = async ({ request }) => {
  const { email, password } = await request.json();
  if (!email || !password) {
    return json({ error: "Email y contraseña son requeridos" }, { status: 400 });
  }
  try {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      return json({ error: "Email o contraseña incorrectos" }, { status: 401 });
    }
    const { password: _, ...userWithoutPassword } = user;
    return json({
      message: "Sesión iniciada exitosamente",
      user: userWithoutPassword,
      token: Buffer.from(email).toString("base64")
      // Token simulado
    });
  } catch (error) {
    return json({ error: "Error al iniciar sesión" }, { status: 500 });
  }
};

export { POST };
//# sourceMappingURL=_server.ts-D0lnlijq.js.map
