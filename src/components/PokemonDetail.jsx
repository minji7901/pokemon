import React from "react";
import { useParams } from "react-router-dom";
import { MOCK_DATA as pokemonData } from "../data/mock_data.js";

export default function PokemonDetail() {
  const { pokemonId } = useParams();
  const target = pokemonData.filter((data) => data.id === +pokemonId);
  const { description, img_url, korean_name, types } = target[0];

  const handleGoBack = () => {
    history.back();
  };
  return (
    <div>
      <img src={img_url} alt={korean_name} />
      <strong>{korean_name}</strong>
      <p>{description}</p>
      <ul>
        {types.map((target) => (
          <li key={target}>{target}</li>
        ))}
      </ul>
      <button type="button" onClick={handleGoBack}>
        뒤로가기
      </button>
    </div>
  );
}
