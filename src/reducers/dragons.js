import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Fizban",
    image: "../../public/staticDragonPics/fizban.png",
    age: "1 universe",
    height: `5'7"`,
    bio: "I hope you like golden finches!",
  },
  {
    name: "Argynvost",
    image: "../../public/staticDragonPics/argynvost.png",
    age: "324 years",
    height: `6'4"`,
    bio: "A knight in shining silver.",
  },
  {
    name: "Arveiaturace",
    image: "../../public/staticDragonPics/arveiaturace.png",
    age: "1828 years",
    height: `18'2"`,
    bio: "Ready your pickup lines, Meltharond!",
  },
  {
    name: "Galadaeros",
    image: "../../public/staticDragonPics/galadaeros.webp",
    age: "247 years",
    height: `15'4"`,
    bio: "Patron of the Moonshae Isle's first all-female adventuring company.",
  },
  {
    name: "Imvaernarhro",
    image: "../../public/staticDragonPics/imvaernarhro.png",
    age: "1561 years",
    height: `26'3"`,
    bio: "Call me Inferno.",
  },
  {
    name: "Jabberwock",
    image: "../../public/staticDragonPics/jabberwock.jpg",
    age: "? years",
    height: `12'9"`,
    bio: "jaws that bite, claws that catch",
  },
  {
    name: "Tiamat",
    image: "../../public/staticDragonPics/tiamat.jpg",
    age: "1 universe",
    height: `55'11"`,
    bio: "The queen herself.",
  },
  {
    name: "Valdemar",
    image: "../../public/staticDragonPics/valdemar.webp",
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
  },
});

// Action creators are generated for each case reducer function
export const { addDragon } = dragonsSlice.actions;

export default dragonsSlice.reducer;
