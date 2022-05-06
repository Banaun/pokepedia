import React from "react";

const LoadingPokemonInfo = () => {
  return (
    <div className="loading-pokemon-container">
      <img
        src={require("../static/pokeball-black-icon.jpg")}
        alt="pokeball"
        className="loading-pokeball"
      ></img>
    </div>
  );
};

export default LoadingPokemonInfo;
