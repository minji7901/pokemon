import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Header from "./components/Header";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
