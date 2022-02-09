import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_TODO } from '../../utils/mutations';
import { GET_TODOS } from '../../utils/queries';

// create todo-list and connect to the activity
const ToDoForm = () => {
  const [formState, setFormState] = useState({
    name: '',
  });
  const [todoTasksCount, setTodoTasksCount] = useState(0);

  const [addToDo, { error }] = useMutation(ADD_TODO, {
    update(cache, { data: { addToDo } }) {
      try {
        const { todos } = cache.readQuery({ query: GET_TODOS });

        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: [ ...todos, addToDo] },
        });
      } catch (e) {
        console.error(e);
      }
      // update me oject's cache; this should belongt to an activity?
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, todos: [...me.todos, addToDo] } },
      // });
    
    },
    
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addToDo({
        variables: { ...formState },
      });

      setFormState({
        name:'',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'todoText') {
      setFormState(value);
      setTodoTasksCount(todoTasksCount+1);
    } 
  };

  return (
    <div>
      <h1>📝 To Do List: You have {todoTasksCount} tasks!</h1>
      <h2>Let's get it DONE!</h2>
      <form
        className="col s12"
        onSubmit={handleFormSubmit}
      >
        <div className="row">
          <textarea
            name="todoText"
            placeholder="Tasks"
            value={formState.name}
            className="materialize-textarea"
            // style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="flex-column justify-center align-center">
          <button className="m-2 waves-effect waves-light btn-large" style="border-radius: 10px;" type="submit">
            Add Task
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ToDoForm;