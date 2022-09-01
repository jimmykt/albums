const db = require("../db");

module.exports.createUser = async (req, res) => {};

module.exports.getAllUsers = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM users");
    console.log(results);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
