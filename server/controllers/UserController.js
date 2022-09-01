const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.getAllUsers = async (req, res) => {
  const query = "SELECT * FROM users;";
  try {
    const results = await db.query(query);
    res.status(200).json({
      status: "success",
      users: results.rows,
    });
    return results;
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

module.exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const allUsers = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (allUsers.rows.length > 0) {
    res.status(400).send("Email Already In Use");
    return;
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const createdUser = await db.query(
      "INSERT INTO users (first_name, last_name, email, password_) values ($1, $2, $3, $4) returning *",
      [firstName, lastName, email, hashedPassword]
    );
    res.status(200).json({
      status: "success",
      users: createdUser,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.createUser = async (req, res) => {};
