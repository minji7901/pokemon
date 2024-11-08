import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { MOCK_DATA as pokemonData } from "../data/mock_data.js";

const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 20px;
  gap: 20px;
`;

export default function PokemonList({ addPokemon }) {
  return (
    <PokemonListContainer>
      {pokemonData.map((data) => (
        <PokemonCard key={data.id} data={data} addPokemon={addPokemon} added />
      ))}
    </PokemonListContainer>
  );
}
