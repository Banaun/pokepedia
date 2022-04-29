function PokemonStats(props) {
  return (
    <div className="modal-stats-container">
      <div className="stat-container">
        <h6>HP</h6>
        <div className="stat-bar-outer">
          {props.pokemon.stats[0].base_stat > 10 ? (
            <div
              className="bar hp"
              style={{
                width: props.pokemon.stats[0].base_stat / 2.5 + "%",
              }}
            >
              <span>{props.pokemon.stats[0].base_stat}</span>
            </div>
          ) : (
            <div
              className="bar hp"
              style={{
                width: props.pokemon.stats[0].base_stat / 2.5 + "%",
              }}
            >
              <span
                style={{ position: "relative", right: "-20px", color: "black" }}
              >
                {props.pokemon.stats[0].base_stat}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="stat-container">
        <h6>ATK</h6>
        <div className="stat-bar-outer">
          {props.pokemon.stats[1].base_stat > 10 ? (
            <div
              className="bar attack"
              style={{ width: props.pokemon.stats[1].base_stat / 2.5 + "%" }}
            >
              <span>{props.pokemon.stats[1].base_stat}</span>
            </div>
          ) : (
            <div
              className="bar attack"
              style={{
                width: props.pokemon.stats[1].base_stat / 2.5 + "%",
              }}
            >
              <span style={{ right: "-20px", color: "black" }}>
                {props.pokemon.stats[1].base_stat}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="stat-container">
        <h6>DEF</h6>
        <div className="stat-bar-outer">
          {props.pokemon.stats[2].base_stat > 10 ? (
            <div
              className="bar defense"
              style={{ width: props.pokemon.stats[2].base_stat / 2.5 + "%" }}
            >
              <span>{props.pokemon.stats[2].base_stat}</span>
            </div>
          ) : (
            <div
              className="bar defense"
              style={{
                width: props.pokemon.stats[2].base_stat / 2.5 + "%",
              }}
            >
              <span style={{ right: "-20px", color: "black" }}>
                {props.pokemon.stats[2].base_stat}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="stat-container">
        <h6>SPA</h6>
        <div className="stat-bar-outer">
          {props.pokemon.stats[3].base_stat > 10 ? (
            <div
              className="bar special-attack"
              style={{ width: props.pokemon.stats[3].base_stat / 2.5 + "%" }}
            >
              <span>{props.pokemon.stats[3].base_stat}</span>
            </div>
          ) : (
            <div
              className="bar special-attack"
              style={{
                width: props.pokemon.stats[3].base_stat / 2.5 + "%",
              }}
            >
              <span style={{ right: "-20px", color: "black" }}>
                {props.pokemon.stats[3].base_stat}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="stat-container">
        <h6>SPD</h6>
        <div className="stat-bar-outer">
          {props.pokemon.stats[4].base_stat > 10 ? (
            <div
              className="bar special-defense"
              style={{ width: props.pokemon.stats[4].base_stat / 2.5 + "%" }}
            >
              <span>{props.pokemon.stats[4].base_stat}</span>
            </div>
          ) : (
            <div
              className="bar special-defense"
              style={{
                width: props.pokemon.stats[4].base_stat / 2.5 + "%",
              }}
            >
              <span style={{ right: "-20px", color: "black" }}>
                {props.pokemon.stats[4].base_stat}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="stat-container">
        <h6>SPE</h6>
        <div className="stat-bar-outer">
          {props.pokemon.stats[5].base_stat > 10 ? (
            <div
              className="bar speed"
              style={{ width: props.pokemon.stats[5].base_stat / 2.5 + "%" }}
            >
              <span>{props.pokemon.stats[5].base_stat}</span>
            </div>
          ) : (
            <div
              className="bar speed"
              style={{
                width: props.pokemon.stats[5].base_stat / 2.5 + "%",
              }}
            >
              <span style={{ right: "-20px", color: "black" }}>
                {props.pokemon.stats[5].base_stat}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonStats;
