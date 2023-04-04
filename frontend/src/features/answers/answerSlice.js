import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import answerService from "./answerService";

const initialState = {
  answers: [],
  surveyAnswers: [],
  answer: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Post a answer
export const postAnswer = createAsyncThunk(
  "answer/postAnswer",
  async (answerData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await answerService.postAnswer(answerData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.string()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get all answers
export const getAnswers = createAsyncThunk(
  "answer/getAnswers",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await answerService.getAnswers(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.string()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get an answer by id
export const getAnswerById = createAsyncThunk(
  "answer/getAnswerById",
  async (answerId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await answerService.getAnswerById(answerId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.string()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user's answers
export const getUserAnswers = createAsyncThunk(
  "answer/getUserAnswers",
  async (userId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await answerService.getUserAnswers(userId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.string()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    reset: (state) => initialState,
    pushSurveyAnswers: (state, action) => {
      state.surveyAnswers.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postAnswer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postAnswer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(postAnswer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(getAnswers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAnswers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.answers = payload;
      })
      .addCase(getAnswers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(getAnswerById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAnswerById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.answer = payload;
      })
      .addCase(getAnswerById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(getUserAnswers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserAnswers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.answers = payload;
      })
      .addCase(getUserAnswers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload;
      })
  },
});

export const { reset, pushSurveyAnswers } = answerSlice.actions;

export default answerSlice.reducer;

