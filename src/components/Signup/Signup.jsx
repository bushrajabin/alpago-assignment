import React from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();

  const gotologin = () => {
    navigate("/login");
  };
  return (
    <>
      <div>Signup</div>
      <button onClick={gotologin}>Go to loginform</button>
    </>
  );
}

export default Signup;
