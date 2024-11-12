import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Dex from "./pages/Dex.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import NotFound from "./pages/NotFound.jsx";
import GlobalStyle from "./styles/GlobalStyle.js";
import PokemonProvider from "./context/PokemonProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "dex", element: <Dex /> },
      { path: "pokemon/:pokemonId", element: <Detail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PokemonProvider>
    <GlobalStyle />
    <RouterProvider router={router} />
  </PokemonProvider>
);
