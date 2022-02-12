import React from 'react';
// import Header from '../components/Header/index'
// import Footer from '../components/Footer/index'
import { todoList } from '../components/ToDoList/ToDoList';
// need to add conffetti.js  -KP

function Summary () {
    // const todoList = todos.length
    return (
      <main className="flex-column justify-center align-center text-center">
       <div>
         <h3>Cycle Completed!</h3>
         <ul>
             <li>5 Hours of productive work! ⚡</li>
             <li>5 walks🚶🏽‍♀️</li>
             <li>10 gallons of water💧</li>
             <li>Total tasks completed📝: **todo list array**</li>
         </ul>
       </div>
       <div> 
           <button className="btn-floating btn-large red lighten-2" style={{width:'100px', height:'100px'}}>PUBLISH</button>
       </div>
      </main>
    );
}
export default Summary;
  