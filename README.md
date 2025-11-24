# Next.js E-commerce App

E-commerce completo construido con Next.js 14, TypeScript, Prisma y Stripe.

## Características

- Autenticación JWT con cookies HTTP-only
- Gestión de productos (CRUD completo)
- Carrito de compras con gestión de estado
- Procesamiento de pagos con Stripe
- Base de datos PostgreSQL con Prisma ORM
- UI moderna con TailwindCSS y shadcn/ui

## APIs REST Implementadas

### Autenticación (`/api/auth`)
- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/logout` - Cerrar sesión
- `GET /api/auth/profile` - Obtener perfil del usuario

### Productos (`/api/products`)
- `GET /api/products` - Listar todos los productos
- `GET /api/products/[id]` - Obtener producto por ID
- `POST /api/products` - Crear nuevo producto (requiere auth)
- `PUT /api/products/[id]` - Actualizar producto (requiere auth)
- `DELETE /api/products/[id]` - Eliminar producto (requiere auth)

### Carrito (`/api/cart`)
- `GET /api/cart` - Obtener carrito del usuario
- `POST /api/cart` - Agregar producto al carrito
- `PATCH /api/cart/[itemId]` - Actualizar cantidad
- `DELETE /api/cart/[itemId]` - Eliminar item del carrito
- `DELETE /api/cart` - Vaciar carrito

### Órdenes (`/api/orders`)
- `GET /api/orders` - Listar órdenes del usuario
- `GET /api/orders/[id]` - Obtener orden por ID
- `POST /api/orders` - Crear nueva orden

### Pagos (`/api/payments`)
- `POST /api/payments/create-intent` - Crear Payment Intent de Stripe
- `POST /api/payments/confirm` - Confirmar pago
- `POST /api/payments/webhook` - Webhook de Stripe

## Instalación y Configuración

### 1. Instalar dependencias

\`\`\`bash
npm install
\`\`\`

### 2. Variables de entorno

Las siguientes variables ya están configuradas en tu proyecto de Vercel:
- `DATABASE_URL` - URL de conexión a Neon PostgreSQL
- `STRIPE_SECRET_KEY` - Clave secreta de Stripe
- `STRIPE_PUBLISHABLE_KEY` - Clave pública de Stripe
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Clave pública de Stripe (cliente)

Opcional (para webhooks locales):
- `STRIPE_WEBHOOK_SECRET` - Secret del webhook de Stripe

### 3. Configurar base de datos

\`\`\`bash
# Generar cliente de Prisma
npx prisma generate

# Ejecutar migraciones
npx prisma migrate dev --name init

# Seed de productos (opcional)
# Ejecuta el script 002_seed_products.sql desde el dashboard de Neon
# o usa: psql $DATABASE_URL -f scripts/002_seed_products.sql
\`\`\`

### 4. Ejecutar en desarrollo

\`\`\`bash
npm run dev
\`\`\`

La aplicación estará disponible en `http://localhost:3000`

## Páginas Implementadas

- `/` - Home page con features destacados
- `/products` - Catálogo de productos
- `/products/[id]` - Detalle de producto
- `/cart` - Carrito de compras
- `/checkout` - Proceso de pago
- `/login` - Iniciar sesión
- `/register` - Registrar cuenta
- `/profile` - Perfil del usuario y órdenes
- `/orders/[id]` - Detalle de orden

## Estructura del Proyecto

\`\`\`
├── app/
│   ├── api/               # APIs REST
│   │   ├── auth/          # Autenticación
│   │   ├── products/      # Productos CRUD
│   │   ├── cart/          # Carrito
│   │   ├── orders/        # Órdenes
│   │   └── payments/      # Pagos Stripe
│   ├── (pages)/           # Páginas públicas y privadas
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizables
├── lib/                   # Utilidades y configuración
│   ├── prisma.ts          # Cliente Prisma
│   ├── stripe.ts          # Cliente Stripe
│   ├── jwt.ts             # JWT helpers
│   ├── auth.ts            # Auth helpers
│   └── types.ts           # TypeScript types
├── prisma/
│   └── schema.prisma      # Esquema de base de datos
└── scripts/               # Scripts SQL
\`\`\`

## Tecnologías Utilizadas

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Base de Datos:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Autenticación:** JWT con jose
- **Pagos:** Stripe
- **UI:** TailwindCSS + shadcn/ui
- **State Management:** SWR
- **Validación:** bcryptjs

## Despliegue

Este proyecto está listo para desplegarse en Vercel con un solo clic desde el botón "Publish" en v0.

Las variables de entorno y las integraciones (Neon, Stripe) ya están configuradas.
\`\`\`
