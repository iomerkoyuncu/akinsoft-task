import axios from "axios";

const API_URL = "https://anket-yonetim-sistemi.onrender.com/api/answers"

// Post a answer
const postAnswer = async (answerData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, answerData, config)

  return response.data
}

// Get all answers
const getAnswers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Get an answer by id
const getAnswerById = async (answerId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + `/${answerId}`, config)

  return response.data
}

// Get user's answers
const getUserAnswers = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + `/user/${userId}`, config)

  return response.data

}

const answerService = {
  postAnswer,
  getAnswers,
  getAnswerById,
  getUserAnswers
}

export default answerService
