const express = require("express");
const router = express.Router();
const controller = require("../controllers/UserController");

router.post("/signup", controller.createUser);
router.get("/getallusers", controller.getAllUsers);
router.post("/login", controller.loginUser);

module.exports = router;
