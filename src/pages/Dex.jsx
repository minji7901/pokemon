import React, { useState } from "react";
import styled from "styled-components";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";

const DexContent = styled.div`
  position: relative;
  min-height: 100vh;
  background: #ffeb3b;
  > img {
    z-index: 1;
    position: absolute;
    top: 20px;
    left: 20px;
    max-width: 200px;
  }
  > section {
    position: relative;
    padding-top: 120px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default function Dex() {
  const [selected, setSelected] = useState([]);
  
  const handleaddClick = (e, data) => {
    e.preventDefault();
    if (selected.length > 5) {
      return alert("초과!");
    }
    setSelected((prev) => [...prev, data]);
  };

  const handleRemoveClick = (e, data) => {
    e.preventDefault();
    setSelected((items) => items.filter((prev) => prev.id !== data.id));
  };

  return (
    <DexContent>
      <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="logo" />
      <section>
        <DashBoard
          selected={selected}
          setSelected={setSelected}
          removePokemon={handleRemoveClick}
        />
        <PokemonList addPokemon={handleaddClick} />
      </section>
    </DexContent>
  );
}
