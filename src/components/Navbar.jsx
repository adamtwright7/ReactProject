import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-offBlack p-4 gap-2">
      <Link to="/" className="button">
        Home
      </Link>
      <Link to="/swipe/dungeons" className="button">
        Swipe Dungeons
      </Link>
      <Link to="/swipe/dragons" className="button">
        Swipe Dragons
      </Link>
      <Link to="/matches" className="button">
        Matches
      </Link>
    </div>
  );
};

export default Navbar;
