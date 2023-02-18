import { configureStore } from "@reduxjs/toolkit";
import dragonReducers from "./reducers/dragons";
import dungeonReducers from "./reducers/dungeons";
import matchReducers from "./reducers/matches";

export const store = configureStore({
  reducer: {
    dragons: dragonReducers,
    dungeons: dungeonReducers,
    matches: matchReducers,
  },
});
