import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import questionService from "./questionService";

const initialState = {
  questions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new question
export const createQuestion = createAsyncThunk(
  "question/createQuestion",
  async (questionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await questionService.createQuestion(questionData, token)
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
);

// Get all questions by survey id
export const getQuestionsBySurveyId = createAsyncThunk(
  "question/getQuestionsBySurveyId",
  async (surveyId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await questionService.getQuestionsBySurveyId(surveyId, token)
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
);

// Update a question
export const updateQuestion = createAsyncThunk(
  "question/updateQuestion",
  async (questionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await questionService.updateQuestion(questionData, token)
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
);

// Delete a question
export const deleteQuestion = createAsyncThunk(
  "question/deleteQuestion",
  async (questionId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await questionService.deleteQuestion(questionId, token)
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
);

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuestion.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createQuestion.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(getQuestionsBySurveyId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestionsBySurveyId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.questions = payload;
      })
      .addCase(getQuestionsBySurveyId.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(updateQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuestion.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateQuestion.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(deleteQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteQuestion.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteQuestion.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload;
      })
  }
});

export const { reset } = surveySlice.actions;
export default surveySlice.reducer;