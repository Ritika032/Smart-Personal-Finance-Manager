const db = require("../db/knex");

exports.create = async (data) => {
  return db("transactions").insert(data).returning("*");
};

exports.getAll = async (userId) => {
  return db("transactions")
    .where({ user_id: userId })
    .orderBy("created_at", "desc");
};

exports.getById = async (id, userId) => {
  return db("transactions")
    .where({ id, user_id: userId })
    .first();
};

exports.update = async (id, userId, updates) => {
  return db("transactions")
    .where({ id, user_id: userId })
    .update(updates)
    .returning("*");
};

exports.remove = async (id, userId) => {
  return db("transactions")
    .where({ id, user_id: userId })
    .del();
};
