import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  background: #fff;
`;
export default function PokemonCard({ data, selected, setSelected, added }) {
  const { img_url, korean_name, description ,id } = data;

  const handleaddClick = (e) => {
    e.preventDefault();
    if (selected.length > 5) {
      return alert("초과!");
    }
    setSelected((prev) => [...prev, data]);
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    setSelected((items) => items.filter((prev) => prev.id !== data.id));
  };

  return (
    <StyledLink to={`/pokemon/${id}`}>
      <img src={img_url} alt={korean_name} />
      <strong>{korean_name}</strong>
      <p>{description}</p>
      {added ? (
        <button type="button" onClick={handleaddClick}>
          추가
        </button>
      ) : (
        <button type="button" onClick={handleRemoveClick}>
          삭제
        </button>
      )}
    </StyledLink>
  );
}
