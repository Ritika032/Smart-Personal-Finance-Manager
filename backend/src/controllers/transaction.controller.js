const transactionService = require("../services/transaction.service");

exports.create = async (req, res) => {
  try {
    const result = await transactionService.create(req.user.id, req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await transactionService.getAll(req.user.id);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const data = await transactionService.getOne(req.user.id, req.params.id);
    res.json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await transactionService.update(
      req.user.id,
      req.params.id,
      req.body
    );
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const result = await transactionService.remove(
      req.user.id,
      req.params.id
    );
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
