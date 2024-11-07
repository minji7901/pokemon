import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashBoardContainer = styled.article`
  padding: 20px;
  border-radius: 10px;
  background: #f5f5f5;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
`;
export default function DashBoard({ selected, setSelected }) {
  return (
    <DashBoardContainer>
      {selected.map((data) => (
        <PokemonCard
          key={data.id}
          data={data}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </DashBoardContainer>
  );
}
