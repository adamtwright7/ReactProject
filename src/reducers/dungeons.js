import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Castle Ravenloft",
    image: "../../staticDungeonPics/castleRavenloft.png",
    age: "164",
    height: `364'2"`,
    bio: "Tall goth girl",
  },
  {
    id: 2,
    name: "Dungeon of the Mad Mage",
    image: "../../staticDungeonPics/madMage.jpg",
    age: "674",
    height: `23 floors`,
    bio: "Yeah my ex was a little crazy haha",
  },
  {
    id: 3,
    name: "Palace Of Heart's Desire",
    image: "../../staticDungeonPics/palaceOfHeartsDesire.png",
    age: "23 years",
    height: `1 beanstalk`,
    bio: "I can grant whatever you desire...",
  },
  {
    id: 4,
    name: "Salvage Operation",
    image: "../../staticDungeonPics/salvageOperation.jpg",
    age: "56 years",
    height: `21'7"`,
    bio: "Just floating wherever the wind takes me ahaha",
  },
  {
    id: 5,
    name: "Tomb of Annihilation",
    image: "../../staticDungeonPics/toa.jpg",
    age: "972 years",
    height: `114'10"`,
    bio: "Already got one lich",
  },
  {
    id: 6,
    name: "Creeping Hut",
    image: "../../staticDungeonPics/walkingHut.jpg",
    age: "1047 years",
    height: `16'1"`,
    bio: "Stopped creepin' a couple years ago",
  },
  {
    id: 7,
    name: "White Plume Mountain",
    image: "../../staticDungeonPics/whitePlumeMountain.png",
    age: "207 years",
    height: `204'8"`,
    bio: "Hot and I know it",
  },
  {
    id: 8,
    name: "Zariel's Flying Fortress",
    image: "../../staticDungeonPics/zarielsFlyingFortress.png",
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
    removeDungeon: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDungeon, removeDungeon } = dungeonsSlice.actions;

export default dungeonsSlice.reducer;
