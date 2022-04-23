import React, { useState, useEffect } from "react";

import LoadingScreen from "./LoadingScreen";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  const typeColors = {
    normal: "#BCBCAC",
    fighting: "#BC5442",
    flying: "#669AFF",
    poison: "#AB549A",
    ground: "#DEBC54",
    rock: "#BCAC66",
    bug: "#ABBC1C",
    ghost: "#6666BC",
    steel: "#ABACBC",
    fire: "#FF421C",
    water: "#2F9AFF",
    grass: "#78CD54",
    electric: "#FFCD30",
    psychic: "#FF549A",
    ice: "#78DEFF",
    dragon: "#7866EF",
    dark: "#785442",
    fairy: "#FFACFF",
    shadow: "#0E2E4C",
  };

  useEffect(() => {
    let pokemons = [];

    async function fetchMainData() {
      let url = "https://pokeapi.co/api/v2/pokemon/?limit=898";
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < data.results.length; i++) {
            pokemons.push({
              id: i + 1,
              name: data.results[i].name,
              url: data.results[i].url,
              image: "",
              modalImage: "",
              types: [],
              abilities: [],
              moves: [],
              stats: [],
            });
          }
        })
        .finally(() => {
          setPokemonList(pokemons);
        });
    }

    async function fetchSecondaryData() {
      for (let i = 0; i < pokemons.length; i++) {
        await fetch(pokemons[i].url)
          .then((response) => response.json())
          .then((data) => {
            pokemons[i].abilities = data.abilities;
            pokemons[i].moves = data.moves;
            pokemons[i].types = data.types;
            pokemons[i].image = data.sprites.front_default;
            pokemons[i].modalImage =
              data.sprites.other.dream_world.front_default;
            pokemons[i].stats = data.stats;
          });
      }
      setPokemonList(pokemons);
      setLoading(false);
    }
    fetchMainData().then(fetchSecondaryData);
  }, []);

  return (
    <div className="pokemon-page-outer">
      {!loading ? (
        <div className="pokemon-page">
          <SearchBar />
          <div className="pokemon-list-container">
            {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default PokemonPage;
