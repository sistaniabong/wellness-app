import React from 'react';
// import Login from "../components/Login/Login"
import Signup from "../components/Signup/Signup"
import Carousel from "../components/Carousel/Carousel"

const Home = () => {


  return (
    <div className="container">
      <p>hey</p>
      <Carousel />
      {/* <Login /> */}

      {/* <Signup /> */}
      
      <button 
        className="m-6 waves-effect waves-light btn-floating" 
        id="signup" 
        style={{borderRadius: '10px' }}
        data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
        login
        </button>
      <button 
        className="m-6 waves-effect waves-light btn-floating" 
        id="signup" 
        style={{borderRadius: '10px', }}
        data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
        Sign Up
        </button>
    </div>
  );
};

export default Home;
