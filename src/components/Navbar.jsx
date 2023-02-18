import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-offBlack p-4">
      <Link to="/" className="navButton">
        Home
      </Link>
      <Link to="/swipe/dungeons" className="navButton">
        Swipe Dungeons
      </Link>
      <Link to="/swipe/dragons" className="navButton">
        Swipe Dragons
      </Link>
      <Link to="/matches" className="navButton">
        Matches
      </Link>
    </div>
  );
};

export default Navbar;
