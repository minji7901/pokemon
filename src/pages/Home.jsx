import React from "react";
import pikachuImg from "../assets/pikachuImg.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #2196f3;
`;
const LandingCont = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px 5px rgb(255 255 255 / 20%);
  background: rgba(0, 0, 0, 0.1);
`;
const LandingContTbox = styled.div`
  color: #fff;
  max-width: 400px;
  font-family: "Sour Gummy", sans-serif;
  & h1 {
    font-size: 2.625rem;
    word-break: keep-all;
  }
  & p {
    margin: 15px 0;
    color: #ddd;
    font-weight: 300;
    font-size: 1.25rem;
  }
  & a {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px;
    background: #F06292;
  }
`;

export default function Home() {
  return (
    <LandingWrap>
      <LandingCont>
        <LandingContTbox>
          <h1>
            Welcome! <br />
            This place provides a Pokemon Pokédex.
          </h1>
          <p>
            To view the Pokemon Pokédex, <br /> please click the button below.
          </p>
          <Link to="/dex">Getting started</Link>
        </LandingContTbox>
        <img src={pikachuImg} alt="pikachu" />
      </LandingCont>
    </LandingWrap>
  );
}
