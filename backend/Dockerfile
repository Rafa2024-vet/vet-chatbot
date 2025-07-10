# Estágio de Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Adicione o build do TypeScript se for para produção
# RUN npm run build

# Estágio de Desenvolvimento (ou Produção)
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app .
EXPOSE 5000
# O comando é definido no docker-compose.yml