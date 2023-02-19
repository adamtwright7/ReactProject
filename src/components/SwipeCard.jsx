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
      </div>
    </div>
  );
};

export default SwipeCard;
