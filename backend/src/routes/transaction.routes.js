const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, (req, res) => {
  res.send("Create transaction");
});

router.get("/", auth, (req, res) => {
  res.send("Get all transactions");
});

router.get("/:id", auth, (req, res) => {
  res.send("Get single transaction");
});

router.put("/:id", auth, (req, res) => {
  res.send("Update transaction");
});

router.delete("/:id", auth, (req, res) => {
  res.send("Delete transaction");
});

module.exports = router;
