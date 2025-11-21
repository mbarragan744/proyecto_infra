import { json } from "@sveltejs/kit";
const POST = async ({ request }) => {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 });
    }
    const { currentPassword, newPassword } = await request.json();
    if (!currentPassword || !newPassword) {
      return json({ error: "Contraseña actual y nueva son requeridas" }, { status: 400 });
    }
    if (newPassword.length < 6) {
      return json({ error: "La nueva contraseña debe tener al menos 6 caracteres" }, { status: 400 });
    }
    if (currentPassword === newPassword) {
      return json({ error: "La nueva contraseña debe ser diferente a la actual" }, { status: 400 });
    }
    const token = authHeader.replace("Bearer ", "");
    const email = Buffer.from(token, "base64").toString();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex((u) => u.email === email);
    if (userIndex === -1) {
      return json({ error: "Usuario no encontrado" }, { status: 404 });
    }
    if (users[userIndex].password !== currentPassword) {
      return json({ error: "Contraseña actual incorrecta" }, { status: 401 });
    }
    users[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));
    return json({ message: "Contraseña cambiada exitosamente" });
  } catch (error) {
    return json({ error: "Error al cambiar contraseña" }, { status: 500 });
  }
};
export {
  POST
};
