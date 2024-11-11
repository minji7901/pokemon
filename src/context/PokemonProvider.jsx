import React, { useState } from "react";
import { createContext } from "react";

export const PokemonContext = createContext([]);

export default function PokemonProvider({ children }) {
  const [selected, setSelected] = useState([]);
  return (
    <PokemonContext.Provider value={{ selected, setSelected }}>
      {children}
    </PokemonContext.Provider>
  );
}
