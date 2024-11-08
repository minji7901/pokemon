import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledSection as DexContentSection } from "../styles/StyledSection";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import { PokemonBall as ScrollToTopButton } from "../styles/PokemonBall";

const DexContent = styled.div`
  background: #ffeb3b;
  > a {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 20px;
    bottom: 20px;
    span {
      z-index: 1;
      font-size: 0.875rem;
    }
  }
`;

export default function Dex() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    scrollTo(0, 0);
  };

  return (
    <DexContent>
      <DexContentSection>
        <DashBoard
        />
        <PokemonList />
      </DexContentSection>
      <ScrollToTopButton onClick={handleScrollToTop}>
        <span>▲</span>
      </ScrollToTopButton>
      <ToastContainer />
    </DexContent>
  );
}
