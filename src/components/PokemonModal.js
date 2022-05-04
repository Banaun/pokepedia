import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CloseButton from "react-bootstrap/CloseButton";
import PokemonAbout from "./PokemonAbout";
import PokemonStats from "./PokemonStats";
import PokemonAbilities from "./PokemonAbilities";
import PokemonEvolution from "./PokemonEvolution";
import PokemonLocation from "./PokemonLocation";

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
              <Tab eventKey="about" title="About">
                <PokemonAbout pokemon={props.pokemon} />
              </Tab>
              <Tab eventKey="stats" title="Stats">
                <PokemonStats pokemon={props.pokemon} />
              </Tab>
              <Tab eventKey="abilities" title="Abilities">
                <PokemonAbilities pokemon={props.pokemon} />
              </Tab>
              {Object.keys(props.pokemon.evolutionChain).length !== 0 ? (
                <Tab eventKey="evolution" title="Evolution">
                  <PokemonEvolution pokemon={props.pokemon} />
                </Tab>
              ) : (
                <Tab eventKey="evolution" title="Evolution" disabled></Tab>
              )}
              {Object.keys(props.pokemon.location).length !== 0 ? (
                <Tab eventKey="location" title="Location">
                  <PokemonLocation pokemon={props.pokemon} />
                </Tab>
              ) : (
                <Tab eventKey="location" title="Location" disabled></Tab>
              )}
            </Tabs>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PokemonModal;
