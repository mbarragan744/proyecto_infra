# --- Dependencies ---
FROM node:20 AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# --- Build ---
FROM node:20 AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generar Prisma Client
RUN npx prisma generate

# Build de Next.js
RUN npm run build

# --- Production ---
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production

# Copiar node_modules de deps (mejor que del build)
COPY --from=deps /app/node_modules ./node_modules

# Copiar build de Next
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY package.json ./

EXPOSE 3000

CMD ["npm", "start"]
