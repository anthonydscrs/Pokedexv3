import { useState } from "react";
import { Link } from "react-router-dom";
import metamorph from "../assets/meta.png";
import unknown from "../assets/unknown.png";
import poke from "../assets/poke.png";
import map from "../assets/oldmap.png";
import pokedex from "../assets/pokedex.png";
import bags from "../assets/bags.png";
import "../App.css";

export default function Header() {
  const [helpIsActive, setHelpIsActive] = useState<boolean>(false);
  const [randomId, setRandomId] = useState<number>(
    Math.floor(Math.random() * 898)
  );
  function handleRandom() {
    const randomPokemon = Math.floor(Math.random() * 898);
    setRandomId(randomPokemon);
  }

  return (
    <div className="header-container">
      <div>
        <Link to="/pokedex/map">
          <div className="poke_box">
            <div className="pokeball">
              <div className="pokeball__button"></div>
            </div>
          </div>
        </Link>
      </div>
      <div className="left-links">
        <Link to={`/pokedex/${randomId}`}>
          <img src={poke} className="back-button" onClick={handleRandom} />
        </Link>
        <Link to="/pokedex/map">
          <img src={map} className="world-button" />
        </Link>
        <Link to="/pokedex">
          <img src={pokedex} className="index-button" />
        </Link>
      </div>

      <div className="right-links">
        <Link to="/pokedex/types">
          <img src={metamorph} className="id-button" />
        </Link>
        <Link to="/resistance">
          <img src={bags} className="random-button" />
        </Link>
        <img
          src={unknown}
          className="help-button"
          onClick={() => {
            setHelpIsActive(!helpIsActive);
          }}
        />
      </div>
    </div>
  );
}
