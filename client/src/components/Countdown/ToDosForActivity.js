import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_TODO } from '../../utils/mutations';

const ToDosForActivity = ({ todos }) => {
    // console.log('init todo list')
    // console.log(todos)


    const [updateTodo, { error, data }] = useMutation(UPDATE_TODO);

    const changeStatusHandler = async (todo) => {
        // change the status from False to True, or True to False
        // need to add UpdateTodo Mutation here to change the status
        console.log('init changeStatusHandler ')
        console.log(todo)
        try {
            const { data } = await updateTodo({
                variables: { todoId: todo._id, status:!todo.status },
            });
            console.log('data')
            console.log(data)

        } catch (err) {
        console.error(err);
        }
    }

    return (
        <div className="row justify-center align-center text-center">
            <h1>📝 To Do List</h1>
                {todos.map(todo => (
                    
                    <div key={todo._id} className='m-2'>
                        <button
                            className={`todo green lighten-2 p-2 justify-center align-center text-center ${todo.status ? 'complete' : ''}`}
                            style={{ border:'none',borderRadius: '10px', }}
                            status={todo.status}
                            onClick={() => changeStatusHandler(todo)}
                        >
                        <h2
                            // Decide the todo css format based on each todo.status (true? go with css style; false? do nothing for the styling)
                            className={`todo-item card-content white-text ${todo.status ? true : ''}`}>
                            {todo.name}
                        </h2>  
                        
                        </button> 
                    </div>
                    
                ))}
        </div>
    )
}

export default ToDosForActivity;