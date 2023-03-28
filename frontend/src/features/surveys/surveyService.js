import axios from "axios";

const API_URL = "http://localhost:3001/api/surveys"

// Create a new survey
const createSurvey = async (surveyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, surveyData, config)

  return response.data
}
// Get user surveys
const getUserSurveys = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + `/user/${id}`, config)

  return response.data
}

// Get all surveys
const getAllSurveys = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}


const surveyService = {
  createSurvey,
  getUserSurveys,
  getAllSurveys
}

export default surveyService
