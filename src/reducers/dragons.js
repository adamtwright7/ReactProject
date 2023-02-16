import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dragonsSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {
    addDragon: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDragon } = dragonsSlice.actions;

export default dragonsSlice.reducer;
