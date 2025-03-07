import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const accessKey = "pDBxydpwaNHJHXb2fNTrDxmyVgdrah32QxrUEbQX45Y";

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos?page=${page}&client_id=${accessKey}`
      );

      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
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
          <img
            key={photo.id}
            src={photo.urls.small}
            alt={photo.alt_description}
          />
        ))}
      </div>
      {loading && <p>loading...</p>}
      <button onClick={() => setPage(page + 1)}>more</button>
    </div>
  );
};

export default App;
