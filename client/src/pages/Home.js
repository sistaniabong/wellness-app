import React from "react";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import stressed from "../assets/feelingstressed.gif";

const Home = () => {
  return (
    <div className="container">
      <img
        src={stressed}
        style={{ textAlign: "center", width: "500px", height: "auto" }}
      />
      <div style={{ paddingLeft: "30%" }}>
        <Signup />
        <Login />
      </div>
    </div>
  );
};

export default Home;
