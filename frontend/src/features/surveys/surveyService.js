import axios from "axios";

const API_URL = "https://anket-yonetim-sistemi.onrender.com/api/surveys"

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

// Update a survey
const updateSurvey = async ({ id, surveyData }, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + `/${id}`, surveyData, config)

  return response.data
}

// Delete a survey
const deleteSurvey = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + `/${id}`, config)

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

// Get survey by id
const getSurveyById = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + `/${id}`, config)

  return response.data
}



const surveyService = {
  createSurvey,
  getUserSurveys,
  getAllSurveys,
  updateSurvey,
  deleteSurvey,
  getSurveyById
}

export default surveyService
