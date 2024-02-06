import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const goback = () => {
    navigate("/signup");
  };
  return (
    <>
      <div>Home</div>
      <button onClick={goback}>goBack</button>
    </>
  );
}

export default Home;
