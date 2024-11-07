import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Dex from "./pages/Dex.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "dex", element: <Dex /> },
      {
        path: "pokemon/:id",
        element: <Detail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    }}
  />
);
