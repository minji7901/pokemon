import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("pokemonList")) || [];
const notifyDuplicate = () => toast("이미 선택된 포켓몬입니다.");
const notifyNoChoice = () => toast("더 이상 선택할 수 없습니다.");

const savedLocalStorage = (state) => {
  localStorage.setItem("pokemonList", JSON.stringify(state));
};

const pokemonSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.length >= 6) {
        notifyNoChoice();
        return state;
      }

      const isDuplicate = state.some((prev) => prev.id === action.payload.id);

      if (isDuplicate) {
        notifyDuplicate();
        return state;
      }
      state.push(action.payload);
      savedLocalStorage(state);
    },
    removeItem(state, action) {
      const updatedState = state.filter(
        (prev) => prev.id !== action.payload.id
      );
      savedLocalStorage(updatedState);
      return updatedState;
    },
  },
});

export const pokemonActions = pokemonSlice.actions;
export default pokemonSlice;
