import React from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import MatchCard from "./MatchCard";

const Matches = () => {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches);
  return (
    <div className="bg-offBlack min-h-screen text-white text-center">
      <Navbar />
      Matches
      {matches.map((match) => (
        <MatchCard suitor={match} />
      ))}
    </div>
  );
};

export default Matches;
