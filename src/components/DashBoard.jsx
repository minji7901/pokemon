import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashBoardContainer = styled.article`
  padding: 20px;
  border-radius: 10px;
  background: #f5f5f5;
`;
const DashBoardNonText = styled.p`
  color: #8BC34A;
  text-align: center;
  font-size: 1.5rem;
`;
const DashBoardIsCont = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
`;

export default function DashBoard({ selected, setSelected, removePokemon }) {
  return (
    <DashBoardContainer>
      {selected.length === 0 ? (
        <DashBoardNonText>포켓몬을 추가해주세요!</DashBoardNonText>
      ) : (
        <DashBoardIsCont>
          {selected.map((data) => (
            <PokemonCard
              key={data.id}
              data={data}
              selected={selected}
              setSelected={setSelected}
              removePokemon={removePokemon}
            />
          ))}
        </DashBoardIsCont>
      )}
    </DashBoardContainer>
  );
}
