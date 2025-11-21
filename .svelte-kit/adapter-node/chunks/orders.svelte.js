import "clsx";
import { w as writable } from "./index.js";
function createOrdersStore() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    createOrder: (userId, items, total) => {
      const order = {
        id: `ORD-${Date.now()}`,
        userId,
        items,
        total,
        status: "confirmed",
        createdAt: /* @__PURE__ */ new Date(),
        deliveryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1e3)
        // 3 días
      };
      update((orders) => [order, ...orders]);
      localStorage.setItem("orders", JSON.stringify(update((o) => o)));
    },
    getOrdersByUserId: (userId) => {
      let orders = [];
      subscribe((o) => orders = o)();
      return orders.filter((order) => order.userId === userId);
    },
    updateOrderStatus: (orderId, status) => {
      update((orders) => orders.map((order) => order.id === orderId ? { ...order, status } : order));
    }
  };
}
const ordersStore = createOrdersStore();
export {
  ordersStore as o
};
