function PokemonAbilities(props) {
  return (
    <div className="modal-abilities-container">
      {props.pokemon.abilities[0] ? (
        <div className="ability-container">
          {!props.pokemon.abilities[0].is_hidden ? (
            <h5>{props.pokemon.abilities[0].ability.name}</h5>
          ) : (
            <h5>{props.pokemon.abilities[0].ability.name + " (hidden)"}</h5>
          )}
          <p>{props.pokemon.abilities[0].ability.description}</p>
        </div>
      ) : (
        <></>
      )}
      {props.pokemon.abilities[1] ? (
        <div className="ability-container">
          {!props.pokemon.abilities[1].is_hidden ? (
            <h5>{props.pokemon.abilities[1].ability.name}</h5>
          ) : (
            <h5>{props.pokemon.abilities[1].ability.name + " (hidden)"}</h5>
          )}
          <p>{props.pokemon.abilities[1].ability.description}</p>
        </div>
      ) : (
        <></>
      )}
      {props.pokemon.abilities[2] ? (
        <div className="ability-container">
          {!props.pokemon.abilities[2].is_hidden ? (
            <h5>{props.pokemon.abilities[2].ability.name}</h5>
          ) : (
            <h5>{props.pokemon.abilities[2].ability.name + " (hidden)"}</h5>
          )}
          <p>{props.pokemon.abilities[2].ability.description}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PokemonAbilities;
