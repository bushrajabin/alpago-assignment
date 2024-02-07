import React from "react";
import { useNavigate } from "react-router-dom";
function SignupButton() {
  const navigate = useNavigate();
  const SignUp = () => {
    navigate("/home");
  };
  return (
    <>
      <button
        className=" xl:hover:bg-black xl:hover:text-white xl:p-3 xl:w-24 xl:ml-32 xl:mt-6 xl:rounded-sm"
        onClick={SignUp}
      >
        SignUp
      </button>
    </>
  );
}

export default SignupButton;
