import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import ButtonShiny from "../components/button-shiny/ButtonShiny";
import PokemonCard from "../components/pokemon-card/PokemonCard";

interface PokemonData {
  id: number;
  name: string;
  image: string;
  apiTypes: { name: string }[];
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
}

export default function Pokemon(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [shiny, setShiny] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Check if id is truthy
      axios
        .get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        .then((response) => {
          setPokemon(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            navigate("/pokedex/not-found");
          }
        });
    }
  }, [id, navigate]);

  // Vérifier si le Pokémon est chargé avant de continuer
  if (!pokemon) return <p>No Pokémon found.</p>;

  return (
    <div className="pokemon-page">
      <div className="dummy-header" />
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">
            #{pokemon.id.toString().padStart(3, "0")} -{" "}
            <span>{pokemon.name}</span>
          </h3>
        </div>
        <div className="card-features">
          <ButtonShiny shiny={shiny} setShiny={setShiny} />
        </div>
        <PokemonCard pokemon={pokemon} shiny={shiny} />
      </div>
      <Header />
    </div>
  );
}
