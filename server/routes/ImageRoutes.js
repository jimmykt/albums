const express = require("express");
const router = express.Router();
const controller = require("../controllers/ImageControllers");

router.post("/addlike", controller.addLikedPhoto);

module.exports = router;
