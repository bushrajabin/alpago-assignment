import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CustomBtn from "../CustomButton/CustomBtn";

const CustomForm = () => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);


    console.log("currentPath is", currentPath);

    function onLogin() {
        alert("login clicked!!!");
        localStorage.setItem("authToken", JSON.stringify({ name: "Bushra" }));
    }
    function onSignUp() {
        alert("onSignUp clicked!!!");
    }

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

            <div className="xl:bg-blue-300 xl:flex xl:flex-col xl:m-10 xl:w-96 xl:p-5 xl:rounded-lg xl:shadow-xl">
                {currentPath === "/signup" && (
                    <>
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
                    </>
                )}
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

                {currentPath === "/signup" && (
                    <input
                        type="password"
                        placeholder="Confirm password"
                        required
                        className="xl:p-2 xl:m-2 "
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
