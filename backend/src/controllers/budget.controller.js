const budgetService = require("../services/budget.service");

exports.create = async (req, res) => {
  try {
    const result = await budgetService.create(req.user.id, req.body);
    res.status(201).json({ message: "Budget created", budget: result[0] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const result = await budgetService.getAll(req.user.id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await budgetService.update(
      req.user.id,
      req.params.id,
      req.body
    );
    res.json({ message: "Budget updated", budget: result[0] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await budgetService.remove(req.user.id, req.params.id);
    res.json({ message: "Budget deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
