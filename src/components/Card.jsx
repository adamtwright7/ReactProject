import React from "react";
import { useDispatch } from "react-redux";
import { addMatch, removeMatch } from "../reducers/matches";

const Card = ({ suitor }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p> {suitor.name} </p>
      <p> {suitor.height} </p>
      <p> {suitor.age} </p>
      <img src={suitor.image} alt="" />
      <div className="flex justify-around p-6">
        <button onClick={() => dispatch(addMatch(suitor))} className="button">
          Like
        </button>
        <button
          onClick={() => dispatch(removeMatch(suitor))}
          className="button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
