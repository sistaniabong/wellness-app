import React from 'react';
import { useMutation } from '@apollo/client';
import Todo from './ToDo';

const ToDoList = ({todos}) =>{

    if (!todos.length) {
        return <h3></h3>;
    }
    return(
        <div className='todos-container'>
            <ul className='todos-list'>
                {todos.map(todo => (
                    <Todo 
                        todoId={todo._id}
                        todotext={todo.name}
                        // todos={todos}
                        // setTodos={setTodos}
                        // todo={todo}
                    />
                ))}
            </ul>

        </div>
    )
}

export default ToDoList;