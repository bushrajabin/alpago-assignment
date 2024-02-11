import React from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../CustomButton/LoginButton";
import SignupButton from "../CustomButton/SignupButton";

function Home() {
  const navigate = useNavigate();
  const forLoginpage = () => {
    navigate("/login");
  };

  const forSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="xl:bg-yellow-900">
      <LoginButton onClick={forLoginpage} />
      <SignupButton onclick={forSignup} />
    </div>
  );
}

export default Home;
