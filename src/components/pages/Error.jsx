import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const goBack=()=>{
    navigate('/')
  }

  return (
    <>
      {" "}
      <div>Error</div>
      <button onClick={goBack}>GoBack</button>
    </>
  );
}

export default Error;
