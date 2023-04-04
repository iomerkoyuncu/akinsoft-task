const asyncHandler = require('express-async-handler');
const pool = require('../config/db');

//@desc 	Post an answer
//@route 	POST /api/answers
//@access Private
const postAnswer = asyncHandler(async (req, res) => {
  const { answer, question_id, user_id } = req.body;
  const newAnswer = await pool.query(
    'INSERT INTO user_answers (answer, question_id, user_id) VALUES ($1, $2, $3) RETURNING *',
    [answer, question_id, user_id]
  );
  res.json(newAnswer.rows[0]);
});

//@desc 	Get all answers
//@route 	GET /api/answers
//@access Private
const getAnswers = asyncHandler(async (req, res) => {
  const answers = await pool.query('SELECT * FROM user_answers');
  res.json(answers.rows);
});

//@desc 	Get an answer by id
//@route 	GET /api/answers/:id
//@access Private
const getAnswerById = asyncHandler(async (req, res) => {
  const answer = await pool.query(
    'SELECT * FROM user_answers WHERE answer_id = $1',
    [req.params.id]
  );
  if (answer.rows.length > 0) {
    res.json(answer.rows[0]);
  } else {
    res.status(404);
    throw new Error('Answer not found');
  }
});

//@desc 	Get user's answers
//@route 	GET /api/answers/user/:id
//@access Private
const getUserAnswers = asyncHandler(async (req, res) => {
  const answers = await pool.query(
    'SELECT * FROM user_answers WHERE user_id = $1',
    [req.params.id]
  );
  if (answers.rows.length > 0) {
    res.json(answers.rows);
  } else {
    res.status(404);
    throw new Error('Answers not found');
  }
});


module.exports = {
  postAnswer,
  getAnswers,
  getUserAnswers,
  getAnswerById,
};
