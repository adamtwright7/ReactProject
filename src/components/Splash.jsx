import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className="bg-offBlack min-h-screen text-white text-center">
      <p className="italic p-6"> Dungeons with Dragons </p>

      <p className="text-4xl m-6">
        Tired of someone without a hoard living in your space? Need a place to
        rest?
      </p>

      <div
        id="orbit"
        className="grid grid-cols-3 gap-6 items-center justify-items-center m-6"
      >
        <img src="../../public/staticDragonPics/fizban.png" />
        <img src="../../public/staticDragonPics/Valdemar.webp" />
        <img src="../../public/staticDragonPics/tiamat.jpg" />
        <img src="../../public/staticDragonPics/jabberwock.jpg" />
        <img
          src="../../public/staticDragonPics/argynvost.png"
          alt="placeholder center pic"
        />
        <img src="../../public/staticDungeonPics/mad-mage.jpg" />
        <img src="../../public/staticDungeonPics/toa.jpg" />
        <img src="../../public/staticDungeonPics/walkingHut.jpg" />
        <img src="../../public/staticDungeonPics/salvage_operation.jpg" />
      </div>

      <p className="font-bold p-4"> Get started. </p>
      <p>I'm interested in: </p>

      <div className="flex justify-around">
        <Link to="/swipe/Dungeons" className="button">
          Dungeons
        </Link>
        <Link to="/swipe/Dragons" className="button">
          Dragons
        </Link>
      </div>
    </div>
  );
};

export default Splash;
