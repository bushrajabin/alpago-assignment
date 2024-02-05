import "./App.css";
import React from "react";
import Login from "./components/loginForm/Login";
import Signup from "./components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherComponent from "./components/weather/WeatherComponent";

function App() {
  return (
    <>
    <Login/>
    <WeatherComponent/>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={Signup} />
          {/* <Route path="/login" element={Login} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
