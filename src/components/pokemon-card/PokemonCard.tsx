import EvolutionCard, { Evolution, PreEvolution } from "./EvolutionCard";
import styles from "./PokemonCard.module.css";

interface Type {
  name: string;
}

interface Stats {
  HP: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

interface Pokemon {
  id: number;
  name: string;
  image: string;
  apiTypes: Type[];
  stats: Stats;
  apiEvolutions: Evolution[];
  apiPreEvolution: PreEvolution;
}

interface Props {
  pokemon: Pokemon;
  shiny?: boolean;
}

export default function PokemonCard({ pokemon, shiny }: Props) {
  function setColorType() {
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
    <div className={styles.detailsContainer}>
      <section className={styles.pokemonInfos}>
        <div className={setColorType()} style={{ background: "none" }}>
          <div className={styles.infoCard}>
            <EvolutionCard pokemon={pokemon} />
          </div>
        </div>
      </section>
      <section className={styles.pokemonCard}>
        <div className={setColorType()}>
          <div className={styles.cardContent}>
            <img
              src={
                shiny
                  ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.id}.png`
                  : pokemon.image
              }
              alt={pokemon.name}
              className={styles.pokemonImg}
            />
            <div className={styles.pokemonStatsContainer}>
              <p className={styles.pokemonStats}>
                Type{" "}
                <span>
                  {pokemon.apiTypes[1]
                    ? `${pokemon.apiTypes[0].name}/${pokemon.apiTypes[1].name}`
                    : `${pokemon.apiTypes[0].name}`}
                </span>
              </p>
              <p className={styles.pokemonStats}>
                HP : <span>{pokemon.stats.HP}</span>
              </p>
              <p className={styles.pokemonStats}>
                Attaque : <span>{pokemon.stats.attack}</span>
              </p>
              <p className={styles.pokemonStats}>
                Défense : <span>{pokemon.stats.defense}</span>
              </p>
              <p className={styles.pokemonStats}>
                Attaque spéciale : <span>{pokemon.stats.special_attack}</span>
              </p>
              <p className={styles.pokemonStats}>
                Défense spéciale : <span>{pokemon.stats.special_defense}</span>
              </p>
              <p className={styles.pokemonStats}>
                Vitesse : <span>{pokemon.stats.speed}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
