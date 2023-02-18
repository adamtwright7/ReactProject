import React from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addDragon } from "../reducers/dragons";
import Card from "./Card";

const SwipeDungeons = () => {
  const dispatch = useDispatch();
  const dungeons = useSelector((state) => state.dungeons);
  let randInd = Math.floor(Math.random() * 8); // Gives a random number between 0 and 7 -- the indexes of the "dragons" array.
  let dungeon = dungeons[randInd];

  return (
    <div className="bg-offBlack min-h-screen text-white text-center">
      <Navbar />
      <Card suitor={dungeon} />
    </div>
  );
};

export default SwipeDungeons;