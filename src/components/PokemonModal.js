import Modal from "react-bootstrap/Modal";

function PokemonModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="modal-container">
          <h4 className="modal-id">#{props.pokemon.id}</h4>
          <img
            className="modal-image"
            src={require("../static/sprites/art/" + props.pokemon.id + ".png")}
            alt={props.pokemon.name}
          />
          <div className="modal-name">
            <h2>{props.pokemon.name}</h2>
          </div>
          <div className="modal-description">
            <h4>About</h4>
            <p>{props.pokemon.description}</p>
          </div>
          <div className="modal-type">
            <h4>Type</h4>
            <div className="modal-type-children">
              {props.pokemon.types[0] ? <p>{props.pokemon.types[0]}</p> : <></>}
              {props.pokemon.types[1] ? <p>{props.pokemon.types[1]}</p> : <></>}
            </div>
          </div>
          <div className="modal-height">
            <h4>Height</h4>
            <p>{props.pokemon.height}</p>
          </div>
          <div className="modal-weight">
            <h4>Weight</h4>
            <p>{props.pokemon.weight}</p>
          </div>
          <div className="modal-abilities">
            <h4>Abilities</h4>
            <div className="modal-abilities-children">
              {props.pokemon.abilities[0] ? (
                <p>{props.pokemon.abilities[0].ability.name}</p>
              ) : (
                <></>
              )}
              {props.pokemon.abilities[1] ? (
                <p>{props.pokemon.abilities[1].ability.name}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PokemonModal;
