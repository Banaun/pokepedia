import React, { useState } from "react";
import PokemonModal from "./PokemonModal";

const PokemonCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [pokemon, setPokemon] = useState(props.pokemon);
  const [borderStyle, setBorderStyle] = useState({});
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setModalShow(true);
    async function fetchPokemonInfo() {
      if (!clicked) {
        let updatedPokemon = pokemon;

        //Add height, weight, abilities, moves and stats to pokemon
        await fetch(props.pokemon.url)
          .then((response) => response.json())
          .then((data) => {
            updatedPokemon.height = data.height / 10 + "m";
            updatedPokemon.weight = data.weight / 10 + "kg";
            updatedPokemon.abilities = data.abilities;
            updatedPokemon.stats = data.stats;
            return data.abilities;
          })

          //Add description to abilities
          .then(async (abilities) => {
            for (const [index, ability] of abilities.entries()) {
              await fetch(ability.ability.url)
                .then((response) => response.json())
                .then((data) => {
                  for (let i = 0; i < data.flavor_text_entries.length; i++) {
                    if (
                      data.flavor_text_entries[i].language.name === "en" &&
                      data.flavor_text_entries[i].version_group.name ===
                        "sword-shield"
                    ) {
                      updatedPokemon.abilities[index].ability.description =
                        data.flavor_text_entries[i].flavor_text
                          .replace(/\n/g, " ")
                          .replace(/\f/g, " ");
                      break;
                    }
                  }
                });
            }
          });

        //Add description to pokemon
        await fetch("https://pokeapi.co/api/v2/pokemon-species/" + pokemon.id)
          .then((response) => response.json())
          .then((data) => {
            updatedPokemon.evolutionUrl = data.evolution_chain.url;
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

        //Add evolutionchain to pokemon
        await fetch(updatedPokemon.evolutionUrl)
          .then((response) => response.json())
          .then((data) => {
            if (Object.keys(updatedPokemon.evolutionChain).length === 0) {
              if (data.chain.evolves_to.length > 0) {
                updatedPokemon.evolutionChain.first = {
                  id: data.chain.species.url.split("/")[6],
                  name: data.chain.species.name,
                };
                if (data.chain.evolves_to[0].evolution_details.length !== 0) {
                  updatedPokemon.evolutionChain.second = {
                    id: data.chain.evolves_to[0].species.url.split("/")[6],
                    name: data.chain.evolves_to[0].species.name,
                    level:
                      data.chain.evolves_to[0].evolution_details[0].min_level,
                    item: data.chain.evolves_to[0].evolution_details[0].item,
                    heldItem:
                      data.chain.evolves_to[0].evolution_details[0].held_item,
                    trigger:
                      data.chain.evolves_to[0].evolution_details[0].trigger
                        .name,
                  };
                } else {
                  updatedPokemon.evolutionChain.second = {
                    id: data.chain.evolves_to[0].species.url.split("/")[6],
                    name: data.chain.evolves_to[0].species.name,
                    level: null,
                    item: null,
                    heldItem: null,
                    trigger: "",
                  };
                }
              }
              if (data.chain.evolves_to[0]) {
                if (data.chain.evolves_to[0].evolves_to.length > 0) {
                  if (
                    data.chain.evolves_to[0].evolves_to[0].evolution_details
                      .length !== 0
                  ) {
                    updatedPokemon.evolutionChain.third = {
                      id: data.chain.evolves_to[0].evolves_to[0].species.url.split(
                        "/"
                      )[6],
                      name: data.chain.evolves_to[0].evolves_to[0].species.name,
                      level:
                        data.chain.evolves_to[0].evolves_to[0]
                          .evolution_details[0].min_level,
                      item: data.chain.evolves_to[0].evolves_to[0]
                        .evolution_details[0].item,
                      heldItem:
                        data.chain.evolves_to[0].evolves_to[0]
                          .evolution_details[0].held_item,
                      trigger:
                        data.chain.evolves_to[0].evolves_to[0]
                          .evolution_details[0].trigger.name,
                    };
                  } else {
                    updatedPokemon.evolutionChain.third = {
                      id: data.chain.evolves_to[0].evolves_to[0].species.url.split(
                        "/"
                      )[6],
                      name: data.chain.evolves_to[0].evolves_to[0].species.name,
                      level: null,
                      item: null,
                      heldItem: null,
                      trigger: "",
                    };
                  }
                }
              }
            }
          });

        //Add location to pokemon
        await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + pokemon.id + "/encounters"
        )
          .then((response) => response.json())
          .then((data) => {
            if (Object.keys(updatedPokemon.location).length === 0) {
              for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].version_details.length; j++) {
                  updatedPokemon.location[i + j] = {
                    name: data[i].location_area.name,
                    version: data[i].version_details[j].version.name,
                  };
                }
              }
            }
          });

        return updatedPokemon;
      }
      return pokemon;
    }

    function loadComplete(updatedPokemon) {
      setPokemon(updatedPokemon);
      setClicked(true);
      console.log(updatedPokemon);
    }

    fetchPokemonInfo()
      .then((updatedPokemon) => loadComplete(updatedPokemon))
      .finally(() => setLoading(false));
  };

  const handleMouseOver = () => {
    setBorderStyle({
      border: "2px solid " + props.colors[props.pokemon.types[0]],
    });
  };

  const handleMouseLeave = () => {
    setBorderStyle({
      border: "none",
    });
  };

  return (
    <>
      <div
        className="pokemoncard-container"
        style={borderStyle}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
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
        loading={loading}
      />
    </>
  );
};

export default PokemonCard;
