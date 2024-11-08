import { useState } from "react";
import { Outlet } from "react-router-dom";
import { toast , ToastContainer } from "react-toastify";
import "./index.css";
import Header from "./components/Header";
import { PokemonContext } from "./context/PokemonContext";

function App() {
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

  return (
    <>
      <PokemonContext.Provider
        value={{ handleaddClick, handleRemoveClick, selected }}
      >
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
    </>
  );
}

export default App;
