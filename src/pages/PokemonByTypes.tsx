import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Header from "../components/Header";
import PokemonType from "../components/pokemon-type/PokemonType";

interface Pokemon {
  id: number;
  name: string;
}

interface PokemonsTypeResponse {
  data: Pokemon[];
}

interface Params {
  type: string;
}

const PokemonIndex: React.FC = () => {
  const { type } = useParams<Params>();
  const [pokemonsType, setPokemonsType] = useState<Pokemon[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<PokemonsTypeResponse>(
        `https://pokebuildapi.fr/api/v1/pokemon/type/${type}`
      )
      .then((query: AxiosResponse<PokemonsTypeResponse>) => {
        setPokemonsType(query.data.data);
      })
      .catch((err) => {
        if (err.response?.status === 404) navigate("/pokedex/not-found");
      });
  }, [type, navigate]);

  if (!pokemonsType) return null;
  return (
    <div className="pokemon-index-page">
      <Header />
      <div className="dummy-header" />
      <div className="index-content">
        <div className="index-header">
          <h3 className="index-title">{`${type}`}</h3>
        </div>
        {/* Assurez-vous de passer la prop pokemonsType */}
        <PokemonType pokemonsType={pokemonsType} />
      </div>
    </div>
  );
};

export default PokemonIndex;
