import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
          <img
            className="pokemon-modal-image"
            src={props.pokemon.image}
            alt={props.pokemon.name}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PokemonModal;
