import PokemonTypes from "../components/pokemon-types/PokemonTypes";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function TypesList() {
  return (
    <div className="world-page">
      <NavBar />
      <Header />
      <div className="dummy-header" />
      <div className="areas-content">
        <div className="areas-header">
          <h3 className="areas-title">Pokemon Types</h3>
        </div>
        <PokemonTypes />
      </div>
    </div>
  );
}
