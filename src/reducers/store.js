import { createStore } from "redux";
import { toast } from "react-toastify";

function addPokemon(state, payload) {
  const notifyDuplicate = () => toast("이미 선택된 포켓몬입니다.");
  const notifyNoChoice = () => toast("더 이상 선택할 수 없습니다.");
  if (state.selected.length > 5) {
    notifyDuplicate();
    return state;
  }

  const isDuplicate = state.selected.some((prev) => prev.id === payload.id);
  if (isDuplicate) {
    notifyNoChoice();
    return state;
  }

  return {
    ...state,
    selected: [...state.selected, payload],
  };
}

function removePokemon(state, payload) {
  return {
    ...state,
    selected: state.selected.filter((prev) => prev.id !== payload.id),
  };
}

const initialState = { selected: [] };
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return addPokemon(state, action.payload);
    case "remove":
      return removePokemon(state, action.payload);
    default:
      return state;
  }
};

const store = createStore(pokemonReducer);
export default store;
