const categoryService = require("../services/category.service");

exports.create = async (req, res) => {
  try {
    const result = await categoryService.create(req.user.id, req.body);
    res.status(201).json({ message: "Category created", category: result[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const categories = await categoryService.getAll(req.user.id);
    res.json(categories);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await categoryService.update(
      req.params.id,
      req.user.id,
      req.body
    );
    res.json({ message: "Category updated", category: result[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await categoryService.remove(req.params.id, req.user.id);
    res.json({ message: "Category deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
