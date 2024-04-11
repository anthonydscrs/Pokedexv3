import { Route, Routes } from "react-router-dom";
import PokemonByGeneration from "./pages/PokemonByGeneration";
import TypesList from "./pages/TypesList";
import PokemonByTypes from "./pages/PokemonByTypes";
import PokemonMap from "./pages/PokemonMap";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<PokemonMap />} />
        <Route path="/pokedex/map" element={<PokemonMap />} />
        <Route path="/pokedex/index/:area" element={<PokemonByGeneration />} />
        <Route path="/pokedex/types" element={<TypesList />} />
        <Route path="/pokedex/types/:type" element={<PokemonByTypes />} />
        <Route path="/pokedex/:id" element={<Pokemon />} />

        {/* Define more routes for other components */}
      </Routes>
    </div>
  );
}

export default App;
