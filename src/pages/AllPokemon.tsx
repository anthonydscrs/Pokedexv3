import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

import axios from "axios";
import PokemonList from "../components/pokemon-list/PokemonList";
import Loading from "../components/loading/Loading";

interface Pokemon {
  id: number;
  name: string;
}

const AllPokemon: React.FC = () => {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    setIsLoaded(false);
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
      })
      .finally(() => setIsLoaded(!isLoaded));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const startIndex = (page - 1) * 45;
  const endIndex = page * 45;

  if (!pokemonsList) return <Loading />;
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
        <Pagination
          count={Math.ceil(pokemonsList.length / 45)}
          variant="outlined"
          onChange={handlePaginationChange}
          page={page}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "2rem",
            "& .MuiPaginationItem-root": {
              // Sélectionne chaque élément MuiPaginationItem
              border: "2px solid black", // Ajoute une bordure de 2px solide noire
              borderRadius: "50%", // Pour arrondir les bords et obtenir des boutons circulaires
              margin: "0 5px", // Ajoute une marge de 5px autour de chaque bouton
            },
            "& .Mui-selected": {
              // Sélectionne l'élément actuellement sélectionné
              backgroundColor: "var(--black)", // Change la couleur d'arrière-plan du bouton sélectionné en noir
              color: "white", // Change la couleur du texte du bouton sélectionné en blanc
            },
          }}
        />
        <PokemonList
          pokemonsList={filteredPokemonList}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
    </div>
  );
};

export default AllPokemon;
