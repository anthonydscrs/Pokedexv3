import { Link } from "react-router-dom";
import grass from "../../assets/grass.svg";
import bug from "../../assets/bug.svg";
import dark from "../../assets/dark.svg";
import dragon from "../../assets/dragon.svg";
import electric from "../../assets/electric.svg";
import fairy from "../../assets/fairy.svg";
import fighting from "../../assets/fighting.svg";
import fire from "../../assets/fire.svg";
import flying from "../../assets/flying.svg";
import ghost from "../../assets/ghost.svg";
import ground from "../../assets/ground.svg";
import ice from "../../assets/ice.svg";
import normal from "../../assets/normal.svg";
import poison from "../../assets/poison.svg";
import psychic from "../../assets/psychic.svg";
import rock from "../../assets/rock.svg";
import steel from "../../assets/steel.svg";
import water from "../../assets/water.svg";
import styles from "./PokemonTypes.module.css";

export default function PokemonTypes() {
  return (
    <div className={styles.areaContainer}>
      <Link key="plante" to="/pokedex/types/plante">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#7bce52",
          }}
        >
          <img className={styles.svgType} src={grass} />
          Plante
        </button>
      </Link>
      <Link key="feu" to="/pokedex/types/feu">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#f75231",
          }}
        >
          <img className={styles.svgType} src={fire} />
          Feu{" "}
        </button>
      </Link>
      <Link key="eau" to="/pokedex/types/eau">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#399cff",
          }}
        >
          <img className={styles.svgType} src={water} />
          Eau
        </button>
      </Link>
      <Link key="electrik" to="/pokedex/types/electrik">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#ffc631",
          }}
        >
          <img className={styles.svgType} src={electric} />
          Electrik
        </button>
      </Link>
      <Link key="vol" to="/pokedex/types/vol">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#9cadf7",
          }}
        >
          <img className={styles.svgType} src={flying} />
          Vol
        </button>
      </Link>
      <Link key="normal" to="/pokedex/types/normal">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#ada594",
          }}
        >
          <img className={styles.svgType} src={normal} />
          Normal
        </button>
      </Link>
      <Link key="acier" to="/pokedex/types/acier">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#adadc6",
          }}
        >
          <img className={styles.svgType} src={steel} />
          Acier
        </button>
      </Link>
      <Link key="dragon" to="/pokedex/types/dragon">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#8858f6",
          }}
        >
          <img className={styles.svgType} src={dragon} />
          Dragon
        </button>
      </Link>
      <Link key="insecte" to="/pokedex/types/insecte">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#adbd21",
          }}
        >
          <img className={styles.svgType} src={bug} />
          Insecte
        </button>
      </Link>
      <Link key="psy" to="/pokedex/types/psy">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#ff73a5",
          }}
        >
          <img className={styles.svgType} src={psychic} />
          Psy
        </button>
      </Link>
      <Link key="sol" to="/pokedex/types/sol">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#d6b55a",
          }}
        >
          <img className={styles.svgType} src={ground} />
          Sol
        </button>
      </Link>
      <Link key="ténèbres" to="/pokedex/types/ténèbres">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#735a4a",
          }}
        >
          <img className={styles.svgType} src={dark} />
          Ténèbres
        </button>
      </Link>
      <Link key="combat" to="/pokedex/types/combat">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#a55239",
          }}
        >
          <img className={styles.svgType} src={fighting} />
          Combat
        </button>
      </Link>
      <Link key="fée" to="/pokedex/types/fée">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#e09ae3",
          }}
        >
          <img className={styles.svgType} src={fairy} />
          Fée
        </button>
      </Link>
      <Link key="glace" to="/pokedex/types/glace">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#5acee7",
          }}
        >
          <img className={styles.svgType} src={ice} />
          Glace
        </button>
      </Link>
      <Link key="poison" to="/pokedex/types/poison">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#b55aa5",
          }}
        >
          <img className={styles.svgType} src={poison} />
          Poison
        </button>
      </Link>
      <Link key="roche" to="/pokedex/types/roche">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#bda55a",
          }}
        >
          <img className={styles.svgType} src={rock} />
          Roche
        </button>
      </Link>
      <Link key="spectre" to="/pokedex/types/spectre">
        <button
          type="button"
          className={styles.buttonContainer}
          style={{
            backgroundColor: "#6363b5",
          }}
        >
          <img className={styles.svgType} src={ghost} />
          Spectre
        </button>
      </Link>
    </div>
  );
}
