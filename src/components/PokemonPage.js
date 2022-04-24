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
    let pokemons = [" "];

    async function fetchMainData() {
      let url = "https://pokeapi.co/api/v2/pokemon/?limit=898";
      let response = await fetch(url);
      let responseAsJson = await response.json();
      for (let i = 0; i < responseAsJson.results.length; i++) {
        pokemons.push({
          id: i + 1,
          name: responseAsJson.results[i].name,
          description: "",
          height: "",
          weight: "",
          url: responseAsJson.results[i].url,
          types: [],
          abilities: [],
          moves: [],
          stats: [],
        });
      }
      fetchAllTypes();
    }

    async function fetchAllTypes() {
      for (let i = 0; i < 18; i++) {
        let url = "https://pokeapi.co/api/v2/type/" + (i + 1);
        let response = await fetch(url);
        let responseAsJson = await response.json();

        const pokemonInType = responseAsJson.pokemon;

        for (let j = 0; j < pokemonInType.length; j++) {
          const pokemonId = pokemonInType[j].pokemon.url
            .replace("https://pokeapi.co/api/v2/pokemon/", "")
            .replace("/", "");

          if (pokemonId <= pokemons.length) {
            pokemons[pokemonId].types.push(responseAsJson.name);
          }
        }
      }
      loadComplete();
    }

    function loadComplete() {
      pokemons.splice(0, 1);
      setPokemonList(pokemons);
      setLoading(false);
      console.log(pokemons);
      //console.log(po);
    }
    fetchMainData();
  }, []);

  return (
    <div className="pokemon-page-outer">
      {!loading ? (
        <div className="pokemon-page">
          <SearchBar />
          <div className="pokemon-list-container">
            {pokemonList.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                colors={typeColors}
              />
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
