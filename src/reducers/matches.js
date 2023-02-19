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
      return state.filter((item) => item.name !== action.payload.name);
    },
  },
});

// So removeMatch only checks names. That's pretty bad, but I can't find a way to compare the entire object that functions as expected (==,===,and Object.is all don't work).
// In a real application, this might compare usernames that must be unique or userIDs stored in a database.

// Action creators are generated for each case reducer function
export const { addMatch, removeMatch } = matchesSlice.actions;

export default matchesSlice.reducer;
