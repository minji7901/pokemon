import React from "react";
import styled, { keyframes } from "styled-components";
import pikachuImg from "../assets/pikachuImg.png";
import { PokemonBall } from "../styles/PokemonBall";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #2196f3;
`;
const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px 5px rgb(255 255 255 / 20%);
  background: rgba(0, 0, 0, 0.1);
`;
const HomeContTextBox = styled.div`
  color: #fff;
  max-width: 400px;
  font-family: "Sour Gummy", sans-serif;
  h1 {
    font-size: 2.625rem;
    word-break: keep-all;
  }
  p {
    margin: 15px 0;
    color: #ddd;
    font-weight: 300;
    font-size: 1.25rem;
  }
`;
const ballScale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
const HomeContLink = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  span {
    color: #ddd;
    font-size: 1.125rem;
  }
  a {
    margin: 0;
    animation: ${ballScale} 1.5s infinite linear;
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeContTextBox>
          <h1>
            Welcome! <br />
            This place provides a Pokemon Pokédex.
          </h1>
          <p>
            To view the Pokemon Pokédex, <br /> please click the button below.
          </p>
          <HomeContLink>
            <span>Getting started →</span>
            <PokemonBall to="/dex"></PokemonBall>
          </HomeContLink>
        </HomeContTextBox>
        <img src={pikachuImg} alt="pikachu" />
      </HomeContainer>
    </HomeWrapper>
  );
}
