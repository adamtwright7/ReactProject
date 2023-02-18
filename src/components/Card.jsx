import React from "react";
import { useDispatch } from "react-redux";
import { addMatch } from "../reducers/matches";

const Card = ({ suitor }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p> {suitor.name} </p>
      <p> {suitor.height} </p>
      <p> {suitor.age} </p>
      <img src={suitor.image} alt="" />
      <button onClick={() => dispatch(addMatch(suitor))} className="button">
        Like
      </button>
    </div>
  );
};

export default Card;
