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
              <Tab
                eventKey="about"
                title="About"
                className="modal-tab-about-content"
              >
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
              </Tab>
              <Tab
                eventKey="stats"
                title="Stats"
                className="modal-tab-stats-content"
              >
                <div className="modal-stats-container">
                  <div className="hp-container">
                    <h5>HP</h5>
                    {props.pokemon.stats[0] ? (
                      <p>{props.pokemon.stats[0].base_stat}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="attack-container">
                    <h5>Attack</h5>
                    {props.pokemon.stats[1] ? (
                      <p>{props.pokemon.stats[1].base_stat}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="defense-container">
                    <h5>Defense</h5>
                    {props.pokemon.stats[2] ? (
                      <p>{props.pokemon.stats[2].base_stat}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="special-attack-container">
                    <h5>Special Attack</h5>
                    {props.pokemon.stats[3] ? (
                      <p>{props.pokemon.stats[3].base_stat}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="special-defense-container">
                    <h5>Special Defense</h5>
                    {props.pokemon.stats[4] ? (
                      <p>{props.pokemon.stats[4].base_stat}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="speed-container">
                    <h5>Speed</h5>
                    {props.pokemon.stats[5] ? (
                      <p>{props.pokemon.stats[5].base_stat}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </Tab>
              <Tab eventKey="abilities" title="Abilities"></Tab>
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
