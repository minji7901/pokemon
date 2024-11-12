import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";

const store = configureStore({
  reducer: {
    pokemonList: pokemonSlice.reducer,
  },
});

export default store;
