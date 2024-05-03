import PokemonTypes from "../components/pokemon-types/PokemonTypesResistance";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function TypesResistance() {
  return (
    <div className="world-page">
      <NavBar />
      <Header />
      <div className="dummy-header" />
      <div className="areas-content">
        <div className="areas-header">
          <h3 className="areas-title">Pokemon résistance par types</h3>
        </div>
        <PokemonTypes />
      </div>
    </div>
  );
}
