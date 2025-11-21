import { e as ensure_array_like, f as attr, s as sanitize_props, a as spread_props, b as slot } from './index2-DWR7k1jq.js';
import { c as cartItems } from './store.svelte-BaR8w2z-.js';
import { a as authStore, B as Button } from './button-DK7Hjndv.js';
import { o as ordersStore } from './orders.svelte-C5WlaRPk.js';
import { g as goto } from './client-CSnXN5TH.js';
import { I as Icon } from './Icon-BiOKoA7N.js';
import { Y as escape_html } from './index-BF1tDW1B.js';
import './utils-KcIDVAAe.js';
import './state.svelte-BenIr1tZ.js';

function Trash_2($$renderer, $$props) {
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
    ["path", { "d": "M10 11v6" }],
    ["path", { "d": "M14 11v6" }],
    ["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trash-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Trash2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTQgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2IiAvPgogIDxwYXRoIGQ9Ik0zIDZoMTgiIC8+CiAgPHBhdGggZD0iTTggNlY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/trash-2
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
    let items = cartItems.items;
    let total = cartItems.getTotal();
    function handleCheckout() {
      if (!currentUser) {
        alert("Por favor inicia sesión para continuar");
        return;
      }
      if (items.length === 0) {
        alert("El carrito está vacío");
        return;
      }
      ordersStore.createOrder(currentUser.id, items, total);
      cartItems.clearCart();
      goto();
    }
    $$renderer2.push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><h1 class="text-3xl font-bold text-foreground mb-8">Carrito de Compras</h1> `);
    if (items.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center py-12 bg-secondary/50 rounded-lg"><p class="text-lg text-muted-foreground mb-6">Tu carrito está vacío</p> `);
      Button($$renderer2, {
        onclick: () => goto(),
        class: "bg-accent text-accent-foreground",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Continuar comprando`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2"><div class="space-y-4"><!--[-->`);
      const each_array = ensure_array_like(items);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer2.push(`<div class="flex gap-4 bg-card p-4 rounded-lg border border-border"><img${attr("src", item.image || "/placeholder.svg")}${attr("alt", item.name)} class="w-20 h-20 object-cover rounded-md bg-secondary"/> <div class="flex-1"><h3 class="font-semibold text-foreground">${escape_html(item.name)}</h3> <p class="text-sm text-muted-foreground">$${escape_html(item.price.toFixed(2))}</p></div> <div class="flex items-center gap-2"><button class="px-2 py-1 border border-border rounded hover:bg-secondary">−</button> <span class="w-8 text-center font-semibold">${escape_html(item.quantity)}</span> <button class="px-2 py-1 border border-border rounded hover:bg-secondary">+</button></div> <div class="text-right"><p class="font-bold text-foreground">$${escape_html((item.price * item.quantity).toFixed(2))}</p> <button class="text-destructive hover:opacity-80 transition-opacity mt-2" title="Eliminar producto">`);
        Trash_2($$renderer2, { size: 18 });
        $$renderer2.push(`<!----></button></div></div>`);
      }
      $$renderer2.push(`<!--]--></div></div> <div class="bg-card p-6 rounded-lg border border-border h-fit"><h2 class="text-xl font-bold text-foreground mb-4">Resumen</h2> <div class="space-y-2 mb-6 text-sm"><div class="flex justify-between text-muted-foreground"><span>Subtotal (${escape_html(items.length)} items)</span> <span>$${escape_html(total.toFixed(2))}</span></div> <div class="flex justify-between text-muted-foreground"><span>Envío</span> <span>Gratis</span></div> <div class="border-t border-border pt-2 mt-2 flex justify-between font-bold text-foreground"><span>Total</span> <span>$${escape_html(total.toFixed(2))}</span></div></div> `);
      Button($$renderer2, {
        onclick: handleCheckout,
        class: "w-full bg-accent text-accent-foreground hover:opacity-90",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Ir al Checkout`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        onclick: () => goto(),
        variant: "outline",
        class: "w-full mt-2 border-border",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Seguir comprando`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CdMjtbOY.js.map
