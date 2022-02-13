import React, { useState }from 'react';
import { useQuery } from '@apollo/client';

import { Redirect, useParams } from 'react-router-dom';

import ReminderForm from '../components/Reminder/ReminderForm';
import ReminderList from '../components/Reminder/ReminderList';
import ToDoForm from '../components/ToDoList/ToDoForm';
import ToDoList from '../components/ToDoList/ToDoList';

import { ADD_ACTIVITY } from '../utils/mutations';
import { GET_SINGLE_ACTIVITY_REMINDERS } from '../utils/queries';


const Setup = () => {
    
    const startTheActivity = (e) =>{
       e.preventDefault();
        // have a map func to loop for the remindersList, for future ADD_TODO query
        // setReminders(reminders.map(reminder => {
        //   // add every reminder into addReminder Mutation,e.g. 18 ThoughtForm
        //   // mutation addReminder ($activityId: ID!, $title: String!, $time_interval: Int!)
        //   console.log(reminders);
        //   return {...reminders, reminder}
        // }))

        // have an map func loop for todosList, for future ADD_Reminder query
        // setTodos(todos.map(todo=>{
        //   // add every reminder into addReminder Mutation
        //   // mutation addTodo ($activityId: ID!, $name: String!)
        //   console.log(todos);
        //   return {...todos, todo}
        // }
        // ))
        // redirect the page to next page
    };


    // useState for manipulate the Reminder section
    const [typeState, setTypeState] = useState("");
    const [timeState, setTimeState] = useState("");
    // const [reminders, setReminders] = useState([]);
    // useState for manipulate the TodoList section
    const [todoState, setTodoState] = useState("");
    const [todos, setTodos] = useState([]);


    const { activityId } = useParams();
    console.log('activityId:')
    console.log(activityId)


    // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    const { loading, data } = useQuery(GET_SINGLE_ACTIVITY_REMINDERS,
      {
        variables: { activityId: activityId },
      }
    );
    const reminders = data?.activityReminders || [];
    console.log('reminders:')
    console.log(reminders)


    // const queryString = window.location.search;
    // console.log('queryString')
    // const urlParams = new URLSearchParams(queryString);
    // const activityId = urlParams.get('activity')
    // console.log(activityId)

    return(
      
        <main>
          
        {/* for Reminder Setup */}

          {/* Reminder Selector */}
          <ReminderForm 
            activity={activityId}
          />

          {/* Reminder List */}
            <ReminderList 
              reminders={reminders} 
            // setReminders={setReminders}
          /> 
            
            {/* for Todo Setup */}
            <ToDoForm 
              todos={todos}
              setTodos={setTodos}
              todoState={todoState}
              setTodoState={setTodoState}
            />

            {/* Todos List */}
            <ToDoList 
              todos={todos}
              setTodos={setTodos}
            />

            {/* The START Button for final generate all the reminders and todos */}
            <div className="position-absolute bottom-10 start-50 translate-middle-x">
                <button 
                  className="btn-floating btn-large waves-effect waves-light red lighten-2" 
                  style={{width:'100px', height:'100px'}}
                  onClick={startTheActivity}
                >
                  START
                </button>
            </div>
         
      </main> 
      
    )
}
// the button need a <Link to={`/activity/:activityId`}></Link>
// does we need to make a useState, and pass the activityId from page Activity to Setup?

export default Setup;
