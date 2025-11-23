const db = require("../db/knex");

exports.create = (userId, data) => {
  return db("categories")
    .insert({
      user_id: userId,
      name: data.name
    })
    .returning("*");
};

exports.getAll = (userId) => {
  return db("categories").where({ user_id: userId });
};

exports.update = (categoryId, userId, data) => {
  return db("categories")
    .where({ id: categoryId, user_id: userId })
    .update({ name: data.name })
    .returning("*");
};

exports.remove = (categoryId, userId) => {
  return db("categories")
    .where({ id: categoryId, user_id: userId })
    .del();
};
