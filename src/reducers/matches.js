import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    addMatch: (state, action) => {
      state.push(action.payload);
    },
    removeMatch: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMatch, removeMatch } = matchesSlice.actions;

export default matchesSlice.reducer;
