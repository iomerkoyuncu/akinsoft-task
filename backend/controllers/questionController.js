const asyncHandler = require('express-async-handler');
const pool = require('../config/db');

//@desc 	Get all questions
//@route 	GET /api/questions
//@access Private
const getQuestions = asyncHandler(async (req, res) => {
  const questions = await pool.query('SELECT * FROM questions');
  res.json(questions.rows);
});

//@desc 	Get a question by id
//@route 	GET /api/questions/:id
//@access Private
const getQuestionById = asyncHandler(async (req, res) => {
  const question = await pool.query(
    'SELECT * FROM questions WHERE question_id = $1',
    [req.params.id]
  );
  if (question.rows.length > 0) {
    res.json(question.rows[0]);
  } else {
    res.status(404);
    throw new Error('Question not found');
  }
});

//desc 	Get all questions by survey id
//@route 	GET /api/questions/survey/:id
//@access Private
const getQuestionsBySurveyId = asyncHandler(async (req, res) => {
  const questions = await pool.query(
    'SELECT * FROM questions WHERE survey_id = $1',
    [req.params.id]
  );
  if (questions.rows.length > 0) {
    res.json(questions.rows);
  } else {
    res.status(404);
    throw new Error('Questions not found');
  }
});

//@desc 	Create a question
//@route 	POST /api/questions
//@access Private
const createQuestion = asyncHandler(async (req, res) => {
  const { question, answer, survey_id } = req.body;
  const newQuestion = await pool.query(
    'INSERT INTO questions (question, answer, survey_id) VALUES ($1, $2, $3) RETURNING *',
    [question, answer, survey_id]
  );
  res.json(newQuestion.rows[0]);
});

//@desc 	Update a question
//@route 	PUT /api/questions/:id
//@access Private
const updateQuestion = asyncHandler(async (req, res) => {
  const { updatedQuestion } = req.body;
  const question = await pool.query(
    'UPDATE questions SET question = $1 WHERE question_id = $2 RETURNING *',
    [updatedQuestion, req.params.id]
  );
  if (question.rows.length > 0) {
    res.json(question.rows[0]);
  } else {
    res.status(404);
    throw new Error('Question not found');
  }
});

//@desc 	Delete a question
//@route 	DELETE /api/questions/:id
//@access Private
const deleteQuestion = asyncHandler(async (req, res) => {
  const question = await pool.query(
    'DELETE FROM questions WHERE question_id = $1 RETURNING *',
    [req.params.id]
  );
  if (question.rows.length > 0) {
    res.json({ message: 'Question removed' });
  } else {
    res.status(404);
    throw new Error('Question not found');
  }
});


module.exports = {
  getQuestions,
  getQuestionById,
  getQuestionsBySurveyId,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};

