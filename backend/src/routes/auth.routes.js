const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

// Signup
router.post("/signup", authController.signup);

// Login
router.post("/login", authController.login);

// Google OAuth (placeholder — implement later)
router.post("/google", (req, res) => {
  res.send("Google OAuth login");
});

// Logout
router.post("/logout", authController.logout);

module.exports = router;
