import { s as sanitize_props, a as spread_props, b as slot, f as ensure_array_like, e as attr_class } from "../../../chunks/index2.js";
import { a as authStore, B as Button } from "../../../chunks/button.js";
import { o as ordersStore } from "../../../chunks/orders.svelte.js";
import { g as goto } from "../../../chunks/client.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { V as escape_html } from "../../../chunks/context.js";
function Package($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.554.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
      }
    ],
    ["path", { "d": "M12 22V12" }],
    ["polyline", { "points": "3.29 7 12 12 20.71 7" }],
    ["path", { "d": "m7.5 4.27 9 5.15" }]
  ];
  Icon($$renderer, spread_props([
    { name: "package" },
    $$sanitized_props,
    {
      /**
       * @component @name Package
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMjEuNzNhMiAyIDAgMCAwIDIgMGw3LTRBMiAyIDAgMCAwIDIxIDE2VjhhMiAyIDAgMCAwLTEtMS43M2wtNy00YTIgMiAwIDAgMC0yIDBsLTcgNEEyIDIgMCAwIDAgMyA4djhhMiAyIDAgMCAwIDEgMS43M3oiIC8+CiAgPHBhdGggZD0iTTEyIDIyVjEyIiAvPgogIDxwb2x5bGluZSBwb2ludHM9IjMuMjkgNyAxMiAxMiAyMC43MSA3IiAvPgogIDxwYXRoIGQ9Im03LjUgNC4yNyA5IDUuMTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/package
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentUser = (() => {
      let user;
      authStore.subscribe((u) => user = u)();
      return user;
    })();
    let orders = (() => {
      if (!currentUser) return [];
      let all = [];
      ordersStore.subscribe((o) => all = o)();
      return all.filter((order) => order.userId === currentUser.id);
    })();
    const statusLabels = {
      pending: "Pendiente",
      confirmed: "Confirmada",
      shipped: "Enviada",
      delivered: "Entregada"
    };
    const statusColors = {
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-blue-100 text-blue-800",
      shipped: "bg-purple-100 text-purple-800",
      delivered: "bg-green-100 text-green-800"
    };
    $$renderer2.push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><h1 class="text-3xl font-bold text-foreground mb-8">Mis Órdenes</h1> `);
    if (!currentUser) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center py-12 bg-secondary/50 rounded-lg"><p class="text-lg text-muted-foreground mb-6">Por favor inicia sesión para ver tus órdenes</p> `);
      Button($$renderer2, {
        onclick: () => goto(),
        class: "bg-accent text-accent-foreground",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Volver al inicio`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (orders.length === 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="text-center py-12 bg-secondary/50 rounded-lg">`);
        Package($$renderer2, {
          class: "w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50"
        });
        $$renderer2.push(`<!----> <p class="text-lg text-muted-foreground mb-6">No tienes órdenes todavía</p> `);
        Button($$renderer2, {
          onclick: () => goto(),
          class: "bg-accent text-accent-foreground",
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->Empezar a comprar`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="space-y-4"><!--[-->`);
        const each_array = ensure_array_like(orders);
        for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
          let order = each_array[$$index_1];
          $$renderer2.push(`<div class="bg-card p-6 rounded-lg border border-border"><div class="flex items-start justify-between mb-4"><div><h3 class="text-lg font-semibold text-foreground">${escape_html(order.id)}</h3> <p class="text-sm text-muted-foreground">${escape_html(new Date(order.createdAt).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" }))}</p></div> <span${attr_class(`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[order.status]}`)}>${escape_html(statusLabels[order.status])}</span></div> <div class="mb-4"><p class="text-sm text-muted-foreground mb-2">Artículos (${escape_html(order.items.length)})</p> <div class="space-y-1"><!--[-->`);
          const each_array_1 = ensure_array_like(order.items);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let item = each_array_1[$$index];
            $$renderer2.push(`<div class="flex justify-between text-sm"><span>${escape_html(item.name)} x ${escape_html(item.quantity)}</span> <span class="text-foreground font-medium">$${escape_html((item.price * item.quantity).toFixed(2))}</span></div>`);
          }
          $$renderer2.push(`<!--]--></div></div> <div class="border-t border-border pt-4"><div class="flex justify-between"><span class="font-semibold text-foreground">Total:</span> <span class="font-bold text-lg text-accent">$${escape_html(order.total.toFixed(2))}</span></div> `);
          if (order.deliveryDate) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<p class="text-xs text-muted-foreground mt-2">Entrega estimada: ${escape_html(new Date(order.deliveryDate).toLocaleDateString("es-ES"))}</p>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div></div>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
