const db = require("../db/knex");

exports.getProfile = (userId) => {
  return db("users").where({ id: userId }).first();
};

exports.updateProfile = (userId, updates) => {
  return db("users")
    .where({ id: userId })
    .update(updates)
    .returning("*");
};
