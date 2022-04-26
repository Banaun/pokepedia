import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CloseButton from "react-bootstrap/CloseButton";

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
          <CloseButton aria-label="Hide" onClick={props.onHide} />
          <h4 className="modal-id">#{props.pokemon.id}</h4>
          <img
            className="modal-image"
            src={require("../static/sprites/art/" + props.pokemon.id + ".png")}
            alt={props.pokemon.name}
          />
          <div className="modal-name">
            <h2>{props.pokemon.name}</h2>
          </div>

          {/* TABS */}
          <div className="modal-tabs-container">
            <Tabs
              defaultActiveKey="about"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="about" title="About" className="modal-tab-content">
                <div className="modal-description">
                  <h5>Pokedex Entry</h5>
                  <p>{props.pokemon.description}</p>
                </div>
                <div className="modal-type">
                  <h5>Type</h5>
                  <div className="modal-type-children">
                    {props.pokemon.types[0] ? (
                      <p>{props.pokemon.types[0]}</p>
                    ) : (
                      <></>
                    )}
                    {props.pokemon.types[1] ? (
                      <p>{props.pokemon.types[1]}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="modal-height">
                  <h5>Height</h5>
                  <p>{props.pokemon.height}</p>
                </div>
                <div className="modal-weight">
                  <h5>Weight</h5>
                  <p>{props.pokemon.weight}</p>
                </div>
              </Tab>
              <Tab eventKey="stats" title="Stats"></Tab>
              <Tab eventKey="moves" title="Moves"></Tab>
              <Tab eventKey="evolution" title="Evolution" disabled></Tab>
              <Tab eventKey="location" title="Location" disabled></Tab>
            </Tabs>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PokemonModal;

/*
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
*/
