import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const accessKey = "A2yt3P24akf1nnLH4JIZDJZ70HQxNfTzkwkmZOUSTZ1QlvqVh35TnCoV";

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/curated?page=${page}&per_page=10`,
        {
          headers: {
            Authorization: accessKey,
          },
        }
      );

      setPhotos((prevPhotos) => [...prevPhotos, ...response.data.photos]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  return (
    <div className="mainDiv">
      <h1>Gallery Pictures</h1>
      <div className="gallery">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.src.small} alt={photo.alt} />
        ))}
      </div>
      {loading && <p>loading...</p>}
      <button onClick={() => setPage(page + 1)}>more</button>
    </div>
  );
};

export default App;
