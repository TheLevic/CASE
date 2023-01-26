const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
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
router.get("/me", protect.protect, getMe);

module.exports = router;
