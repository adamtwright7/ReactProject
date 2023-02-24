import React from "react";
import { useDispatch } from "react-redux";
import { removeMatch } from "../reducers/matches";

const MatchCard = ({ suitor }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p> {suitor?.name} </p>
      <p>
        {suitor?.height} || {suitor?.age}
      </p>
      <img
        src={suitor?.image}
        className="p-6 mx-auto border-pink-300 border-2 hover:border-4 rounded-lg w-[90vw]"
      />
      <p className="p-4"> {suitor?.bio} </p>
      <div className="flex justify-around p-6">
        <button
          // still needs to add a dragon to the list for infinite swiping.
          onClick={() => {
            dispatch(removeMatch(suitor));
          }}
          className="skipButton"
        >
          Remove
        </button>
        <button
          onClick={() => {
            // need to send the user to a chat page here
          }}
          className="icon-btn add-btn"
        >
          <div className="add-icon"></div>
          <p className="btn-txt">Chat now</p>
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
