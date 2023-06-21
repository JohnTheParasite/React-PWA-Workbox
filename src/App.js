import React from "react";
import Home from "./pages/home";
import TopPicks from "./pages/TopPicks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "top-picks",
    element: <TopPicks />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
