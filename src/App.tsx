import { Route, Routes } from "react-router-dom";
import PokemonByGeneration from "./pages/PokemonByGeneration";
import TypesList from "./pages/TypesList";
import PokemonByTypes from "./pages/PokemonByTypes";
import PokemonMap from "./pages/PokemonMap";
import AllPokemon from "./pages/AllPokemon";
import Pokemon from "./pages/Pokemon";
import Resistance from "./pages/Resistance";
import TypesResistance from "./pages/TypesResistance";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<PokemonMap />} />
        <Route path="/pokedex/map" element={<PokemonMap />} />
        <Route path="/pokedex/index/:area" element={<PokemonByGeneration />} />
        <Route path="/pokedex" element={<AllPokemon />} />
        <Route path="/pokedex/types" element={<TypesList />} />
        <Route path="/pokedex/types/:type" element={<PokemonByTypes />} />
        <Route path="/pokedex/:id" element={<Pokemon />} />
        <Route path="/resistance" element={<TypesResistance />} />
        <Route path="/resistance/:type" element={<Resistance />} />

        {/* Define more routes for other components */}
      </Routes>
    </div>
  );
}

export default App;
