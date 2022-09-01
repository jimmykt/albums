const db = require("../db");

module.exports.createUser = async (req, res) => {
  console.log(req.body);
  const query = "";
  try {
    const result = await db.query(
      "INSERT INTO users (first_name, last_name, email, password_) values ($1, $2, $3, $4) returning *",
      [req.body.firstName, req.body.lastName, req.body.email, req.body.password]
    );
    res.status(200).json({
      status: "success",
      users: result,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAllUsers = async (req, res) => {
  const query = "SELECT * FROM users;";
  console.log(query);
  try {
    const results = await db.query(query);
    console.log(results.rows);
    res.status(200).json({
      status: "success",
      users: results.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
