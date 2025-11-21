import { json } from "@sveltejs/kit";
const categories = [
  { id: "1", name: "Electrónica", slug: "electronica", description: "Dispositivos electrónicos" },
  { id: "2", name: "Ropa", slug: "ropa", description: "Prendas de vestir" },
  { id: "3", name: "Libros", slug: "libros", description: "Literatura y educación" },
  { id: "4", name: "Deportes", slug: "deportes", description: "Equipamiento deportivo" },
  { id: "5", name: "Hogar", slug: "hogar", description: "Artículos para el hogar" }
];
const GET = async () => {
  return json({ categories });
};
export {
  GET
};
