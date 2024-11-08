import styled from "styled-components";
import { Link } from "react-router-dom";

export const PokemonBall = styled(Link)`
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    border-bottom: 2px solid #000;
    background: red;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #000;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }
`;
