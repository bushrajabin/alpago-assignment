import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const forLoginpage = () => {
    navigate("/login");
  };

  const forSignup=()=>{
    navigate('/signup')
  }
  return (
    <>
      <button onClick={forLoginpage}>Login</button>
      <button onClick={forSignup}>SignUp</button>
    </>
  );
}

export default Home;
