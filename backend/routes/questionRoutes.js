const express = require("express");
const router = express.Router();

const {
  createQuestion,
  getQuestions,
  getQuestionsBySurveyId,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");

const { protect } = require("../middlewares/authMiddleware");

router.route("/").post(protect, createQuestion).get(protect, getQuestions);
router
  .route("/survey/:id")
  .get(protect, getQuestionsBySurveyId);
router
  .route("/:id")
  .get(protect, getQuestionById)
  .put(protect, updateQuestion)
  .delete(protect, deleteQuestion);

module.exports = router;
