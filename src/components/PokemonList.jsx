import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { MOCK_DATA as pokemonData } from "../data/mock_data.js";
import { useDispatch } from "react-redux";
import { pokemonActions } from "../redux/pokemonSlice";

const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 20px;
  gap: 20px;
`;

export default function PokemonList() {
  const dispatch = useDispatch();
  const handleAddClick = (e, data) => {
    e.preventDefault();
    dispatch(pokemonActions.addItem(data));
  };
  

  return (
    <PokemonListContainer>
      {pokemonData.map((data) => (
        <PokemonCard
          key={data.id}
          data={data}
          added
          handleAddClick={(e) => handleAddClick(e, data)}
        />
      ))}
    </PokemonListContainer>
  );
}
