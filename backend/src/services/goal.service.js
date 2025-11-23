const db = require("../db/knex");

exports.create = (data) => {
  return db("goals").insert(data).returning("*");
};

exports.getAll = (userId) => {
  return db("goals").where({ user_id: userId });
};

exports.update = (id, userId, updates) => {
  return db("goals")
    .where({ id, user_id: userId })
    .update(updates)
    .returning("*");
};

exports.remove = (id, userId) => {
  return db("goals")
    .where({ id: userId, user_id: userId })
    .del();
};
