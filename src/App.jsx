import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Header from "./components/Header";
import { PokemonContext } from "./context/PokemonContext";

function App() {
  const [selected, setSelected] = useState([]);

  return (
    <PokemonContext.Provider value={{ selected, setSelected }}>
      <Header />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </PokemonContext.Provider>
  );
}

export default App;
