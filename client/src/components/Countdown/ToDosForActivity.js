import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_TODO } from '../../utils/mutations';

const ToDosForActivity = ({ todos }) => {
    console.log('init todo list')
    console.log(todos)


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
        <div className="row">
            <div className='col-12'>
                <h1>📝 To Do List</h1>
                <div className='todos-container'>
                    <ul className='todos-list'>

                        {todos.map(todo => (
                            <div key={todo._id} className='todo green lighten-2 row p-2' style={{ borderRadius: '10px' }}>
                                <li
                                    // Decide the todo css format based on each todo.status (true? go with css style; false? do nothing for the styling)
                                    className={`todo-item card-content white-text col-10 ${todo.status ? true : ''}`}                           >
                                    <h4>{todo.name}</h4>
                                </li>

                                <button
                                    className='col-2 card-action'
                                    style={{ borderRadius: '10px' }}
                                    status={todo.status}
                                    // onClick={changeStatusHandler(todo)}
                                    onClick={() => changeStatusHandler(todo)}
                                >
                                    ✔️
                                </button>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ToDosForActivity;