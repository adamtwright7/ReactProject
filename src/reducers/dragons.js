import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Fizban",
    image: "../../staticDragonPics/fizban.png",
    age: "1 universe",
    height: `5'7"`,
    bio: "I hope you like golden finches!",
  },
  {
    id: 2,
    name: "Argynvost",
    image: "../../staticDragonPics/argynvost.png",
    age: "324 years",
    height: `6'4"`,
    bio: "A knight in shining silver.",
  },
  {
    id: 3,
    name: "Arveiaturace",
    image: "../../staticDragonPics/arveiaturace.png",
    age: "1828 years",
    height: `18'2"`,
    bio: "Ready your pickup lines, Meltharond!",
  },
  {
    id: 4,
    name: "Galadaeros",
    image: "../../staticDragonPics/galadaeros.webp",
    age: "247 years",
    height: `15'4"`,
    bio: "Patron of the Moonshae Isle's first all-female adventuring company.",
  },
  {
    id: 5,
    name: "Imvaernarhro",
    image: "../../staticDragonPics/imvaernarhro.png",
    age: "1561 years",
    height: `26'3"`,
    bio: "Call me Inferno.",
  },
  {
    id: 6,
    name: "Jabberwock",
    image: "../../staticDragonPics/jabberwock.jpg",
    age: "? years",
    height: `12'9"`,
    bio: "jaws that bite, claws that catch",
  },
  {
    id: 7,
    name: "Tiamat",
    image: "../../staticDragonPics/tiamat.jpg",
    age: "1 universe",
    height: `55'11"`,
    bio: "The queen herself.",
  },
  {
    id: 8,
    name: "Valdemar",
    image: "../../staticDragonPics/valdemar.webp",
    age: "106 years",
    height: `16'6"`,
    bio: "Need someone to get her (the sword) out of my head.",
  },
];

export const dragonsSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {
    addDragon: (state, action) => {
      state.push(action.payload);
    },
    removeDragon: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDragon, removeDragon } = dragonsSlice.actions;

export default dragonsSlice.reducer;
