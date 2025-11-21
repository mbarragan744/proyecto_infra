import { j as json } from './index-CccDCyu_.js';

const orders = /* @__PURE__ */ new Map();
const GET = async ({ request, url }) => {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 });
    }
    const token = authHeader.replace("Bearer ", "");
    const userId = Buffer.from(token, "base64").toString();
    const userOrders = orders.get(userId) || [];
    return json({ orders: userOrders });
  } catch (error) {
    return json({ error: "Error al obtener pedidos" }, { status: 500 });
  }
};
const POST = async ({ request }) => {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
      return json({ error: "No autorizado" }, { status: 401 });
    }
    const token = authHeader.replace("Bearer ", "");
    const userId = Buffer.from(token, "base64").toString();
    const { items, total } = await request.json();
    if (!items || items.length === 0 || !total) {
      return json({ error: "items y total son requeridos" }, { status: 400 });
    }
    const newOrder = {
      id: `ORD-${Date.now()}`,
      userId,
      items,
      total,
      status: "confirmed",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      deliveryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1e3).toISOString()
    };
    const userOrders = orders.get(userId) || [];
    userOrders.unshift(newOrder);
    orders.set(userId, userOrders);
    return json({ message: "Pedido creado exitosamente", order: newOrder }, { status: 201 });
  } catch (error) {
    return json({ error: "Error al crear pedido" }, { status: 500 });
  }
};

export { GET, POST };
//# sourceMappingURL=_server.ts-DXO3SbW3.js.map
