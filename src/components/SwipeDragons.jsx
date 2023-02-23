import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addDragon, removeDragon } from "../reducers/dragons";
import { addMatch } from "../reducers/matches";
import { useSwipeable } from "react-swipeable"; // custom swipe event listener
import { motion } from "framer-motion"; // used for swipe animations
import dragonNames from "../../public/dragonNames"; // gotta have the dragon names

const SwipeDragons = () => {
  /// ------------ API stuff -----------------
  // In a real application, an API call as large as this (100 asynchronous operations) wouldn't be done.
  // A new potential match would simply be called from a database.

  const [imagesToDisplay, setImagesToDisplay] = useState([]);

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
    let url = "https://api.artic.edu/api/v1/artworks/search?q=dragon&limit=99";
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
      image: imagesToDisplay.pop(),
      age: `${Math.floor(Math.random() * 1000) + 25} years`, // random age between 25 and 1024 years
      height: `${Math.floor(Math.random() * 41) + 10}' 
      ${Math.floor(Math.random() * 13)}"`, // random height between 10-50 feet
      bio: "", // Would be cool to randomly generate bios in a more complete site
    };

    dispatch(addDragon(nextDragon));
  };

  // End dragon adding. Standard stuff follows:

  const dragons = useSelector((state) => state.dragons); // get the redux state
  const [dragon, setDragon] = useState({});

  const dispatch = useDispatch();

  const getDragon = () => {
    const randInd = Math.floor(Math.random() * dragons.length); // Gives a random index of the "dragons" array.
    setDragon(dragons[randInd]);
    // Every time we get the next dragon, we also want to add a dragon to the list.
    addAPIdragon();
  };

  // calls the first dragon
  useEffect(() => {
    getDragon();
    overallAPIcall();
  }, []);

  const handleSwipes = useSwipeable({
    onSwipedLeft: () => {
      dispatch(removeDragon(dragon));
      getDragon();
    },
    onSwipedRight: () => {
      dispatch(addMatch(dragon));
      dispatch(removeDragon(dragon));
      getDragon();
    },
  });

  return (
    <div className="bg-offBlack min-h-screen text-white text-center">
      <Navbar />
      {/* Moving the swipe card here so that I can reload the next suitor more easily. "...handlers" is the swipe functionality. */}
      <div {...handleSwipes}>
        <p> {dragon?.name} </p>
        <p>
          {dragon?.height} || {dragon?.age}
        </p>
        <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }}>
          <img
            src={dragon?.image}
            className="p-6 mx-auto border-pink-300 border-2 hover:border-4 rounded-lg"
          />
        </motion.div>
        <p className="p-4"> {dragon?.bio} </p>
        <div className="flex justify-around p-6">
          <button
            // still needs to add a dragon to the list for infinite swiping.
            onClick={() => {
              dispatch(removeDragon(dragon));
              getDragon();
            }}
            className="skipButton"
          >
            Skip
          </button>
          <button
            onClick={() => {
              dispatch(addMatch(dragon));
              dispatch(removeDragon(dragon));
              getDragon();
            }}
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
