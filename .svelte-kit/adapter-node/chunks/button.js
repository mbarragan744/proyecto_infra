import { clsx } from "clsx";
import { w as writable } from "./index.js";
import { h as attributes, j as clsx$1, l as bind_props } from "./index2.js";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
function createAuthStore() {
  const { subscribe, set, update } = writable(null);
  const errorStore = writable(null);
  const initializeDemoUsers = () => {
    const users = localStorage.getItem("users");
    if (!users) {
      const demoUsers = [
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
          role: "customer"
        }
      ];
      localStorage.setItem("users", JSON.stringify(demoUsers));
    }
  };
  initializeDemoUsers();
  return {
    subscribe,
    setError: (error) => {
      errorStore.set(error);
    },
    subscribeError: errorStore.subscribe,
    // Crear usuario (registro)
    register: (email, name, password) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (users.some((u) => u.email === email)) {
        errorStore.set({ field: "email", message: "Este email ya está registrado" });
        return false;
      }
      if (password.length < 6) {
        errorStore.set({
          field: "password",
          message: "La contraseña debe tener al menos 6 caracteres"
        });
        return false;
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
        role: "customer"
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      set(newUser);
      errorStore.set(null);
      return true;
    },
    // Iniciar sesión
    login: (email, password) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((u) => u.email === email && u.password === password);
      if (!user) {
        errorStore.set({ message: "Email o contraseña incorrectos" });
        return false;
      }
      set(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      errorStore.set(null);
      return true;
    },
    // Mostrar/obtener perfil
    getProfile: () => {
      const stored = localStorage.getItem("currentUser");
      if (stored) {
        return JSON.parse(stored);
      }
      return null;
    },
    // Actualizar perfil
    updateProfile: (updates) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
      if (!currentUser) {
        errorStore.set({ message: "No hay usuario autenticado" });
        return false;
      }
      const userIndex = users.findIndex((u) => u.id === currentUser.id);
      if (userIndex === -1) {
        errorStore.set({ message: "Usuario no encontrado" });
        return false;
      }
      const updatedUser = { ...users[userIndex], ...updates };
      users[userIndex] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      set(updatedUser);
      errorStore.set(null);
      return true;
    },
    // Cambiar contraseña
    changePassword: (currentPassword, newPassword) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
      if (!currentUser) {
        errorStore.set({ message: "No hay usuario autenticado" });
        return false;
      }
      if (currentPassword !== currentUser.password) {
        errorStore.set({
          field: "currentPassword",
          message: "La contraseña actual es incorrecta"
        });
        return false;
      }
      if (newPassword.length < 6) {
        errorStore.set({
          field: "newPassword",
          message: "La nueva contraseña debe tener al menos 6 caracteres"
        });
        return false;
      }
      if (currentPassword === newPassword) {
        errorStore.set({
          message: "La nueva contraseña debe ser diferente a la actual"
        });
        return false;
      }
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userIndex = users.findIndex((u) => u.id === currentUser.id);
      if (userIndex === -1) {
        errorStore.set({ message: "Usuario no encontrado" });
        return false;
      }
      users[userIndex].password = newPassword;
      const updatedUser = { ...users[userIndex] };
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      set(updatedUser);
      errorStore.set(null);
      return true;
    },
    // Cerrar sesión
    logout: () => {
      set(null);
      localStorage.removeItem("currentUser");
      errorStore.set(null);
    },
    // Inicializar desde localStorage
    initializeFromLocalStorage: () => {
      const stored = localStorage.getItem("currentUser");
      if (stored) {
        set(JSON.parse(stored));
      }
    }
  };
}
const authStore = createAuthStore();
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = tv({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive: "bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white",
      outline: "bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      class: className,
      variant = "default",
      size = "default",
      ref = null,
      href = void 0,
      type = "button",
      disabled,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    if (href) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attributes({
        "data-slot": "button",
        class: clsx$1(cn(buttonVariants({ variant, size }), className)),
        href: disabled ? void 0 : href,
        "aria-disabled": disabled,
        role: disabled ? "link" : void 0,
        tabindex: disabled ? -1 : void 0,
        ...restProps
      })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({
        "data-slot": "button",
        class: clsx$1(cn(buttonVariants({ variant, size }), className)),
        type,
        disabled,
        ...restProps
      })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
export {
  Button as B,
  authStore as a,
  cn as c
};
