const asyncHandler = require("express-async-handler");
const pool = require("../config/db");

//@desc 	Get all surveys
//@route 	GET /api/surveys
//@access Private
const getSurveys = asyncHandler(async (req, res) => {
  const surveys = await pool.query("SELECT * FROM surveys");
  res.json(surveys.rows);
}
);

//@desc 	Get all surveys by user id
//@route 	GET /api/surveys/user/:id
//@access Private
const getSurveysByUserId = asyncHandler(async (req, res) => {
  const surveys = await pool.query(
    "SELECT * FROM surveys WHERE user_id = $1",
    [req.params.id]
  );
  res.json(surveys.rows);
});


//@desc 	Get a survey by id
//@route 	GET /api/surveys/:id
//@access Private
const getSurveyById = asyncHandler(async (req, res) => {
  const survey = await pool.query("SELECT * FROM surveys WHERE survey_id = $1", [
    req.params.id,
  ]);
  if (survey.rows.length > 0) {
    res.json(survey.rows[0]);
  } else {
    res.status(404);
    throw new Error("Survey not found");
  }
});

//@desc 	Create a survey
//@route 	POST /api/surveys
//@access Private
const createSurvey = asyncHandler(async (req, res) => {
  const { title, description, user_id } = req.body;
  const newSurvey = await pool.query(
    "INSERT INTO surveys (title, description, user_id) VALUES ($1, $2, $3) RETURNING *",
    [title, description, user_id]
  );
  if (newSurvey.rows.length > 0) {
    res.status(201).json(newSurvey.rows[0]);
  } else {
    res.status(400);
    throw new Error("Invalid survey data");
  }
});

//@desc 	Update a survey
//@route 	PUT /api/surveys/:id
//@access Private
const updateSurvey = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const survey = await pool.query(
    "UPDATE surveys SET title = $1, description = $2 WHERE survey_id = $3 RETURNING *",
    [title, description, req.params.id]
  );
  if (survey.rows.length > 0) {
    res.json(survey.rows[0]);
  } else {
    res.status(404);
    throw new Error("Survey not found");
  }
});

//@desc 	Delete a survey
//@route 	DELETE /api/surveys/:id
//@access Private
const deleteSurvey = asyncHandler(async (req, res) => {
  const survey = await pool.query(
    "DELETE FROM surveys WHERE survey_id = $1 RETURNING *",
    [req.params.id]
  );
  if (survey.rows.length > 0) {
    res.json({ message: "Survey removed" });
  } else {
    res.status(404);
    throw new Error("Survey not found");
  }
});

module.exports = {
  getSurveys,
  getSurveyById,
  getSurveysByUserId,
  createSurvey,
  updateSurvey,
  deleteSurvey,
};