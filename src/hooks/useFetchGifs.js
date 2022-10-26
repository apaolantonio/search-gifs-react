import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";
export const useFetchGifs = (category) => {
  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setstate({ data: imgs, loading: false });
    });
  }, [category]);
  return state;
};
