const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const categoryController = require("../controllers/category.controller");

// Create category
router.post("/", auth, categoryController.create);

// Get all categories
router.get("/", auth, categoryController.getAll);

// Update category
router.put("/:id", auth, categoryController.update);

// Delete category
router.delete("/:id", auth, categoryController.remove);

module.exports = router;
