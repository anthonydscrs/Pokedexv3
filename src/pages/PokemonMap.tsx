import React from "react";
import Generation from "../components/generation/Generation";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const PokemonMap: React.FC = () => {
  return (
    <div className="world-page">
      <NavBar />
      <Header />
      <div className="dummy-header" />
      <div className="areas-content">
        <div className="areas-header">
          <h3 className="areas-title">Pokemon World</h3>
        </div>

        <Generation />
      </div>
    </div>
  );
};

export default PokemonMap;
