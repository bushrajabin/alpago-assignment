// Login.js
import React, { useState } from "react";
import { database } from "../../firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickForSubmit = async (e) => {
    navigate("/signup");
    e.preventDefault();

    await createUserWithEmailAndPassword(database, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(user, "congratulations login successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

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
          <button
            type="text"
            className="xl:bg-white xl:p-2 xl:m-2 xl:rounded-md xl:hover:bg-blue-200"
            onClick={clickForSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
