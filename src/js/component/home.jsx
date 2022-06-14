import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [color, setColor] = useState("");

  const cycleColor = () => {
    if (color == "red") {
      setColor("yellow");
    } else if (color == "yellow") {
      setColor("green");
    } else setColor("red");
  };

  return (
    <>
      <div className="rod"></div>
      <div className="lightbox">
        <div
          className={color == "red" ? "redLit" : "red"}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={color == "yellow" ? "yellowLit" : "yellow"}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={color == "green" ? "greenLit" : "green"}
          onClick={() => setColor("green")}
        ></div>
      </div>
      <button onClick={() => cycleColor()}>Change Light</button>
    </>
  );
};

export default Home;
