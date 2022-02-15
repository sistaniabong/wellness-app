import React, { useState }from 'react';
import { useQuery } from '@apollo/client';

import { Link , useParams } from 'react-router-dom';

import ReminderForm from '../components/Reminder/ReminderForm';
import ReminderList from '../components/Reminder/ReminderList';
import ToDoForm from '../components/ToDoList/ToDoForm';
import ToDoList from '../components/ToDoList/ToDoList';

import { GET_SINGLE_ACTIVITY, GET_SINGLE_ACTIVITY_TODOS, GET_SINGLE_ACTIVITY_REMINDERS } from '../utils/queries';


const Setup = () => {
    

    // get activityId
    const { activityId } = useParams();

    const { loading, data } = useQuery(GET_SINGLE_ACTIVITY,
      {
        variables: { activityId: activityId },
      }
    );
    const reminders = data?.activity.reminders || [];
    const todos = data?.activity.todos || [];
    console.log('reminders:')
    console.log(reminders);
    console.log('todos:')
    console.log(todos);


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
              activity={activityId}
              // todos={todos}
              // setTodos={setTodos}
              // todoState={todoState}
              // setTodoState={setTodoState}
            />

            {/* Todos List */}
            <ToDoList 
              todos={todos}
              // setTodos={setTodos}
            />

            {/* The START Button for final generate all the reminders and todos */}

            <Link
              to={`/activity/${activityId}`}
              >
            <div className="position-absolute bottom-10 start-50 translate-middle-x">
                <button 
                  className="btn-floating btn-large waves-effect waves-light red lighten-2" 
                  style={{width:'100px', height:'100px'}}
                >
                  START
                </button>
            </div>
            </Link>

         
      </main> 
      
    )
}

export default Setup;
