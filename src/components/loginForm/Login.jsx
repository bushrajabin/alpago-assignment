// Login.js
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" xl:items-center xl:flex xl:flex-col xl:justify-center  xl:p-10 xl:m-auto xl:pt-44">
      <h1 className="xl:text-2xl  xl:font-serif xl:pb-5 ">Login-Page</h1>

      <div className=" xl:p-4 xl:text-xl xl:bg-blue-300 xl:shadow-2xl xl:rounded-sm ">
        <form className=" xl:flex xl:flex-col xl:justify-center xl:w-72 xl:m-2">
          <input
            type="email"
            placeholder="Email"
            className="xl:outline-none xl:p-2 xl:m-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="xl:outline-none xl:p-2 xl:m-2"
          />
          <button type="submit" className="xl:bg-white xl:p-2 xl:m-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
