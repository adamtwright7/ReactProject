import React, { useState, useEffect } from "react";

// nameAPI: https://muna.ironarachne.com/dragonborn/?count=30&nameType=female

const Home = () => {
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
    let url = "https://api.artic.edu/api/v1/artworks/search?q=dungeon&limit=10";
    const rawData = await fetch(url);
    const readableData = await rawData.json();
    readableData.data.map((artPiece) => {
      let imageAPIurl = artPiece.api_link;
      imageAPIcall(imageAPIurl);
    });
  };

  useEffect(() => {
    overallAPIcall();
  }, []);

  console.log(imagesToDisplay);

  return (
    <div>
      Home
      {/* Map through the results of the above API call, calling the API for the picture of each one. */}
      {imagesToDisplay?.map((image) => {
        return (
          <div>
            <p>art piece</p>
            <img src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
