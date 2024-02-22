import "./App.css";
import React from "react";
import Error from "./components/pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomForm from "./components/Forms/CustomForm";
import Home from "./components/Home/Home";
import CongPage from "./components/pages/CongPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/signup",
    element: <CustomForm />,
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <CustomForm />,
  },
  {
    path: "/congPage",
    element: <CongPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
