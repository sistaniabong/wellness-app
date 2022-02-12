import React, { useState }from 'react';
import { useMutation } from '@apollo/client';
import ReminderForm from '../components/Reminder/ReminderForm';
import ReminderList from '../components/Reminder/ReminderList';
import ToDoForm from '../components/ToDoList/ToDoForm';
import ToDoList from '../components/ToDoList/ToDoList';

const Setup = () => {
    
    const startTheActivity = (e) =>{
       e.preventDefault();
        // have a map func to loop for the remindersList, for future ADD_TODO query
        setReminders(reminders.map(reminder => {
          // add every reminder into addReminder Mutation,e.g. 18 ThoughtForm
          // mutation addReminder ($activityId: ID!, $title: String!, $time_interval: Int!)
          console.log(reminders);
          return {...reminders, reminder}
        }))
        // have an map func loop for todosList, for future ADD_Reminder query
        setTodos(todos.map(todo=>{
          // add every reminder into addReminder Mutation
          // mutation addTodo ($activityId: ID!, $name: String!)
          console.log(todos);
          return {...todos, todo}
        }))
        // redirect the page to next page
    };

    // useState for manipulate the Reminder section
    const [typeState, setTypeState] = useState("");
    const [timeState, setTimeState] = useState("");
    const [reminders, setReminders] = useState([]);
    // useState for manipulate the TodoList section
    const [todoState, setTodoState] = useState("");
    const [todos, setTodos] = useState([]);

    return(
        <main>
        {/* for Reminder Setup */}

          {/* Reminder Selector */}
          <ReminderForm 
            reminders={reminders} 
            setReminders={setReminders}
            typeState={typeState} 
            setTypeState={setTypeState} 
            timeState={timeState}
            setTimeState={setTimeState}
          />

          {/* Reminder List */}
            <ReminderList 
            reminders={reminders} 
            setReminders={setReminders}
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
            <div className="flex-column justify-center align-center text-center">
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
