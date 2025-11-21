import { X as writable } from './index-BF1tDW1B.js';

function createCartStore() {
  const { subscribe, set, update } = writable([]);
  let itemsArray = [];
  subscribe((items) => {
    itemsArray = items;
  });
  return {
    subscribe,
    get items() {
      return itemsArray;
    },
    addItem: (product) => {
      update((items) => {
        const existingItem = items.find((item) => item.id === product.id);
        if (existingItem) {
          existingItem.quantity += 1;
          return items;
        }
        return [...items, { ...product, quantity: 1 }];
      });
    },
    removeItem: (id) => {
      update((items) => items.filter((item) => item.id !== id));
    },
    updateQuantity: (id, quantity) => {
      update((items) => items.map((item) => item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item).filter((item) => item.quantity > 0));
    },
    clearCart: () => {
      set([]);
    },
    getTotal: () => {
      return itemsArray.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  };
}
const cartItems = createCartStore();

export { cartItems as c };
//# sourceMappingURL=store.svelte-BaR8w2z-.js.map
