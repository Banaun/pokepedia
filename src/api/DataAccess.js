const pokemonArr = [];

export async function setAllPokemon() {
  let url = "https://pokeapi.co/api/v2/pokemon/?limit=898";
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        pokemonArr.push({
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
    });
  setPokemonTypes();
}

async function setPokemonTypes() {
  for (let i = 0; i < pokemonArr.length; i++) {
    await fetch(pokemonArr[i].url)
      .then((response) => response.json())
      .then((data) => {
        pokemonArr[i].abilities = data.abilities;
        pokemonArr[i].moves = data.moves;
        pokemonArr[i].types = data.types;
        pokemonArr[i].image = data.sprites.front_default;
        pokemonArr[i].stats = data.stats;
      });
  }
}

export function getAllPokemon() {
  return pokemonArr;
}
