import React, { useState, useEffect } from "react";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [imageURLtoDisplay, setImageURLtoDisplay] = useState("");

  const imageAPIcall = async (imageAPIurlVariable) => {
    let imageRawData = await fetch(imageAPIurlVariable);
    let imageReadableData = await imageRawData.json();
    let imageURL =
      imageReadableData.config.iiif_url +
      "/" +
      imageReadableData.data.image_id +
      "/full/843,/0/default.jpg";
    setImageURLtoDisplay(imageURL);
  };

  // All the API call stuff
  const overallAPIcall = async () => {
    // Call the API for all the dragon artwork
    let url = "https://api.artic.edu/api/v1/artworks/search?q=dragon";
    const rawData = await fetch(url);
    const readableData = await rawData.json();
    setSearchResults(readableData.data);
  };

  useEffect(() => {
    overallAPIcall();
  }, []);

  return (
    <div>
      Home
      {/* Map through the results of the above API call, calling the API for the picture of each one. */}
      {searchResults?.map((artPiece) => {
        let imageAPIurl = artPiece.api_link;
        imageAPIcall(imageAPIurl);
        console.log(imageURLtoDisplay);
        return (
          <div>
            <p> {artPiece.title} </p>
            <img src={imageURLtoDisplay} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
