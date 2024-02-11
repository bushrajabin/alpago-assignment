// Login.js
import React, { useState } from "react";
import LoginButton from "../CustomButton/LoginButton";
import SignupButton from "../CustomButton/SignupButton";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(setEmail);

  return (
    <div className=" xl:items-center xl:flex xl:flex-col xl:justify-center  xl:p-10 xl:m-auto xl:pt-44">
      <h1 className="xl:text-2xl  xl:font-serif xl:pb-5 ">Login-Page</h1>

      <div className=" xl:p-4 xl:text-xl xl:bg-blue-300 xl:shadow-2xl xl:rounded-sm ">
        <form className=" xl:flex xl:flex-col xl:justify-center xl:w-72 xl:m-2">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="xl:outline-none xl:p-2 xl:m-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="xl:outline-none xl:p-2 xl:m-2"
            required
          />
          <LoginButton />

          <div className=" xl:bg-white xl:flex xl:flex-row xl:items-center xl: p-1 xl:justify-around">
            <p className=" xl:text-lg  ">Not a member?</p>
            <SignupButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
