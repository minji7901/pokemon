import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  background: #fff;
`;
export default function PokemonCard({
  data,
  addPokemon,
  removePokemon,
  added,
}) {
  const { img_url, korean_name, description, id } = data;

  return (
    <StyledLink to={`/pokemon/${id}`}>
      <img src={img_url} alt={korean_name} />
      <strong>{korean_name}</strong>
      <p>{description}</p>
      {added ? (
        <button type="button" onClick={(e) => addPokemon(e, data)}>
          추가
        </button>
      ) : (
        <button type="button" onClick={(e) => removePokemon(e, data)}>
          삭제
        </button>
      )}
    </StyledLink>
  );
}
