# ---- 開発用 ----
FROM node:24-alpine AS dev

WORKDIR /app

# 依存パッケージのインストール（キャッシュ活用のため先にコピー）
COPY package*.json ./
RUN npm ci

# ソースコードをコピー
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ---- ビルド ----
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- 本番用 ----
FROM node:24-alpine AS prod

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 8787

CMD ["node", "dist/index.js"]
