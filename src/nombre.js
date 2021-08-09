import React, { useEffect, useState } from "react";
import FetchAPI from "./api";
import Image from "react-bootstrap/Image";

const generarScore = (score) => {
  score = Math.floor(Math.random() * 100);
  return score;
};

const Usuario = () => {
  const [url, setURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      setURL(await FetchAPI());
    }
    fetchData();
  }, []);
  return (
    <div>
      <h4 className="my-3">Puntuacion de la waifu: {generarScore()}</h4>
      <Image
        fluid
        thumbnail
        height="100px"
        width="300px"
        roundedCircle
        src={url}
        alt="Waifu"
      />
    </div>
  );
};

export default Usuario;
