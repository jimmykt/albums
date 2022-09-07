const db = require("../db");

module.exports.addLikedPhoto = async (req, res) => {
  const { user_id, image_id } = req.body;
  console.log(user_id);
  console.log(image_id);

  try {
    const createdUser = await db.query(
      "INSERT INTO liked (user_id, image_id) values ($1, $2) returning *",
      [user_id, image_id]
    );
    res.status(200).json({
      status: "success",
      users: user_id,
      image: image_id,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAllLiked = async (req, res) => {
  const query = "SELECT * FROM liked;";
  try {
    const results = await db.query(query);
    res.status(200).json({
      status: "success",
      liked: results.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
