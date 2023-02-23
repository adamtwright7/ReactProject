// Right now, this is the same as SwipeDragons but with state name changes. (`dragons` is still the name of the data array)
// Ideally, I would useParams() to do the changes and reduce the code to a single component.

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addDungeon, removeDungeon } from "../reducers/dungeons";
import { addMatch } from "../reducers/matches";
import { useSwipeable } from "react-swipeable"; // custom swipe event listener
import { motion } from "framer-motion"; // used for swipe animations
import dragonNames from "../../public/dragonNames"; // gotta have the dragon names -- I'll use these for dungeons too I guess
import { store } from "../store";

const SwipeDragons = () => {
  /// ------------ API stuff -----------------
  // In a real application, an API call as large as this (100 asynchronous operations) wouldn't be done.
  // A new potential match would simply be called from a database.

  const [imagesToDisplay, setImagesToDisplay] = useState([
    "../../public/staticDragonPics/pseudodragon.png",
  ]);

  const imageAPIcall = async (imageAPIurlVariable) => {
    let imageRawData = await fetch(imageAPIurlVariable);
    let imageReadableData = await imageRawData.json();
    let imageURL =
      imageReadableData.config.iiif_url +
      "/" +
      imageReadableData.data.image_id +
      "/full/843,/0/default.jpg";
    setImagesToDisplay((imagesToDisplay) => imagesToDisplay.concat(imageURL));
  };

  const overallAPIcall = async () => {
    // Call the API for all the dragon artwork
    let url = "https://api.artic.edu/api/v1/artworks/search?q=dungeon&limit=99";
    // Unfortunately, there aren't many images returned from this, and only one looks vaguely like a dungeon.
    // I need a better dungeon API.
    const rawData = await fetch(url);
    const readableData = await rawData.json();
    readableData.data.map((artPiece) => {
      let imageAPIurl = artPiece.api_link;
      imageAPIcall(imageAPIurl);
    });
  };

  /// ------------- End API stuff -------------------
  // More dragon adding stuff.
  // By now, "imagesToDisplay" should have 99 dragon pictures.

  // Track the current ID. In a real application, this would be handled by an auto-incrementing field in a database or the `uuid` package.
  const [currentID, setCurrentID] = useState(9);

  const [randomDragonName, setRandomDragonName] = useState("Raiinn");
  const addAPIdragon = () => {
    // Generate a new random name and update the ID
    setRandomDragonName(dragonNames[Math.floor(Math.random() * 151)]);
    setCurrentID((currentID) => currentID + 1);

    // Create a new "profile"
    let nextDragon = {
      id: currentID,
      name: randomDragonName,
      image: imagesToDisplay.splice(
        Math.floor(Math.random() * imagesToDisplay.length),
        1
      ), // gets a random image to display
      age: `${Math.floor(Math.random() * 1000) + 25} years`, // random age between 25 and 1024 years
      height: `${Math.floor(Math.random() * 41) + 10}' 
      ${Math.floor(Math.random() * 13)}"`, // random height between 10-50 feet
      bio: "", // Would be cool to randomly generate bios in a more complete site
    };
    dispatch(addDungeon(nextDragon));
  };

  // End dragon adding. Standard stuff follows:

  const dragons = useSelector((state) => state.dungeons); // get the redux state

  const dispatch = useDispatch();

  // calls the first dragon
  useEffect(() => {
    overallAPIcall();
  }, []);

  // combine left/right actions
  const swipeLeftActions = (dragon) => {
    dispatch(removeDungeon(dragon));
    addAPIdragon();
  };

  const swipeRightActions = (dragon) => {
    dispatch(addMatch(dragon));
    dispatch(removeDungeon(dragon));
    addAPIdragon();
  };

  const handleSwipes = useSwipeable({
    onSwipedLeft: () => swipeLeftActions(dragons[0]),
    onSwipedRight: () => swipeRightActions(dragons[0]),
  });

  return (
    <div className="bg-offBlack min-h-screen text-white text-center">
      <Navbar />
      {/* Moving the swipe card here so that I can reload the next suitor more easily. "...handlers" is the swipe functionality. */}
      <div {...handleSwipes}>
        <p> {dragons[0]?.name} </p>
        <p>
          {dragons[0]?.height} || {dragons[0]?.age}
        </p>
        <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }}>
          <img
            src={dragons[0]?.image}
            className="p-6 mx-auto border-pink-300 border-2 hover:border-4 rounded-lg"
          />
        </motion.div>
        <p className="p-4"> {dragons[0]?.bio} </p>
        <div className="flex justify-around p-6">
          <button
            // still needs to add a dragon to the list for infinite swiping.
            onClick={() => swipeLeftActions(dragons[0])}
            className="skipButton"
          >
            Skip
          </button>
          <button
            onClick={() => swipeRightActions(dragons[0])}
            // Math.floor(Math.random() * dragons.length) randomization which could be used instead of [0]
            className="icon-btn add-btn"
          >
            <div className="add-icon"></div>
            <p className="btn-txt">Add Match</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipeDragons;
