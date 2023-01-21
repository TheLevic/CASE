const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

//Login
router.post("/login", loginUser);

//Register
router.post("/register", registerUser);

//Logout

//Get me
router.get("/me", getMe);

module.exports = router;
