import "clsx";
import { c as cn, a as authStore, B as Button } from "../../../chunks/button.js";
import { h as attributes, j as clsx, l as bind_props, d as store_get, c as attr, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { w as writable, d as derived } from "../../../chunks/index.js";
import { V as escape_html } from "../../../chunks/context.js";
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "card",
      class: clsx(cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function User_profile($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { subscribe, set } = writable(false);
    const { subscribe: subscribeUser, update } = authStore;
    const user = derived(subscribeUser, ($user) => $user);
    let isEditing = false;
    let editedUser = {
      name: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      country: ""
    };
    let success = "";
    function handleSave() {
      updateProfile({
        name: editedUser.name,
        phone: editedUser.phone,
        address: editedUser.address,
        city: editedUser.city,
        postalCode: editedUser.postalCode,
        country: editedUser.country
      });
    }
    function handleCancel() {
      editedUser = { ...user };
      isEditing = false;
    }
    function updateProfile(profileData) {
      update(($user) => {
        editedUser = { ...$user, ...profileData };
        success = "Perfil actualizado exitosamente";
        isEditing = false;
        setTimeout(
          () => {
            success = "";
          },
          3e3
        );
        return editedUser;
      });
    }
    Card($$renderer2, {
      class: "p-6",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex justify-between items-center mb-6"><h2 class="text-2xl font-bold">Mi Perfil</h2> `);
        if (!isEditing) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            onclick: () => isEditing = true,
            class: "bg-accent",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Editar Perfil`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> `);
        if (success) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="mb-4 p-3 bg-green-100 text-green-800 rounded-md">${escape_html(success)}</div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (store_get($$store_subs ??= {}, "$user", user)) {
          $$renderer3.push("<!--[-->");
          if (isEditing) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="block text-sm font-medium mb-2" for="name">Nombre</label> <input type="text"${attr("value", editedUser.name)} id="name" class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"/></div> <div><label class="block text-sm font-medium mb-2" for="email">Email</label> <input type="email"${attr("value", store_get($$store_subs ??= {}, "$user", user).email)} disabled id="email" class="w-full px-3 py-2 border border-input rounded-md bg-muted text-muted-foreground cursor-not-allowed"/></div> <div><label class="block text-sm font-medium mb-2" for="phone">Teléfono</label> <input type="tel"${attr("value", editedUser.phone)} id="phone" class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"/></div> <div><label class="block text-sm font-medium mb-2" for="country">País</label> <input type="text"${attr("value", editedUser.country)} id="country" class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"/></div> <div><label class="block text-sm font-medium mb-2" for="city">Ciudad</label> <input type="text"${attr("value", editedUser.city)} id="city" class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"/></div> <div><label class="block text-sm font-medium mb-2" for="postalCode">Código Postal</label> <input type="text"${attr("value", editedUser.postalCode)} id="postalCode" class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"/></div></div> <div><label class="block text-sm font-medium mb-2" for="address">Dirección</label> <input type="text"${attr("value", editedUser.address)} id="address" class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"/></div> <div class="flex gap-3 justify-end">`);
            Button($$renderer3, {
              onclick: handleCancel,
              class: "bg-muted text-foreground hover:bg-muted/80",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->Cancelar`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> `);
            Button($$renderer3, {
              onclick: handleSave,
              class: "bg-accent",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->Guardar Cambios`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----></div></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<div class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="text-sm text-muted-foreground" for="name">Nombre</label> <p class="text-lg font-medium" id="name">${escape_html(store_get($$store_subs ??= {}, "$user", user).name)}</p></div> <div><label class="text-sm text-muted-foreground" for="email">Email</label> <p class="text-lg font-medium" id="email">${escape_html(store_get($$store_subs ??= {}, "$user", user).email)}</p></div> <div><label class="text-sm text-muted-foreground" for="phone">Teléfono</label> <p class="text-lg font-medium" id="phone">${escape_html(store_get($$store_subs ??= {}, "$user", user).phone || "No especificado")}</p></div> <div><label class="text-sm text-muted-foreground" for="country">País</label> <p class="text-lg font-medium" id="country">${escape_html(store_get($$store_subs ??= {}, "$user", user).country || "No especificado")}</p></div> <div><label class="text-sm text-muted-foreground" for="city">Ciudad</label> <p class="text-lg font-medium" id="city">${escape_html(store_get($$store_subs ??= {}, "$user", user).city || "No especificado")}</p></div> <div><label class="text-sm text-muted-foreground" for="postalCode">Código Postal</label> <p class="text-lg font-medium" id="postalCode">${escape_html(store_get($$store_subs ??= {}, "$user", user).postalCode || "No especificado")}</p></div></div> <div><label class="text-sm text-muted-foreground" for="address">Dirección</label> <p class="text-lg font-medium" id="address">${escape_html(store_get($$store_subs ??= {}, "$user", user).address || "No especificada")}</p></div></div>`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<p class="text-muted-foreground">Por favor inicia sesión para ver tu perfil</p>`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Change_password($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentPassword = "";
    let newPassword = "";
    let confirmPassword = "";
    let error = "";
    let success = "";
    let user = (() => {
      let currentUser = null;
      authStore.subscribe((u) => {
        currentUser = u;
      });
      return currentUser;
    })();
    function handleChangePassword() {
      error = "";
      success = "";
      {
        error = "Por favor completa todos los campos";
        return;
      }
    }
    Card($$renderer2, {
      class: "p-6",
      children: ($$renderer3) => {
        $$renderer3.push(`<h2 class="text-2xl font-bold mb-6">Cambiar Contraseña</h2> `);
        if (error) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="mb-4 p-3 bg-destructive/10 text-destructive rounded-md">${escape_html(error)}</div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (success) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="mb-4 p-3 bg-green-100 text-green-800 rounded-md">${escape_html(success)}</div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (user) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="space-y-4 max-w-md"><div><label for="current-password" class="block text-sm font-medium mb-2">Contraseña Actual</label> <input id="current-password" type="password"${attr("value", currentPassword)} placeholder="Ingresa tu contraseña actual" class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"/></div> <div><label for="new-password" class="block text-sm font-medium mb-2">Nueva Contraseña</label> <input id="new-password" type="password"${attr("value", newPassword)} placeholder="Ingresa tu nueva contraseña" class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"/></div> <div><label for="confirm-password" class="block text-sm font-medium mb-2">Confirmar Nueva Contraseña</label> <input id="confirm-password" type="password"${attr("value", confirmPassword)} placeholder="Confirma tu nueva contraseña" class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"/></div> `);
          Button($$renderer3, {
            onclick: handleChangePassword,
            class: "w-full bg-accent",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Cambiar Contraseña`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<p class="text-muted-foreground">Por favor inicia sesión para cambiar tu contraseña</p>`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let user = (() => {
      let currentUser = null;
      authStore.subscribe((u) => {
        currentUser = u;
      });
      return currentUser;
    })();
    $$renderer2.push(`<main class="min-h-screen bg-background p-4"><div class="max-w-2xl mx-auto py-8">`);
    if (user) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="space-y-6">`);
      User_profile($$renderer2);
      $$renderer2.push(`<!----> `);
      Change_password($$renderer2);
      $$renderer2.push(`<!----> <button class="w-full px-4 py-3 bg-destructive text-destructive-foreground rounded-md hover:opacity-90 transition-opacity font-medium">Cerrar Sesión</button></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="text-center py-12"><p class="text-lg text-muted-foreground mb-4">No has iniciado sesión</p> <a href="/" class="text-accent hover:underline">Volver a inicio</a></div>`);
    }
    $$renderer2.push(`<!--]--></div></main>`);
  });
}
export {
  _page as default
};
