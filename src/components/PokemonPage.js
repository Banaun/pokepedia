import React, { useState, useEffect } from "react";

import LoadingScreen from "./LoadingScreen";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [filteredView, setFilteredView] = useState(Boolean);

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
          evolutionUrl: "",
          evolutionChain: {},
          name: responseAsJson.results[i].name,
          description: "",
          height: "",
          weight: "",
          url: responseAsJson.results[i].url,
          types: [],
          abilities: [],
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
    }
    fetchMainData();
  }, []);

  const sortBySearch = (searchInput) => {
    console.log(searchInput);
    const result = pokemonList.filter((pokemon) => {
      if (!searchInput) {
        return true;
      }
      if (
        pokemon.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        pokemon.id === Number(searchInput)
      ) {
        return true;
      }
      return false;
    });

    if (result.length === pokemonList.length) {
      setFilteredView(false);
    } else if (result.length > 0 && result.length !== pokemonList.length) {
      setFilteredView(true);
      setSearchResult(result);
    } else if (searchInput.length > 0) {
      setFilteredView(true);
      setSearchResult(searchInput);
    } else {
      setSearchResult(searchInput);
      setFilteredView(false);
    }
  };

  return (
    <div className="pokemon-page-outer">
      {!loading ? (
        <div className="pokemon-page">
          <SearchBar sortBySearch={sortBySearch} />
          {filteredView === false ? (
            <div className="pokemon-list-container">
              {pokemonList.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  pokemon={pokemon}
                  colors={typeColors}
                />
              ))}
            </div>
          ) : typeof searchResult === "string" && searchResult !== "" ? (
            <div className="pokemon-list-container">
              <div className="no-result-container">
                <h2>No results found</h2>
              </div>
            </div>
          ) : (
            <div className="pokemon-list-container">
              {searchResult.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  pokemon={pokemon}
                  colors={typeColors}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default PokemonPage;
