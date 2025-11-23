const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, (req, res) => {
  res.send("Create goal");
});

router.get("/", auth, (req, res) => {
  res.send("Get all goals");
});

router.put("/:id", auth, (req, res) => {
  res.send("Update goal");
});

router.delete("/:id", auth, (req, res) => {
  res.send("Delete goal");
});

module.exports = router;
