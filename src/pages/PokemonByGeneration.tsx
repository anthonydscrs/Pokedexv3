import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PokemonList from "../components/pokemon-list/PokemonList";
import Loading from "../components/loading/Loading";

interface Pokemon {
  id: number;
  name: string;
}

const PokemonByGeneration: React.FC = () => {
  const { area } = useParams();
  const [pokemonsList, setPokemonsList] = useState<Pokemon[] | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/generation/${area}`)
      .then((query) => {
        if (query.data.length > 0) {
          setPokemonsList(query.data);
        } else navigate("/pokedex/no-results");
      })
      .catch((err) => {
        if (err.response && err.response.status === 404)
          navigate("/pokedex/not-found");
      })
      .finally(() => setIsLoaded(!isLoaded));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [area, navigate]);

  if (!pokemonsList) return <Loading />;
  return (
    <div className="pokemon-index-page">
      <NavBar />
      <Header />
      <div className="dummy-header" />
      <div className="index-content">
        <div className="index-header">
          <h3 className="index-title">{`Génération ${area}`}</h3>
        </div>
        <PokemonList pokemonsList={pokemonsList} />
      </div>
    </div>
  );
};

export default PokemonByGeneration;
