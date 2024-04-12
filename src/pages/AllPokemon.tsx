import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PokemonList from "../components/pokemon-list/PokemonList";

interface Pokemon {
  id: number;
  name: string;
}

const AllPokemon: React.FC = () => {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/`)
      .then((query) => {
        if (query.data.length > 0) {
          setPokemonsList(query.data);
        } else navigate("/pokedex/no-results");
      })
      .catch((err) => {
        if (err.response && err.response.status === 404)
          navigate("/pokedex/not-found");
      });
  }, [navigate]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  let filteredPokemonList: Pokemon[] = [];
  if (pokemonsList) {
    filteredPokemonList = pokemonsList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (!pokemonsList) return null;
  return (
    <div className="pokemon-index-page">
      <NavBar />
      <Header />
      <div className="dummy-header" />
      <div className="index-content">
        <div className="input-container">
          <input
            type="text"
            placeholder="Rechercher un Pokémon"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <PokemonList pokemonsList={filteredPokemonList} />
      </div>
    </div>
  );
};

export default AllPokemon;
