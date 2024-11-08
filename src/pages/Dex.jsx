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
  const [selected, setSelected] = useState([]);

  const handleaddClick = (e, data) => {
    e.preventDefault();
    const notifyDuplicate = () => toast("이미 선택된 포켓몬입니다.");
    const notifyNoChoice = () => toast("더 이상 선택할 수 없습니다.");
    if (selected.length > 5) {
      return notifyNoChoice();
    }
    const duplicateValue = selected.filter((prev) => prev.id === data.id);
    if (selected.length !== 0 && duplicateValue.length > 0) {
      return notifyDuplicate();
    }
    setSelected((prev) => [...prev, data]);
  };

  const handleRemoveClick = (e, data) => {
    e.preventDefault();
    setSelected((items) => items.filter((prev) => prev.id !== data.id));
  };
  const handleScrollToTop = (e) => {
    e.preventDefault();
    scrollTo(0, 0);
  };

  return (
    <DexContent>
      <DexContentSection>
        <DashBoard
          selected={selected}
          setSelected={setSelected}
          removePokemon={handleRemoveClick}
        />
        <PokemonList addPokemon={handleaddClick} />
      </DexContentSection>
      <ScrollToTopButton onClick={handleScrollToTop}>
        <span>▲</span>
      </ScrollToTopButton>
      <ToastContainer />
    </DexContent>
  );
}
