import React from "react";
import { useDispatch } from "react-redux";
import { addMatch, removeMatch } from "../reducers/matches";

const SwipeCard = ({ suitor }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p> {suitor.name} </p>
      <p> {suitor.height} </p>
      <p> {suitor.age} </p>
      <img src={suitor.image} alt="" />
      <div className="flex justify-around p-6">
        {/* This button needs to remove the suitor from its list (if it's a dragon, use removeDragon) instead of from the matches list*/}
        <button
          onClick={() => dispatch(removeMatch(suitor))}
          className="skipButton"
        >
          Skip
        </button>
        <button
          onClick={() => dispatch(addMatch(suitor))}
          class="icon-btn add-btn"
        >
          <div class="add-icon"></div>
          <p class="btn-txt">Add Match</p>
        </button>
        {/* Both buttons need to remove the suitor from its list, add a new suitor to the list, and call up the next card. Maybe this can be done on load.*/}
      </div>
    </div>
  );
};

export default SwipeCard;
