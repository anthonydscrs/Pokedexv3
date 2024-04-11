import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PokemonList from "../components/pokemon-list/PokemonList";

interface Pokemon {
  id: number;
  name: string;
}

const PokemonIndex: React.FC = () => {
  const { area } = useParams();
  const [pokemonsList, setPokemonsList] = useState<Pokemon[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
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
      });
  }, [area, navigate]);

  if (!pokemonsList) return null;
  return (
    <div className="pokemon-index-page">
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

export default PokemonIndex;
