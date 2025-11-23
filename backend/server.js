const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./src/db/knex");

// Import routes
const authRoutes = require("./src/routes/auth.routes");
const userRoutes = require("./src/routes/user.routes");
const transactionRoutes = require("./src/routes/transaction.routes");
const categoryRoutes = require("./src/routes/category.routes");
const budgetRoutes = require("./src/routes/budget.routes");
const goalRoutes = require("./src/routes/goal.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Finance AI Backend is running...");
});

// Test DB connection
db.raw("SELECT 1")
  .then(() => console.log("✅ PostgreSQL connected successfully"))
  .catch((err) => console.error("❌ DB connection failed:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/goals", goalRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global Error Handler (Optionals)
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  res.status(500).json({ message: "Internal server error", error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app;
