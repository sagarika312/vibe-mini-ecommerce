# Vibe Commerce — Backend (Node + Express + MongoDB)

## Quick start (local MongoDB)

1. Make sure MongoDB is running locally. If you use MongoDB Compass, ensure `mongod` is running.
2. Clone or unzip this backend folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy `.env.example` to `.env` and adjust `MONGO_URI` if needed.
   ```bash
   cp .env.example .env
   ```
5. Seed sample products (optional but recommended):
   ```bash
   npm run seed
   ```
6. Start server (dev):
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```
7. API endpoints:
   - `GET /api/products` — list products
   - `GET /api/cart` — get cart + total
   - `POST /api/cart` — add to cart `{ productId, qty }`
   - `DELETE /api/cart/:id` — remove cart item
   - `POST /api/checkout` — checkout (clears cart) with `{ name, email }`

8. Default server URL: http://localhost:4000

## Notes
- This project uses MongoDB via Mongoose. For local testing ensure your `MONGO_URI` points to a running mongod instance.
- If you prefer MongoDB Atlas, replace `MONGO_URI` in `.env` with the Atlas connection string.
