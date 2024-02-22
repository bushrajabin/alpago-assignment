import React, { useState } from "react";
import { json, useLocation } from "react-router-dom";
import CustomBtn from "../CustomButton/CustomBtn";
import { useNavigate } from "react-router-dom";

const CustomForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  function onLogin() {
    if (email === "" || password == "") {
      alert("Please fill!!!");
    } else {
      alert("login clicked!!!");
      navigate("/congPage");
    }
  }

  const onSignUp = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      cPassword === ""
    ) {
      alert("Please fill");
    } else {
      alert("SignUp Successfully!!!!");
      navigate("/login");
    }
  };

  return (
    <div className="  xl:pb-20 xl:flex xl:flex-col xl:m-auto xl:pt-20 xl:items-center">
      <div className="xl:text-xl">
        <h1 className="xl:text-2xl xl:font-serif">
          {currentPath === "/login" ? "Login Form" : "SignUp Form"}
        </h1>
        <p className="xl:text-xl xl:font-thin">
          {currentPath === "/login"
            ? "Login To Your Account!"
            : "Fill in this form to create an acccount."}
        </p>
      </div>

      <div className="xl:bg-blue-300 xl:flex xl:flex-col xl:m-10  xl:p-5 xl:rounded-lg xl:shadow-xl w-96">
        {currentPath === "/signup" && (
          <>
            <input
              type="text"
              placeholder="First Name"
              required
              className="xl:p-2 xl:m-2 xl:border-b-slate-800"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Last Name"
              required
              className="xl:p-2 m-2 "
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          required
          className="xl:p-2 xl:m-2 "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="xl:p-2 xl:m-2 "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {currentPath === "/signup" && (
          <input
            type="password"
            placeholder="Confirm password"
            required
            className="xl:p-2 xl:m-2 "
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        )}

        <CustomBtn
          title={currentPath === "/login" ? "Login Now" : "SignUp"}
          onClickFn={currentPath === "/login" ? onLogin : onSignUp}
        />
      </div>
    </div>
  );
};

export default CustomForm;
