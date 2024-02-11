import "./App.css";
import React from "react";

import Signup from "./components/Signup/Signup";
import Login from "./components/loginForm/Login";
import Error from "./components/pages/Error";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",

    element: (
      <>
        <Error />
      </>
    ),
  },
  {
    path: "/",

    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/signup",

    element: (
      <>
        <Signup />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Signup /> */}
    </>
  );
}

export default App;
