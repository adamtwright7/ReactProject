import React from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addDragon } from "../reducers/dragons";
import Card from "./Card";

const SwipeDragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);
  let randInd = Math.floor(Math.random() * 8); // Gives a random number between 0 and 7 -- the indexes of the "dragons" array.
  let dragon = dragons[randInd];

  return (
    <div className="bg-offBlack min-h-screen text-white text-center">
      <Navbar />
      <Card suitor={dragon} />
    </div>
  );
};

export default SwipeDragons;
