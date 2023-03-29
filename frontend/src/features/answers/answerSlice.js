import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  answers: [],
};

export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.answers.push(action.payload);
    }
  },
});

export const { addAnswer } = answerSlice.actions;

export default answerSlice.reducer;