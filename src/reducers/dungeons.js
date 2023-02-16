import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dungeonsSlice = createSlice({
  name: "dungeons",
  initialState,
  reducers: {
    addDungeon: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDungeon } = dungeonsSlice.actions;

export default dungeonsSlice.reducer;
