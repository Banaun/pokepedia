import React, { useState } from "react";
import PokemonModal from "./PokemonModal";

const PokemonCard = ({ pokemon }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setModalShow(true);
  };

  return (
    <>
      <div className="pokemoncard-container" onClick={handleClick}>
        <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.name}</p>
      </div>
      <PokemonModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        pokemon={pokemon}
      />
    </>
  );
};

export default PokemonCard;
