import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import MatchCard from "./MatchCard";

const Matches = () => {
  const matches = useSelector((state) => state.matches);
  return (
    <div className="bg-offBlack min-h-screen text-white text-center">
      <Navbar />
      <p className="font-bold text-xl">Matches</p>
      {/* The following line will render if there aren't any matches yet -- if `matches` is empty.*/}
      {matches.length === 0 && <p> No matches yet! </p>}
      {matches.map((match) => (
        <MatchCard suitor={match} />
      ))}
    </div>
  );
};

export default Matches;
