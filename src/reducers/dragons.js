import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Fizban",
    image: "../../public/staticDragonPics/fizban.png",
    age: "1 universe",
    height: `5'7"`,
    bio: "I hope you like golden finches!",
  },
];

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
