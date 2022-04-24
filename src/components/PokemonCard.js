import React, { useState } from "react";
import PokemonModal from "./PokemonModal";

const PokemonCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [pokemon, setPokemon] = useState(props.pokemon);

  const handleClick = (e) => {
    e.preventDefault();

    async function fetchPokemonInfo() {
      let updatedPokemon = pokemon;

      await fetch(props.pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          updatedPokemon.height = data.height / 10 + "m";
          updatedPokemon.weight = data.weight / 10 + "kg";
          updatedPokemon.abilities = data.abilities;
          updatedPokemon.moves = data.moves;
          updatedPokemon.stats = data.stats;
        });
      await fetch("https://pokeapi.co/api/v2/pokemon-species/" + pokemon.id)
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < data.flavor_text_entries.length; i++) {
            if (data.flavor_text_entries[i].language.name === "en") {
              updatedPokemon.description = data.flavor_text_entries[
                i
              ].flavor_text
                .replace(/\n/g, " ")
                .replace(/\f/g, " ");
              break;
            }
          }
        });

      return updatedPokemon;
      //loadComplete(updatedPokemon);
    }

    function loadComplete(updatedPokemon) {
      setPokemon(updatedPokemon);
      console.log(updatedPokemon);
    }

    fetchPokemonInfo()
      .then((updatedPokemon) => loadComplete(updatedPokemon))
      .finally(() => setModalShow(true));
  };

  return (
    <>
      <div className="pokemoncard-container" onClick={handleClick}>
        <img
          className="pokemon-image"
          src={require("../static/sprites/art/" + pokemon.id + ".png")}
          alt={pokemon.name}
        />
        <p className="pokemon-id">#{pokemon.id}</p>
        <p className="pokemon-name">{pokemon.name}</p>
        <div className="card-type-outer-container">
          {props.pokemon.types[0] ? (
            <div
              className="card-type-container1"
              style={{ background: props.colors[props.pokemon.types[0]] }}
            >
              {props.pokemon.types[0]}
            </div>
          ) : (
            <></>
          )}
          {props.pokemon.types[1] ? (
            <div
              className="card-type-container2"
              style={{ background: props.colors[props.pokemon.types[1]] }}
            >
              {props.pokemon.types[1]}
            </div>
          ) : (
            <></>
          )}
        </div>
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
