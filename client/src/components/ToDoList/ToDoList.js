import React from 'react';
import { useMutation } from '@apollo/client';
import Todo from './ToDo';

const ToDoList = ({todos, setTodos}) =>{
    console.log(todos);

    return(
        <div className='todos-container'>
            <ul className='todos-list'>
                {todos.map(todo => (
                    <Todo 
                        key={todo.id}
                        todotext={todo.name}
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                    />
                ))}
            </ul>

        </div>
    )
}

export default ToDoList;