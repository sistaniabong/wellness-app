import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'
import { todoList } from '../components/ToDoList/ToDoList';
import Confetti from "react-confetti";
// import ReactCanvasConfetti from 'react-canvas-confetti';


function Summary () {
  // const confettiStyle = {
  //     position: 'fixed',
  //     pointerEvent: 'none',
  //     with: '100%',
  //     height: '100%',
  //     top: 0,
  //     left: 0

  // } !! TODO: fix Confetti, only displays in header -KP
  
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }

  // !! TODO: fix Publish button to direct to User Dashboard -KP

  // const dashboardHandler= async(e)=>{
  //   e.preventDefault();
  //   try {
  //       const data  = await getUser({
  //         // variables: { duration:activityDuration },
  //       });
  // const username = data.data.getUser._id 
  // // console.log(userId);
  // // Redirect on next page dashboard/:username
  // window.location.href = '/dashboard/' + username
  // {dashboardHandler}
  // const todoList = todos.length

    return (
      <main className="flex-column justify-center align-center text-center">
        <div
        onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        className="confetti-wrap"
        ref={confettiRef}>
        <h3>Cycle Completed!
           Let's Look At Your Report:</h3>
        <Confetti
          recycle={show}
          numberOfPieces={1000}
          width={width}
          height={height}
        />
      </div>
       <div>
         {/* <h3>Cycle Completed!</h3> */}
         <ul>
             <li>1 minute of productive work! ⚡</li>
             <li>1 walk🚶🏽‍♀️</li>
             <li>5 gallons of water💧</li>
             <li>Total tasks completed📝: 3 </li>
         </ul>
       </div>
       <div> 
          {/* Link to= {`/dashboard/${user.username}`}*/}
           <Link to= '/dashboard' className="btn-floating btn-large red lighten-2" style={{width:'100px', height:'100px'}}>PUBLISH</Link>
       </div>
      </main>
    );
}
export default Summary;
