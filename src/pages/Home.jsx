import React from "react";
import pikachuImg from "../assets/pikachuImg.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  a {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border: 2px solid #000;
    border-radius: 50%;
    background: #fff;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      border-bottom: 2px solid #000;
      background: red;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid #000;
      background-color: #fff;
      transform: translate(-50%,-50%);
    }
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
          <Link to="/dex">Getting started</Link>
        </HomeContTextBox>
        <img src={pikachuImg} alt="pikachu" />
      </HomeContainer>
    </HomeWrapper>
  );
}
