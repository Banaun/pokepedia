import React from "react";

import { getAllPokemon, setAllPokemon } from "../api/DataAccess";
import LoadingScreen from "./LoadingScreen";

export default class PokemonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      loadingDone: false,
    };

    setTimeout(() => {
      this.loadPokemon();
    }, 2000);
  }

  loadPokemon = () => {
    setAllPokemon()
      .then((this.state.pokemonList = getAllPokemon()))
      .then(console.log(this.state.pokemonList))
      .then(
        this.setState({
          loadingDone: true,
        })
      );
  };

  render() {
    return <>{this.state.loadingDone ? <div></div> : <LoadingScreen />}</>;
  }
}

class PokemonCard extends React.Component {
  renderPokemon(i) {
    return <Pokemon pokemon={i} />;
  }
}

function Pokemon(pokemon) {
  return <img className="pokemon-image" src={pokemon.url} />;
}
