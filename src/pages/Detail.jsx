import React from "react";
import styled from "styled-components";
import { StyledSection as DetailContentSection } from "../styles/StyledSection";
import PokemonDetail from "../components/PokemonDetail";

const DetailContent = styled.div`
  background: #e3f2fd;
`;

export default function Detail() {
  return (
    <DetailContent>
      <DetailContentSection>
        <PokemonDetail />
      </DetailContentSection>
    </DetailContent>
  );
}
