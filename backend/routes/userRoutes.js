const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  GetMe,
  GetAll,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, GetMe);
router.get("/users", GetAll);

module.exports = router;
