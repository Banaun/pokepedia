function PokemonAbout(props) {
  return (
    <>
      <div className="modal-description">
        <h5>Pokedex Entry</h5>
        <p>{props.pokemon.description}</p>
      </div>
      <div className="modal-type">
        <h5>Type</h5>
        <div className="modal-type-children">
          {props.pokemon.types[0] ? <p>{props.pokemon.types[0]}</p> : <></>}
          {props.pokemon.types[1] ? <p>{props.pokemon.types[1]}</p> : <></>}
        </div>
      </div>
      <div className="modal-height-weight-container">
        <div className="modal-height">
          <h5>Height</h5>
          <p>{props.pokemon.height}</p>
        </div>
        <div className="modal-weight">
          <h5>Weight</h5>
          <p>{props.pokemon.weight}</p>
        </div>
      </div>
    </>
  );
}

export default PokemonAbout;
