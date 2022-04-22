import React, { useState, useEffect } from "react";

import LoadingScreen from "./LoadingScreen";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
  useEffect(() => {
    const loadPokemon = () => {
      if (pokemonList.length < 1) {
        let pokemons = [];
        setAllPokemon()
          .then((pokemons = getAllPokemon()))
          .then(setPokemonList(pokemons))
          .then(setLoading(false));
      }
    };
    loadPokemon();
  }, [loading]);
  */

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
            pokemons[i].stats = data.stats;
          });
      }
      setPokemonList(pokemons);
      setLoading(false);
    }
    fetchMainData().then(fetchSecondaryData);
  }, []);

  return (
    <>
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
    </>
  );
};

export default PokemonPage;
