import React from "react";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img
        src={require("../static/pokeball-black-icon.jpg")}
        alt="pokeball"
        className="loading-pokeball"
      ></img>
    </div>
  );
};

export default LoadingScreen;
