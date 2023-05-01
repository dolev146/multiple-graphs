import React, { useState } from "react";
import RealTimeGraph from "./RealTimeGraph";
import "./App.css";

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationToggle = () => {
    setIsAnimating((prevState) => !prevState);
  };

  return (
    <div>
      <span className={"flex"}>
        <RealTimeGraph isAnimating={isAnimating} title={"SPK"} />
        <RealTimeGraph isAnimating={isAnimating} title={"RAW"} />
        <RealTimeGraph isAnimating={isAnimating} title={"LFP"}/>
        <RealTimeGraph isAnimating={isAnimating} title={"SEG"} />
      </span>

      <button onClick={handleAnimationToggle}>
        {isAnimating ? "Stop Animation" : "Start Animation"}
      </button>
    </div>
  );
};

export default App;
