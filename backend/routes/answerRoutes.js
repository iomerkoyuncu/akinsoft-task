const express = require("express");
const router = express.Router();

const {
  postAnswer,
  getAnswers,
  getUserAnswers,
  getAnswerById,
} = require("../controllers/answerController");

const { protect } = require("../middlewares/authMiddleware");

router.route("/").post(protect, postAnswer).get(protect, getAnswers);
router.route("/user/:id").get(protect, getUserAnswers);
router.route("/:id").get(protect, getAnswerById);

module.exports = router;
