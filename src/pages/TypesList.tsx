import PokemonTypes from "../components/pokemon-types/PokemonTypes";
import Header from "../components/Header";

export default function TypesList() {
  return (
    <div className="world-page">
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
