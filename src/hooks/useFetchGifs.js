import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";
export const useFetchGifs = (category) => {
  const [images, setImages] = useState({ data: [], loading: true });

  const getImages = async () => {
    const newImages = await getGifs(category);
    console.log("new images: ", newImages);
    setImages({ data: newImages, loading: false });
  };

  useEffect(() => {
    getImages();
  }, []);

  return images;
};
