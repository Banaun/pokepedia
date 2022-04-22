import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemoncard-container">
      <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
