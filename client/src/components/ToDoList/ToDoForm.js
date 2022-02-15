import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../../utils/mutations';


// const ToDoForm=({todos, setTodos, todoState, setTodoState})=>{
const ToDoForm = ({ activity }) => {
    console.log('init adding todo form')
    console.log(activity)

    const [todo, setTodoState] = useState({
        activityId: activity,
        name: '',
    });

    // Set up  addTodo mutation with an option to handle errors
    const [addTodo, { error, data }] = useMutation(ADD_TODO);


    const addTodoHandler = async (e) => {
        e.preventDefault();
        console.log("addTodoHandler")
        try {
            console.log('init add todo')
            const { data } = await addTodo({
                variables: { ...todo },
            });
            console.log(data)
            setTodoState({ activityId: '', name: '' });
            window.location.reload();

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