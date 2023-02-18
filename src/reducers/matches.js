import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    addMatch: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMatch } = matchesSlice.actions;

export default matchesSlice.reducer;
