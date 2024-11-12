import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: [],
};

const pokemonSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    addItem(state, action) {
      const notifyDuplicate = () => toast("이미 선택된 포켓몬입니다.");
      const notifyNoChoice = () => toast("더 이상 선택할 수 없습니다.");

      if (state.selected.length > 5) {
        notifyNoChoice();
        return state;
      }

      const isDuplicate = state.selected.some(
        (prev) => prev.id === action.payload.id
      );

      if (isDuplicate) {
        notifyDuplicate();
        return state;
      }

      state.selected.push(action.payload);
    },
    removeItem(state, action) {
      state.selected = state.selected.filter(
        (prev) => prev.id !== action.payload.id
      );
    },
  },
});

export const pokemonActions = pokemonSlice.actions;
export default pokemonSlice;
