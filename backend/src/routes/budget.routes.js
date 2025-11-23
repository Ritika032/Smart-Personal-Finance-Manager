const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const budgetController = require("../controllers/budget.controller");

// Create budget
router.post("/", auth, budgetController.create);

// Get all budgets
router.get("/", auth, budgetController.getAll);

// Update budget
router.put("/:id", auth, budgetController.update);

// Delete budget
router.delete("/:id", auth, budgetController.remove);

module.exports = router;
