import React from "react";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import stressed from "../assets/feelingstressed.gif";

const Home = () => {
  return (
    <div className="container">
      <div className="justify-center align-center text-center">
      <img
        src={stressed}
        style={{ textAlign: "center", width: "355px", height: "auto", marginBottom:"10px"  }}
      />
      </div>
      <div 
      className ="d-flex"
      style={{ paddingLeft: "30%" }}>
        <div className="m-2">
        <Signup />
        </div>
        <div className="m-2">
        <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
