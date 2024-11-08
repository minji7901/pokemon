import React from "react";
import { StyledLinkToHome } from "../styles/StyledLinkToHome";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledLinkToHome to="/">
        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="logo" />
      </StyledLinkToHome>
    </StyledHeader>
  );
}
