import React from "react";
import { useNavigate } from "react-router-dom";
function SignupButton() {
  const navigate = useNavigate();
  const SignUp = () => {
    navigate("/signup");
  };
  return (
    <>
      <button
        className=" xl:hover:bg-black xl:hover:text-white xl:bg-white xl:text-black xl:p-3 xl:w-24  xl:rounded-sm"
        onClick={SignUp}
      >
        SignUp
      </button>
    </>
  );
}

export default SignupButton;
