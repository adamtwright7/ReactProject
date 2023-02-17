import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Swipe = () => {
  const { interestedIn } = useParams();

  return (
    <div>
      <Navbar />
      <p>You're on the swipe page for {interestedIn} </p>
    </div>
  );
};

export default Swipe;
