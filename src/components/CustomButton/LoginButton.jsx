import React from "react";
import { useNavigate } from "react-router-dom";
// import { database } from "../../firebaseconfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";

function LoginButton() {
  const navigate = useNavigate();
  const clickForSubmit = () => {
    navigate("/signup");
  };
  //   const clickForSubmit = async (e) => {
  //     navigate("/signup");
  //     e.preventDefault();

  //     await createUserWithEmailAndPassword(database, email, password)
  //       .then((userCredential) => {
  //         const user = userCredential.user;
  //         alert(user, "congratulations login successfully");
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode, errorMessage);
  //         // ..
  //       });
  //   };
  return (
    <div>
      <button
        type="text"
        className="xl:bg-white xl:p-2 xl:m-2 xl:rounded-md xl:hover:bg-blue-200 xl:w-24 xl:ml-24"
        onClick={clickForSubmit}
      >
        Login
      </button>
    </div>
  );
}

export default LoginButton;
