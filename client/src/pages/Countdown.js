import React, { useState }from 'react';
import { useMutation } from '@apollo/client';
import Timer from '../components/Countdown.js/Timer';
// import ToDoList from '../components/ToDoList/ToDoList';

const Countdown = () =>{
    return (
        <main>
            {/* CountdownTimer */}
            <Timer />

            {/* Todo List */}
            {/* <ToDoList /> */}
            
            {/* Reminder Popup thing  */}

        </main>
        
    )
}

export default Countdown;