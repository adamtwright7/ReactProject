import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addDragon, removeDragon } from "../reducers/dragons";
import { addMatch } from "../reducers/matches";
import { useSwipeable } from "react-swipeable"; // custom swipe event listener
import { motion } from "framer-motion"; // used for swipe animations

const SwipeDragons = () => {
  /// ------------ API stuff -----------------

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

  // All the API call stuff
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

  const addAPIdragon = () => {
    // if there's already a current ID, increase it. Otherwise, start it at 9 (the first ID not hard-coded)
    currentID ? (currentID += 1) : (currentID = 9);

    let nextDragon = {
      id: currentID,
      name: "Test Name",
      image: imagesToDisplay[0], // gets the first image from the API
      age: `${Math.floor(Math.random() * 1000) + 25} years`, // random age between 25 and 1024 years
      height: `${Math.floor(Math.random() * 41) + 10}' 
      ${Math.floor(Math.random() * 13)}"`, // random height between 10-50 feet
      bio: "", // Would be cool to randomly generate bios in a more complete site
    };
  };

  // End dragon adding. Standard stuff follows:

  const dragons = useSelector((state) => state.dragons); // get the redux state
  const [dontfetch, setDontfetch] = useState(false);
  const [dragon, setDragon] = useState({});

  const dispatch = useDispatch();

  const getDragon = () => {
    const randInd = Math.floor(Math.random() * dragons.length); // Gives a random index of the "dragons" array.
    setDragon(dragons[randInd]);
  };

  // calls the first dragon
  useEffect(() => {
    getDragon();
    overallAPIcall();
  }, [dontfetch]);

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
