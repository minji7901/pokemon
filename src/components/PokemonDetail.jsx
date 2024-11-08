import React from "react";
import { useParams } from "react-router-dom";
import { MOCK_DATA as pokemonData } from "../data/mock_data.js";
import styled from "styled-components";

const DetailContentBox = styled.div`
  position: relative;
  padding: 20px;
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
  background: #fff;
  border-radius: 15px;
  strong {
    display: block;
    font-size: 2rem;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 15px 0;
  }
  p {
    color: #555;
    font-size: 1.125rem;
  }
  img {
    transition: 0ms.3s;
  }
`;

const BackButton = styled.button`
  position: absolute;
  padding: 5px 20px;
  top: 20px;
  left: 20px;
  color: #fff;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 15px;
  transition: 0.2s;
  background: #8bc34a;
  &:hover {
    color: #8bc34a;
    border-color: #8bc34a;
    background: #fff;
  }
`;

export default function PokemonDetail() {
  const { pokemonId } = useParams();
  const target = pokemonData.filter((data) => data.id === +pokemonId);
  const { description, img_url, korean_name, types } = target[0];

  const handleGoBack = () => {
    history.back();
  };
  return (
    <DetailContentBox>
      <img src={img_url} alt={korean_name} />
      <strong>{korean_name}</strong>
      <ul>
        {types.map((type) => (
          <li key={type}>#{type}</li>
        ))}
      </ul>
      <p>{description}</p>
      <BackButton type="button" onClick={handleGoBack}>
        Back
      </BackButton>
    </DetailContentBox>
  );
}
