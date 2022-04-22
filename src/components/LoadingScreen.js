import React from "react";

function LoadingScreen() {
  //let loadingClassName = "loading-container";

  return (
    <div className="loading-container">
      <img
        src={require("../static/pokeball-icon.png")}
        alt="pokeball"
        className="loading-pokeball"
      ></img>
    </div>
  );
}

export default LoadingScreen;
