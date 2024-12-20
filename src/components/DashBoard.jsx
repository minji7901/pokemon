import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { pokemonActions } from "../redux/pokemonSlice";

const DashBoardContainer = styled.article`
  padding: 20px;
  border-radius: 10px;
  background: #f5f5f5;
`;
const DashBoardNonText = styled.p`
  color: #8bc34a;
  text-align: center;
  font-size: 1.5rem;
`;
const DashBoardIsCont = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function DashBoard() {
  const pokemonList = useSelector((state) => state.pokemonList);

  const dispatch = useDispatch();
  const handleRemoveClick = (e, data) => {
    e.preventDefault();
    dispatch(pokemonActions.removeItem(data));
  };
  
  return (
    <DashBoardContainer>
      {pokemonList.length === 0 ? (
        <DashBoardNonText>포켓몬을 추가해주세요!</DashBoardNonText>
      ) : (
        <DashBoardIsCont>
          {pokemonList.map((data) => (
            <PokemonCard
              key={data.id}
              data={data}
              handleRemoveClick={(e) => handleRemoveClick(e, data)}
            />
          ))}
        </DashBoardIsCont>
      )}
    </DashBoardContainer>
  );
}
