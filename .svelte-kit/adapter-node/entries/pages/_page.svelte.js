import "clsx";
import "../../chunks/button.js";
import { c as attr, d as store_get, e as attr_class, f as ensure_array_like, u as unsubscribe_stores } from "../../chunks/index2.js";
import { d as derived, w as writable } from "../../chunks/index.js";
import { V as escape_html } from "../../chunks/context.js";
import "../../chunks/store.svelte.js";
import { S as Shopping_cart } from "../../chunks/shopping-cart.js";
const products = [
  {
    id: "1",
    name: "Laptop Pro",
    description: "Laptop de alta performance con procesador último modelo",
    price: 1299.99,
    originalPrice: 1599.99,
    categoryId: "1",
    image: "/laptop-profesional.jpg",
    stock: 15,
    rating: 4.5
  },
  {
    id: "2",
    name: "Auriculares Inalámbricos",
    description: "Auriculares con cancelación de ruido activa",
    price: 199.99,
    categoryId: "1",
    image: "/auriculares-wireless.jpg",
    stock: 32,
    rating: 4.3
  },
  {
    id: "3",
    name: "Camiseta Premium",
    description: "Camiseta de algodón 100% premium",
    price: 29.99,
    originalPrice: 39.99,
    categoryId: "2",
    image: "/plain-tshirt.png",
    stock: 50,
    rating: 4.2
  },
  {
    id: "4",
    name: "Pantalón Denim",
    description: "Pantalón denim clásico ajuste perfecto",
    price: 59.99,
    categoryId: "2",
    image: "/pantalon-denim.jpg",
    stock: 40,
    rating: 4.4
  },
  {
    id: "5",
    name: "El Quijote",
    description: "Novela clásica de Miguel de Cervantes",
    price: 14.99,
    categoryId: "3",
    image: "/quijote-libro.jpg",
    stock: 25,
    rating: 4.8
  },
  {
    id: "6",
    name: "Guía de Python",
    description: "Aprende Python desde cero",
    price: 39.99,
    originalPrice: 49.99,
    categoryId: "3",
    image: "/python-programming-book.png",
    stock: 18,
    rating: 4.6
  },
  {
    id: "7",
    name: "Bicicleta Mountain Bike",
    description: "Bicicleta todo terreno con suspensión",
    price: 599.99,
    categoryId: "4",
    image: "/bicicleta-mountain.jpg",
    stock: 10,
    rating: 4.7
  },
  {
    id: "8",
    name: "Botella Deportiva",
    description: "Botella térmica 750ml",
    price: 24.99,
    categoryId: "4",
    image: "/botella-deportiva.jpg",
    stock: 60,
    rating: 4.1
  },
  {
    id: "9",
    name: "Lámpara LED",
    description: "Lámpara de escritorio LED inteligente",
    price: 44.99,
    categoryId: "5",
    image: "/lampara-led-escritorio.jpg",
    stock: 22,
    rating: 4.5
  },
  {
    id: "10",
    name: "Almohada Premium",
    description: "Almohada ergonómica con espuma viscoelástica",
    price: 74.99,
    categoryId: "5",
    image: "/almohada-ergonomica.jpg",
    stock: 35,
    rating: 4.6
  }
];
const productsStore = writable(products);
const selectedCategoryStore = writable(null);
const filteredProductsStore = derived([productsStore, selectedCategoryStore], ([$products, $selectedCategory]) => {
  if (!$selectedCategory) return $products;
  return $products.filter((p) => p.categoryId === $selectedCategory);
});
function Product_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { product } = $$props;
    $$renderer2.push(`<div class="bg-card text-card-foreground rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"><div class="h-48 bg-secondary overflow-hidden"><img${attr("src", product.image || "/placeholder.svg")}${attr("alt", product.name)} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/></div> <div class="p-4">`);
    if (product.rating) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex items-center gap-1 mb-2"><span class="text-xs font-semibold text-accent">★</span> <span class="text-xs text-muted-foreground">${escape_html(product.rating)}</span></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <h3 class="text-lg font-semibold mb-2 text-card-foreground">${escape_html(product.name)}</h3> <p class="text-sm text-muted-foreground mb-3 line-clamp-2">${escape_html(product.description)}</p> <div class="flex items-center justify-between"><div class="flex flex-col"><span class="text-2xl font-bold text-accent">$${escape_html(product.price.toFixed(2))}</span> `);
    if (product.originalPrice) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="text-xs text-muted-foreground line-through">$${escape_html(product.originalPrice.toFixed(2))}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <button${attr("disabled", product.stock === 0, true)} class="bg-accent text-accent-foreground p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" title="Agregar al carrito">`);
    Shopping_cart($$renderer2, { size: 20 });
    $$renderer2.push(`<!----></button></div></div></div>`);
  });
}
const categories = [
  {
    id: "1",
    name: "Electrónica",
    slug: "electronica",
    description: "Dispositivos electrónicos"
  },
  {
    id: "2",
    name: "Ropa",
    slug: "ropa",
    description: "Prendas de vestir"
  },
  {
    id: "3",
    name: "Libros",
    slug: "libros",
    description: "Literatura y educación"
  },
  {
    id: "4",
    name: "Deportes",
    slug: "deportes",
    description: "Equipamiento deportivo"
  },
  {
    id: "5",
    name: "Hogar",
    slug: "hogar",
    description: "Artículos para el hogar"
  }
];
const categoriesStore = writable(categories);
function Category_filter($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let categories2 = (() => store_get($$store_subs ??= {}, "$categoriesStore", categoriesStore))();
    let selectedCategory = (() => store_get($$store_subs ??= {}, "$selectedCategoryStore", selectedCategoryStore))();
    $$renderer2.push(`<div class="flex flex-col gap-3 p-4 bg-card rounded-lg border border-border"><h3 class="font-semibold text-foreground">Categorías</h3> <button${attr_class(`text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === null ? "bg-accent text-accent-foreground" : "hover:bg-secondary text-foreground"}`)}>Todas las categorías</button> <!--[-->`);
    const each_array = ensure_array_like(categories2);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let category = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === category.id ? "bg-accent text-accent-foreground" : "hover:bg-secondary text-foreground"}`)}>${escape_html(category.name)}</button>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Product_catalog($$renderer) {
  var $$store_subs;
  let products2 = (() => store_get($$store_subs ??= {}, "$filteredProductsStore", filteredProductsStore))();
  $$renderer.push(`<div class="flex gap-6 p-6"><aside class="w-64 flex-shrink-0">`);
  Category_filter($$renderer);
  $$renderer.push(`<!----></aside> <main class="flex-1"><div class="mb-6"><h2 class="text-2xl font-bold text-foreground">${escape_html(products2.length)} productos encontrados</h2></div> `);
  if (products2.length === 0) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="flex items-center justify-center h-96 bg-secondary/50 rounded-lg"><p class="text-muted-foreground">No hay productos en esta categoría</p></div>`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
    const each_array = ensure_array_like(products2);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let product = each_array[$$index];
      Product_card($$renderer, { product });
    }
    $$renderer.push(`<!--]--></div>`);
  }
  $$renderer.push(`<!--]--></main></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<main><div class="bg-gradient-to-b from-accent/10 to-transparent py-12 px-4"><div class="max-w-7xl mx-auto"><h1 class="text-4xl font-bold text-foreground mb-4">Bienvenido a nuestra tienda</h1> <p class="text-lg text-muted-foreground">Descubre nuestros productos de alta calidad</p></div></div> `);
    Product_catalog($$renderer2);
    $$renderer2.push(`<!----></main>`);
  });
}
export {
  _page as default
};
