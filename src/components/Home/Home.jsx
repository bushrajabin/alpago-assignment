import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const authToken= localStorage.getItem('authToken')

function Home() {
  const navigate = useNavigate()
  const location = useLocation();

  useEffect(()=>{
    if(!authToken){
        navigate('/signup')
    }

    console.log(location.pathname);
  },[])
  return (
    <div className="xl:bg-yellow-900">
    <h1>You log in successfully</h1>
    </div>
  );
}

export default Home;
