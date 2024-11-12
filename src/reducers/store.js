import { createStore } from "redux";
import { toast } from "react-toastify";

function addPokemon(state, data) {
  const notifyDuplicate = () => toast("이미 선택된 포켓몬입니다.");
  const notifyNoChoice = () => toast("더 이상 선택할 수 없습니다.");
  if (state.selected.length > 5) {
    notifyDuplicate();
    return state;
  }

  const isDuplicate = state.selected.some((prev) => prev.id === data.id);
  if (isDuplicate) {
    notifyNoChoice();
    return state;
  }

  return {
    ...state,
    selected: [...state.selected, data],
  };
}

function removePokemon(state, data) {
  return {
    ...state,
    selected: state.selected.filter((prev) => prev.id !== data.id),
  };
}

const initialState = { selected: [] };
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return addPokemon(state, action.data);
    case "remove":
      return removePokemon(state, action.data);
    default:
      return state;
  }
};

const store = createStore(pokemonReducer);
export default store;
