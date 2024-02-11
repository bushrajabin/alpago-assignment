import React from "react";
import { useNavigate } from "react-router-dom";
import SignupButton from "../CustomButton/SignupButton";

function Signup() {
  const navigate = useNavigate();

  const gotologin = () => {
    navigate("/login");
  };
  return (
    <div className="  xl:pb-28 xl:flex xl:flex-col xl:m-auto xl:items-center">
      <div className="xl:text-xl xl:pt-40">
        <h1 className="xl:pl-20 xl:text-2xl xl:font-serif">Sign-UP</h1>
        <p className="xl:text-xl xl:font-thin">
          Fill in this form to create an acccount.
        </p>
      </div>

      <div className="xl:bg-blue-300 xl:flex xl:flex-col xl:m-10 xl:w-96 xl:p-5 xl:rounded-lg xl:shadow-xl">
        <input
          type="text"
          placeholder="First Name"
          required
          className="xl:p-3 xl:m-2 xl:border-b-slate-800"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="xl:p-2 xl:m-2 "
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="xl:p-2 xl:m-2 "
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="xl:p-2 xl:m-2 "
        />
        <button onClick={gotologin}>
          {" "}
          <SignupButton />
        </button>
      </div>
    </div>
  );
}

export default Signup;
