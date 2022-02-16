import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../../utils/mutations';
import { GET_SINGLE_ACTIVITY_TODOS } from '../../utils/queries';
import { Link , useParams } from 'react-router-dom';



// const ToDoForm=({todos, setTodos, todoState, setTodoState})=>{
const ToDoForm = () => {
    console.log('init adding todo form')
    const { activityId } = useParams();

    console.log(activityId)

    const [todo, setTodoState] = useState({
        activityId: activityId,
        name: '',
    });

    // const [addTodo, { error, data }] = useMutation(ADD_TODO);

    const [addTodo, { error }] = useMutation(ADD_TODO, {
        update(cache, { data: { addTodo } }) {
          try {
    
            console.log(activityId)
    
            const { activityTodos } = cache.readQuery({
              query: GET_SINGLE_ACTIVITY_TODOS,
              variables: {
                activityId: activityId,
              },
            });
            console.log('todos cache')
    
            cache.writeQuery({
              query: GET_SINGLE_ACTIVITY_TODOS,
              variables: {
                activityId: activityId,
              },
              data: { activityTodos: [addTodo, ...activityTodos] },
            });
          } catch (e) {
            console.error(e);
          }
        },
      });



    const addTodoHandler = async (e) => {
        e.preventDefault();
        console.log("addTodoHandler")
        try {
            console.log('init add todo')
            const { data } = await addTodo({
                variables: { ...todo },
            });
            console.log(data)
            setTodoState({ activityId: activityId, name: '' });
            // window.location.reload();

        } catch (err) {
            console.error(err);
        }

    };

    return (
        <div>
            <form className="col s12">
                <div className="row">
                    <div>
                        <h1>📝 To Do List</h1>
                        <div className="d-flex">
                            <textarea
                                id="icon_prefix2"
                                className="materialize-textarea"
                                placeholder="Tasks"
                                style={{ color: 'white' }}
                                value={todo.name}
                                onChange={(e) => {
                                    const todoContent = e.target.value;
                                    console.log(todoContent)
                                    setTodoState({ ...todo, name: todoContent });
                                }}
                            >
                            </textarea>
                            <button
                                className="waves-effect waves-light btn-floating"
                                id="add-todo"
                                style={{ borderRadius: '10px' }}
                                onClick={addTodoHandler}
                            >
                                +
                            </button>
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ToDoForm;