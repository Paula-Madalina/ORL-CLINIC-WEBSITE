import React, { useState } from "react";
import "./After.css";
import Ortodontie from "../../assets/ortodontie.png";
import Albire from "../../assets/albire.png";
import Parodontologie from "../../assets/parodontologie.png";

const images = {
  implanturi: {
    before: Ortodontie,
    after: Ortodontie,
  },
  aparate: {
    before: "/images/aparate-before.jpg",
    after: "/images/aparate-after.jpg",
  },
  fatete: {
    before: Albire,
    after: Albire,
  },
};

const After = () => {
  const [selected, setSelected] = useState("fatete");

  return (
    <div className="before-after-container">
      <h2>Am promis să ne îngrijim pacienții...</h2>
      <div className="buttons">
        {Object.keys(images).map((key) => (
          <button
            key={key}
            className={selected === key ? "active" : ""}
            onClick={() => setSelected(key)}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="image-container">
        <img src={images[selected].before} alt="Before" className="image" />
        <img src={images[selected].after} alt="After" className="image" />
      </div>

      <div className="labels">
        <span className="before-label">Before</span>
        <span className="after-label">After</span>
      </div>
    </div>
  );
};

export default After;
