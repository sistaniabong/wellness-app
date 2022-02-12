import React from 'react';
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import { todoList } from '../components/ToDoList/ToDoList';
// need to add conffetti.js  -KP

function Summary () {
    const todoList = todos.length
    return (
      <main>
       <Header />
       <div>
         <h3>Cycle Completed!</h3>
         <ul>
             <li>{props.hours} of productive work!</li>
             <li>{props.reminder.count} {props.reminder}</li>
             <li>10 gallons of water</li>
             <li>Total tasks completed: {todoList} </li>
         </ul>
       </div>
       <div> 
           <button class="btn-floating btn-large red lighten-2" style="width:100px; height:100px">Publish</button>
       </div>
        <Footer />
      </main>
    );
}
export default Summary;
  