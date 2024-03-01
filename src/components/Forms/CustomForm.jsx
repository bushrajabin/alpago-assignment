import React, { useState } from "react";
import { json, useLocation } from "react-router-dom";
import CustomBtn from "../CustomButton/CustomBtn";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
            toast.error("Please fill !!!");
        } else {
            toast.success("Login-successfully!!");
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
            toast.error("All fields are required");
        } else if (cPassword != password) {
            toast.warn("Password does not match");
        } else {
            toast.success("Signup succesfully!!");
            navigate("/login");
        }
    };

    return (
        <div className="  flex flex-col  mt-20  xl:pb-2 xl:flex xl:flex-col xl:m-auto xl:pt-20 xl:items-center ">
            <div className=" pt-6   flex flex-col p-4 items-center text-1xl xl:text-xl  xl:flex xl:flex-col xl:items-center xl:p-2">
                <h1 className=" text-2xl xl:text-2xl xl:font-serif">
                    {currentPath === "/login" ? "Login Form" : "SignUp Form"}
                </h1>
                <p className=" text-xl xl:text-xl xl:font-thin">
                    {currentPath === "/login"
                        ? "Login To Your Account!"
                        : "Fill in this form to create an acccount."}
                </p>
            </div>

            <div className="  bg-blue-400 m-2 rounded-md p-2 flex flex-col shadow-lg  xl:bg-blue-300 xl:flex xl:flex-col xl:m-10  xl:p-5 xl:rounded-lg xl:shadow-xl xl:w-96">
                {currentPath === "/signup" && (
                    <>
                        <input
                            type="text"
                            placeholder="First Name"
                            required
                            className=" m-1 p-2 rounded-sm xl:p-2 xl:m-2 xl:border-b-slate-800"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Last Name"
                            required
                            className=" m-1 p-2 rounded-sm xl:p-2 xl:m-2 "
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </>
                )}
                <input
                    type="email"
                    placeholder="Email"
                    required
                    className=" m-1 p-2 rounded-sm xl:p-2 xl:m-2 "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className="m-1 p-2 rounded-sm xl:p-2 xl:m-2 "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {currentPath === "/signup" && (
                    <input
                        type="password"
                        placeholder="Confirm password"
                        required
                        className=" m-1 p-2 rounded-sm xl:p-2 xl:m-2 "
                        value={cPassword}
                        onChange={(e) => setCPassword(e.target.value)}
                    />
                )}

                <CustomBtn
                    title={currentPath === "/login" ? "Login Now" : "SignUp"}
                    onClickFn={currentPath === "/login" ? onLogin : onSignUp}
                />
                <ToastContainer />
            </div>
        </div>
    );
};

export default CustomForm;
