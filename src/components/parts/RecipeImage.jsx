import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const RecipeImage = (props) => {
  const [src, setSrc] = useState("");

  const getImage = async (image) => {
    const first_response = await axios.get(`http://localhost:8000${image}`);
    const image_url = first_response.data.url;
    const image_path = `http://localhost:8000/images/${image_url}`;
    setSrc(image_path);
  };

  useEffect(() => {
    getImage(props.image);
  }, []);

  return <img src={src} className="recipe-wrapper-img" />;
};

export default RecipeImage;
