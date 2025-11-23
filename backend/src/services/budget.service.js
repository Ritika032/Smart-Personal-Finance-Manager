const db = require("../db/knex");

// Create a budget
exports.create = (userId, data) => {
  return db("budgets")
    .insert({
      user_id: userId,
      category_id: data.category_id,
      monthly_limit: data.monthly_limit,
      month: data.month,
      year: data.year,
    })
    .returning("*");
};

// Get all budgets for logged-in user
exports.getAll = (userId) => {
  return db("budgets").where({ user_id: userId });
};

// Update a budget
exports.update = (userId, id, updates) => {
  return db("budgets")
    .where({ id, user_id: userId })
    .update(updates)
    .returning("*");
};

// Delete a budget
exports.remove = (userId, id) => {
  return db("budgets")
    .where({ id, user_id: userId })
    .del();
};
