import React from 'react';
// import Login from "../components/Login/Login"
// import Signup from "../components/Signup/Signup"
import Carousel from "../components/Carousel/Carousel"
import Test from '../components/Signup/signuptest'
import LoginTest from '../components/Login/logintest';

const Home = () => {
  // const showModal = {
  //   var myModal = document.getElementById('login')
  //   var myInput = document.getElementById('myInput')

  //   myModal.addEventListener('shown.bs.modal', function () {
  //   myInput.focus()
  //   })  
  // }

  // const showModalsignup = {
  //   var myModal = document.getElementById('signup')
  //   var myInput = document.getElementById('myInput')

  //   myModal.addEventListener('shown.bs.modal', function () {
  //   myInput.focus()
  //   })  
  // }

  return (
    <div className="container">
      <p>hey</p>
      <Carousel />
      <Test />
      <LoginTest />

      {/* <Login /> */}
      {/* <Signup /> */}
      
    </div>
  );
};

export default Home;
