import "./App.css";
import React from "react";
import Error from "./components/pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import CustomForm from "./components/Forms/CustomForm";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <CustomForm />,
  },
  {
    path: "/login",
    element: <CustomForm />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
