import axios from "axios";

const API_URL = "https://anket-yonetim-sistemi.onrender.com/api/questions"

// Create a new question
const createQuestion = async (questionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, questionData, config)

  return response.data
}

// Get all questions by survey id
const getQuestionsBySurveyId = async (surveyId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + `/survey/${surveyId}`, config)

  return response.data
}

// Updata a question
const updateQuestion = async (questionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + `/${questionData.id}`, questionData, config)

  return response.data
}

// Delete a question
const deleteQuestion = async (questionId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + `/${questionId}`, config)

  return response.data
}


const surveyService = {
  createQuestion,
  getQuestionsBySurveyId,
  updateQuestion,
  deleteQuestion
}

export default surveyService
