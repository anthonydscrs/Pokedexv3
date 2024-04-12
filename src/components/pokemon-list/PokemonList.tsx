import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PokemonList.module.css";

interface Type {
  name: string;
}

interface Pokemon {
  id: number;
  name: string;
  image: string;
  apiTypes: Type[];
}

interface Props {
  pokemonsList: Pokemon[];
  shiny?: boolean;
  startIndex: number;
  endIndex: number;
}

const PokemonList: React.FC<Props> = ({
  pokemonsList,
  shiny,
  startIndex,
  endIndex,
}) => {
  function setColorType(pokemon: Pokemon) {
    const getType = pokemon.apiTypes[1]
      ? pokemon.apiTypes[1].name
      : pokemon.apiTypes[0].name;
    switch (getType) {
      case "Acier":
        return styles.isSteel;
      case "Ténèbres":
        return styles.isDark;
      case "Dragon":
        return styles.isDragon;
      case "Glace":
        return styles.isIce;
      case "Spectre":
        return styles.isGhost;
      case "Roche":
        return styles.isRock;
      case "Psy":
        return styles.isPsy;
      case "Combat":
        return styles.isFighting;
      case "Sol":
        return styles.isGround;
      case "Fée":
        return styles.isFairy;
      case "Électrik":
        return styles.isElectric;
      case "Poison":
        return styles.isPoison;
      case "Normal":
        return styles.isNormal;
      case "Vol":
        return styles.isFlying;
      case "Insecte":
        return styles.isBug;
      case "Eau":
        return styles.isWater;
      case "Feu":
        return styles.isFire;
      case "Plante":
        return styles.isGrass;
      default:
        return "";
    }
  }

  return (
    <div className={styles.indexContainer}>
      {pokemonsList.slice(startIndex, endIndex).map((pokemon) => (
        <Link key={pokemon.id} to={`/pokedex/${pokemon.id}/`}>
          <button
            key={pokemon.name}
            type="button"
            className={`${styles.buttonContainer} ${setColorType(pokemon)}`}
          >
            <img
              src={
                shiny
                  ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
                  : pokemon.image
              }
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

PokemonList.propTypes = {
  pokemonsList: PropTypes.array.isRequired,
  shiny: PropTypes.bool,
};

export default PokemonList;
