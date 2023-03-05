import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className="bg-offBlack min-h-screen text-white text-center">
      <p className="italic p-6"> Dungeons 💕with🐉 Dragons </p>

      <p className="text-4xl m-6">
        Tired of someone without a hoard living in your space? Need a place to
        rest?
      </p>

      <div
        id="orbit"
        className="grid grid-cols-3 gap-6 items-center justify-items-center m-6"
      >
        <img src="./staticDragonPics/fizban.png" />
        <img src="./staticDragonPics/valdemar.webp" />
        <img src="./staticDragonPics/tiamat.jpg" />
        <img src="./staticDragonPics/jabberwock.jpg" />
        <img
          src="./staticDragonPics/argynvost.jpg"
          alt="placeholder center pic"
        />
        <img src="./staticDungeonPics/madMage.jpg" />
        <img src="./staticDungeonPics/toa.jpg" />
        <img src="./staticDungeonPics/walkingHut.jpg" />
        <img src="./staticDungeonPics/salvageOperation.jpg" />
      </div>

      <p className="font-bold p-4"> Get started. </p>
      <p>I'm interested in: </p>

      <div className="flex justify-around p-6">
        <Link to="/swipe/Dungeons" className="button">
          Dungeons
        </Link>
        <Link to="/swipe/Dragons" className="button">
          Dragons
        </Link>
      </div>
      <p className="italic text-sm p-6">
        A parody by{" "}
        <a className="underline" href="https://adamtwright7.github.io/">
          Adam Wright
        </a>
        .
        <br />
        Disclaimer: "Dungeons with Dragons" is not responsible for any harm that
        may befall you via breath weapons, mad wizards, dastardly traps, or
        cunning mimics. No refunds. True love sold separately.
      </p>
      <p>
        Inspired by the following near-omnipresent idea in the D&D community:
      </p>
      <img className="m-auto p-6" src="../../meme.png" alt="" />
    </div>
  );
};

export default Splash;
