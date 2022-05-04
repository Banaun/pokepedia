import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

function PokemonLocation(props) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  const handleClick = (gen) => {
    if (gen === "gen1") {
      setOpen1(!open1);
      setOpen2(false);
      setOpen3(false);
      setOpen4(false);
      setOpen5(false);
      setOpen6(false);
      setOpen7(false);
      setOpen8(false);
    }
    if (gen === "gen2") {
      setOpen2(!open2);
      setOpen1(false);
      setOpen3(false);
      setOpen4(false);
      setOpen5(false);
      setOpen6(false);
      setOpen7(false);
      setOpen8(false);
    }
    if (gen === "gen3") {
      setOpen3(!open3);
      setOpen1(false);
      setOpen2(false);
      setOpen4(false);
      setOpen5(false);
      setOpen6(false);
      setOpen7(false);
      setOpen8(false);
    }
    if (gen === "gen4") {
      setOpen4(!open4);
      setOpen1(false);
      setOpen2(false);
      setOpen3(false);
      setOpen5(false);
      setOpen6(false);
      setOpen7(false);
      setOpen8(false);
    }
    if (gen === "gen5") {
      setOpen5(!open5);
      setOpen1(false);
      setOpen2(false);
      setOpen3(false);
      setOpen4(false);
      setOpen6(false);
      setOpen7(false);
      setOpen8(false);
    }
    if (gen === "gen6") {
      setOpen6(!open6);
      setOpen1(false);
      setOpen2(false);
      setOpen3(false);
      setOpen4(false);
      setOpen5(false);
      setOpen7(false);
      setOpen8(false);
    }
    if (gen === "gen7") {
      setOpen7(!open7);
      setOpen1(false);
      setOpen2(false);
      setOpen3(false);
      setOpen4(false);
      setOpen5(false);
      setOpen6(false);
      setOpen8(false);
    }
    if (gen === "gen8") {
      setOpen8(!open8);
      setOpen1(false);
      setOpen2(false);
      setOpen3(false);
      setOpen4(false);
      setOpen5(false);
      setOpen6(false);
      setOpen7(false);
    }
  };

  const versions = {
    genI: ["red", "green", "blue", "yellow"],
    genII: ["gold", "silver", "crystal"],
    genIII: [
      "ruby",
      "sapphire",
      "emerald",
      "firered",
      "leafgreen",
      "colosseum",
      "xd",
    ],
    genIV: ["diamond", "pearl", "platinum", "heartgold", "soulsilver"],
    genV: ["black", "white", "black-2", "white-2"],
    genVI: ["x", "y", "omega", "ruby", "alpha", "sapphire"],
    genVII: [
      "sun",
      "moon",
      "ultra-sun",
      "ultra-moon",
      "lets-go-pikachu",
      "lets-go-eevee",
    ],
    genVIII: ["sword", "shield"],
  };

  const locations = {};

  for (let key in props.pokemon.location) {
    if (versions.genI.includes(props.pokemon.location[key].version)) {
      if ("genI" in locations) {
        if (
          !locations.genI.includes(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          )
        ) {
          locations.genI.push(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          );
        }
      } else {
        locations.genI = [
          props.pokemon.location[key].name
            .replace(/-/gi, " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        ];
      }
    }
    if (versions.genII.includes(props.pokemon.location[key].version)) {
      if ("genII" in locations) {
        if (
          !locations.genII.includes(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          )
        ) {
          locations.genII.push(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          );
        }
      } else {
        locations.genII = [
          props.pokemon.location[key].name
            .replace(/-/gi, " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        ];
      }
    }
    if (versions.genIII.includes(props.pokemon.location[key].version)) {
      if ("genIII" in locations) {
        if (
          !locations.genIII.includes(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          )
        ) {
          locations.genIII.push(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          );
        }
      } else {
        locations.genIII = [
          props.pokemon.location[key].name
            .replace(/-/gi, " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        ];
      }
    }
    if (versions.genIV.includes(props.pokemon.location[key].version)) {
      if ("genIV" in locations) {
        if (
          !locations.genIV.includes(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          )
        ) {
          locations.genIV.push(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          );
        }
      } else {
        locations.genIV = [
          props.pokemon.location[key].name
            .replace(/-/gi, " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        ];
      }
    }
    if (versions.genV.includes(props.pokemon.location[key].version)) {
      if ("genV" in locations) {
        if (
          !locations.genV.includes(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          )
        ) {
          locations.genV.push(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          );
        }
      } else {
        locations.genV = [
          props.pokemon.location[key].name
            .replace(/-/gi, " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        ];
      }
    }
    if (versions.genVI.includes(props.pokemon.location[key].version)) {
      if ("genVI" in locations) {
        if (
          !locations.genVI.includes(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          )
        ) {
          locations.genVI.push(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          );
        }
      } else {
        locations.genVI = [
          props.pokemon.location[key].name
            .replace(/-/gi, " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        ];
      }
    }
    if (versions.genVII.includes(props.pokemon.location[key].version)) {
      if ("genVII" in locations) {
        if (
          !locations.genVII.includes(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          )
        ) {
          locations.genVII.push(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          );
        }
      } else {
        locations.genVII = [
          props.pokemon.location[key].name
            .replace(/-/gi, " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        ];
      }
    }
    if (versions.genVIII.includes(props.pokemon.location[key].version)) {
      if ("genVIII" in locations) {
        if (
          !locations.genVIII.includes(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          )
        ) {
          locations.genVIII.push(
            props.pokemon.location[key].name
              .replace(/-/gi, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
          );
        }
      } else {
        locations.genVIII = [
          props.pokemon.location[key].name
            .replace(/-/gi, " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        ];
      }
    }
  }

  return (
    <div className="modal-location-container">
      <div className="location-button-container">
        <Button
          onClick={() => handleClick("gen1")}
          variant="outline-secondary"
          size="sm"
          aria-controls="collapse-gen1"
          aria-expanded={open1}
        >
          Gen I
        </Button>
        <Button
          onClick={() => handleClick("gen2")}
          variant="outline-secondary"
          size="sm"
          aria-controls="collapse-gen2"
          aria-expanded={open2}
        >
          Gen II
        </Button>
        <Button
          onClick={() => handleClick("gen3")}
          variant="outline-secondary"
          size="sm"
          aria-controls="collapse-gen3"
          aria-expanded={open3}
        >
          Gen III
        </Button>
        <Button
          onClick={() => handleClick("gen4")}
          variant="outline-secondary"
          size="sm"
          aria-controls="collapse-gen4"
          aria-expanded={open4}
        >
          Gen IV
        </Button>
        <Button
          onClick={() => handleClick("gen5")}
          variant="outline-secondary"
          size="sm"
          aria-controls="collapse-gen5"
          aria-expanded={open5}
        >
          Gen V
        </Button>
        <Button
          onClick={() => handleClick("gen6")}
          variant="outline-secondary"
          size="sm"
          aria-controls="collapse-gen6"
          aria-expanded={open6}
        >
          Gen VI
        </Button>
        <Button
          onClick={() => handleClick("gen7")}
          variant="outline-secondary"
          size="sm"
          aria-controls="collapse-gen7"
          aria-expanded={open7}
        >
          Gen VII
        </Button>
        <Button
          onClick={() => handleClick("gen8")}
          variant="outline-secondary"
          size="sm"
          aria-controls="collapse-gen8"
          aria-expanded={open8}
        >
          Gen VIII
        </Button>
      </div>
      <div className="location-collapse-container">
        <Collapse in={open1}>
          <div id="collapse-gen1" className="collapse-inner">
            {locations.genI ? (
              locations.genI.map((item, i) => <p key={i}>{item}</p>)
            ) : (
              <h4>No locations</h4>
            )}
          </div>
        </Collapse>
        <Collapse in={open2}>
          <div id="collapse-gen2" className="collapse-inner">
            {locations.genII ? (
              locations.genII.map((item, i) => <p key={i}>{item}</p>)
            ) : (
              <h4>No locations</h4>
            )}
          </div>
        </Collapse>
        <Collapse in={open3}>
          <div id="collapse-gen3" className="collapse-inner">
            {locations.genIII ? (
              locations.genIII.map((item, i) => <p key={i}>{item}</p>)
            ) : (
              <h4>No locations</h4>
            )}
          </div>
        </Collapse>
        <Collapse in={open4}>
          <div id="collapse-gen4" className="collapse-inner">
            {locations.genIV ? (
              locations.genIV.map((item, i) => <p key={i}>{item}</p>)
            ) : (
              <h4>No locations</h4>
            )}
          </div>
        </Collapse>
        <Collapse in={open5}>
          <div id="collapse-gen5" className="collapse-inner">
            {locations.genV ? (
              locations.genV.map((item, i) => <p key={i}>{item}</p>)
            ) : (
              <h4>No locations</h4>
            )}
          </div>
        </Collapse>
        <Collapse in={open6}>
          <div id="collapse-gen6" className="collapse-inner">
            {locations.genVI ? (
              locations.genVI.map((item, i) => <p key={i}>{item}</p>)
            ) : (
              <h4>No locations</h4>
            )}
          </div>
        </Collapse>
        <Collapse in={open7}>
          <div id="collapse-gen7" className="collapse-inner">
            {locations.genVII ? (
              locations.genVII.map((item, i) => <p key={i}>{item}</p>)
            ) : (
              <h4>No locations</h4>
            )}
          </div>
        </Collapse>
        <Collapse in={open8}>
          <div id="collapse-gen8" className="collapse-inner">
            {locations.genVIII ? (
              locations.genVIII.map((item, i) => <p key={i}>{item}</p>)
            ) : (
              <h4>No locations</h4>
            )}
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default PokemonLocation;
