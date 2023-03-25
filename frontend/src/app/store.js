import { configureStore } from "@reduxjs/toolkit"
import postSlice from "../features/post/postSlice"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    posts: postSlice,
    auth: authReducer,
  },
})
