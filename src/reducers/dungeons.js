import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Castle Ravenloft",
    image: "../../public/staticDungeonPics/castleRavenloft.png",
    age: "164",
    height: `364'2"`,
    bio: "Tall goth girl",
  },
  {
    name: "Dungeon of the Mad Mage",
    image: "../../public/staticDungeonPics/madMage.jpg",
    age: "674",
    height: `23 floors`,
    bio: "Yeah my ex was a little crazy haha",
  },
  {
    name: "Palace Of Heart's Desire",
    image: "../../public/staticDungeonPics/palaceOfHeartsDesire.png",
    age: "23 years",
    height: `1 beanstalk`,
    bio: "I can grant whatever you desire...",
  },
  {
    name: "Salvage Operation",
    image: "../../public/staticDungeonPics/salvageOperation.jpg",
    age: "56 years",
    height: `21'7"`,
    bio: "Just floating wherever the wind takes me ahaha",
  },
  {
    name: "Tomb of Annihilation",
    image: "../../public/staticDungeonPics/toa.jpg",
    age: "972 years",
    height: `114'10"`,
    bio: "Already got one lich",
  },
  {
    name: "Creeping Hut",
    image: "../../public/staticDungeonPics/walkingHut.jpg",
    age: "1047 years",
    height: `16'1"`,
    bio: "Stopped creepin' a couple years ago",
  },
  {
    name: "White Plume Mountain",
    image: "../../public/staticDungeonPics/whitePlumeMountain.png",
    age: "207 years",
    height: `204'8"`,
    bio: "Hot and I know it",
  },
  {
    name: "Zariel's Flying Fortress",
    image: "../../public/staticDungeonPics/zarielsFlyingFortress.png",
    age: "176 years",
    height: `800'3"`,
    bio: "The view up here is nice actually",
  },
];

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
