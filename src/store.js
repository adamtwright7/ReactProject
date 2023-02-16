import { configureStore } from "@reduxjs/toolkit";
import addDragon from "./reducers/dragons";
import addDungeon from "./reducers/dungeons";

export const store = configureStore({
  reducer: {
    dragons: addDragon,
    dungeons: addDungeon,
  },
});
