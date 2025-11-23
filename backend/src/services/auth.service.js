const db = require("../db/knex");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async ({ name, email, password }) => {
  const existing = await db("users").where({ email }).first();
  if (existing) throw new Error("Email already registered");

  const hashed = await bcrypt.hash(password, 10);

  const user = await db("users")
    .insert({
      name,
      email,
      password: hashed,
    })
    .returning(["id", "name", "email"]);

  const token = jwt.sign(
    { userId: user[0].id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { user: user[0], token };
};

exports.login = async ({ email, password }) => {
  const user = await db("users").where({ email }).first();
  if (!user) throw new Error("Invalid email or password");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { 
    user: { id: user.id, name: user.name, email: user.email },
    token 
  };
};
