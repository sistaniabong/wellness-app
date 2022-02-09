import React from 'react';
import { useQuery } from '@apollo/client';

import { ToDoList } from '../components/ToDoList/ToDoList';
import ToDoForm from '../components/ToDoList/ToDoForm';

import { GET_TODOS } from '../utils/queries';

// add the reminder setup in this page


const Setup = () => {
    const { loading, data } = useQuery(GET_TODOS);
    const todos = data?.todos || [];

    return(
        <main>
          {/* need to add the reminder setup here */}
        <div className="flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <ToDoForm />
          </div>
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ToDoList
                todos={todos}
                title="Let's get it done!"
              />
            )}
          </div>
          {/* the button to start the activity */}
          <div class="m-5 flex-column justify-center align-center text-center">
            <Link to="/activity/:activityId">
              <button class="btn-floating btn-large red lighten-2" style="width:100px; height:100px">Start</button>
            </Link>
                
          </div>
        </div>
      </main> 
    )
}




export default Setup;

