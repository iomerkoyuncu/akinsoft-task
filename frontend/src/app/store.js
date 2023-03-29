import { configureStore } from "@reduxjs/toolkit"

import authReducer from "../features/auth/authSlice"
import surveyReducer from "../features/surveys/surveySlice"
import questionReducer from "../features/questions/questionSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    survey: surveyReducer,
    question: questionReducer,
  },
})
