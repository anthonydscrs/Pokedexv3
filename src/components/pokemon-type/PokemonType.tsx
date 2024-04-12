import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PokemonType.module.css";

interface Pokemon {
  id: number;
  name: string;
}

interface Props {
  pokemonsType: Pokemon[];
}

const PokemonType: React.FC<Props> = ({ pokemonsType }) => {
  return (
    <div className={styles.indexContainer}>
      {pokemonsType.map((pokemon) => (
        <Link key={pokemon.id} to={`/pokedex/${pokemon.id}/`}>
          <button
            key={pokemon.name}
            type="button"
            className={styles.buttonContainer}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <p className={styles.pokemonName}>
              {`#${pokemon.id.toString().padStart(3, "0")} ${pokemon.name}`}
            </p>
          </button>
        </Link>
      ))}
    </div>
  );
};

PokemonType.propTypes = {
  pokemonsType: PropTypes.array.isRequired,
};

export default PokemonType;
