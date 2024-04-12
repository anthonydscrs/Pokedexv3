import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PokemonType from "../components/pokemon-type/PokemonType";
import Loading from "../components/loading/Loading";

interface Pokemon {
  id: number;
  name: string;
}

interface Params {
  type: string;
  [key: string]: string | undefined;
}

const PokemonByTypes: React.FC = () => {
  const { type } = useParams<Params>();
  const [pokemonsType, setPokemonsType] = useState<Pokemon[] | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`)
      .then((query) => {
        setPokemonsType(query.data);
      })
      .catch((err) => {
        if (err.response.status === 404) navigate("/pokedex/not-found");
      })
      .finally(() => setIsLoaded(!isLoaded));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, navigate]);

  const formattedType = type
    ? type.charAt(0).toUpperCase() + type.slice(1)
    : "";

  if (!pokemonsType) return <Loading />;
  return (
    <div className="pokemon-index-page">
      <NavBar />
      <Header />
      <div className="dummy-header" />
      <div className="index-content">
        <div className="index-header">
          <h3 className="index-title">{`${formattedType}`}</h3>
        </div>
        <PokemonType pokemonsType={pokemonsType} />
      </div>
    </div>
  );
};

export default PokemonByTypes;
