import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addDragon, removeDragon } from "../reducers/dragons";
import { addMatch } from "../reducers/matches";
import { useSwipeable } from "react-swipeable"; // custom swipe event listener

const SwipeDragons = () => {
  const dungeons = useSelector((state) => state.dungeons); // get the redux state

  const [dungeon, setDungeon] = useState({});

  const dispatch = useDispatch();

  const getDragon = () => {
    const randInd = Math.floor(Math.random() * 8); // Gives a random number between 0 and 7 -- the indexes of the "dungeons" array. It starts at 8 and adds one each load.
    setDragon(dungeons[randInd]);
  };

  // calls the first dragon
  useEffect(() => {
    getDragon();
  }, []);

  const handleSwipes = useSwipeable({
    onSwipedLeft: () => {
      dispatch(removeDragon(dragon));
      getDragon();
    },
    onSwipedRight: () => {
      dispatch(addMatch(dragon));
      dispatch(removeDragon(dragon));
      getDragon();
    },
  });

  return (
    <div className="bg-offBlack min-h-screen text-white text-center">
      <Navbar />
      {/* Moving the swipe card here so that I can reload the next suitor more easily. "...handlers" is the swipe functionality. */}
      <div {...handleSwipes}>
        <p> {dragon?.name} </p>
        <p> {dragon?.height} </p>
        <p> {dragon?.age} </p>
        <img src={dragon?.image} alt="" />
        <div className="flex justify-around p-6">
          <button
            // still needs to add a dragon to the list for infinite swiping.
            onClick={() => {
              dispatch(removeDragon(dragon));
              getDragon();
            }}
            className="skipButton"
          >
            Skip
          </button>
          <button
            onClick={() => {
              dispatch(addMatch(dragon));
              dispatch(removeDragon(dragon));
              getDragon();
            }}
            className="icon-btn add-btn"
          >
            <div className="add-icon"></div>
            <p className="btn-txt">Add Match</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipeDragons;
