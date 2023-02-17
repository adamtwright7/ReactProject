import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addDragon } from "../reducers/dragons";

const Swipe = () => {
  const { interestedIn } = useParams();
  const dragons = useSelector((state) => state.dragons);
  return (
    <div>
      <Navbar />
      <p>You're on the swipe page for {interestedIn} </p>
      {dragons.map((dragon) => {
        return (
          <div>
            <p> {dragon.name} </p>
            <p> {dragon.height} </p>
            <p> {dragon.age} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Swipe;
