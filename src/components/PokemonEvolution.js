import { FaArrowRight } from "react-icons/fa";

function PokemonEvolution(props) {
  return (
    <div className="modal-evolution-container">
      {props.pokemon.evolutionChain.first ? (
        <>
          <div className="evolution-pokemon-container">
            <div className="evolution-image-and-name">
              <img
                className="evolution-image"
                src={require("../static/sprites/standard/" +
                  props.pokemon.evolutionChain.first.id +
                  ".png")}
                alt={props.pokemon.evolutionChain.first.name}
              />
              <p>{props.pokemon.evolutionChain.first.name}</p>
            </div>
          </div>
          <div className="evolution-arrow-level-container">
            {props.pokemon.evolutionChain.second ? (
              <>
                <FaArrowRight />
                {props.pokemon.evolutionChain.second.level !== null ? (
                  <p>{props.pokemon.evolutionChain.second.level}</p>
                ) : props.pokemon.evolutionChain.second.item !== null ? (
                  <p>{props.pokemon.evolutionChain.second.item.name}</p>
                ) : props.pokemon.evolutionChain.second.heldItem !== null ? (
                  <p>{props.pokemon.evolutionChain.second.heldItem.name}</p>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
      {props.pokemon.evolutionChain.second ? (
        <>
          <div className="evolution-pokemon-container">
            <div className="evolution-image-and-name">
              <img
                className="evolution-image"
                src={require("../static/sprites/standard/" +
                  props.pokemon.evolutionChain.second.id +
                  ".png")}
                alt={props.pokemon.evolutionChain.second.name}
              />
              <p>{props.pokemon.evolutionChain.second.name}</p>
            </div>
          </div>
          <div className="evolution-arrow-level-container">
            {props.pokemon.evolutionChain.third ? (
              <>
                <FaArrowRight />
                {props.pokemon.evolutionChain.third.level !== null ? (
                  <p>{props.pokemon.evolutionChain.third.level}</p>
                ) : props.pokemon.evolutionChain.third.item !== null ? (
                  <p>{props.pokemon.evolutionChain.third.item.name}</p>
                ) : props.pokemon.evolutionChain.third.heldItem !== null ? (
                  <p>{props.pokemon.evolutionChain.third.heldItem.name}</p>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
      {props.pokemon.evolutionChain.third ? (
        <div className="evolution-pokemon-container">
          <div className="evolution-image-and-name">
            <img
              className="evolution-image"
              src={require("../static/sprites/standard/" +
                props.pokemon.evolutionChain.third.id +
                ".png")}
              alt={props.pokemon.evolutionChain.third.name}
            />
            <p>{props.pokemon.evolutionChain.third.name}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PokemonEvolution;
