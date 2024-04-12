import { Link } from "react-router-dom";
import "../../public/PokemonHollow.ttf";
import "../App.css";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <Link to="/pokedex/map">
        <h2
          className="website"
          style={{ fontFamily: "PokemonHollow, sans serif" }}
        >
          PokeVerse By Anthony D.
        </h2>
      </Link>
    </div>
  );
}
