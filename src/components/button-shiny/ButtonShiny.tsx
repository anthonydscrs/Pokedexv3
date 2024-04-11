import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonShiny.module.css";

interface ButtonShinyProps {
  shiny: boolean;
  setShiny: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonShiny: React.FC<ButtonShinyProps> = ({ shiny, setShiny }) => {
  return (
    <div>
      <button
        type="button"
        className={shiny ? styles.buttonContentShiny : styles.buttonContent}
        onClick={() => {
          setShiny(!shiny);
        }}
      />
    </div>
  );
};

ButtonShiny.propTypes = {
  shiny: PropTypes.bool.isRequired,
  setShiny: PropTypes.func.isRequired,
};

export default ButtonShiny;
