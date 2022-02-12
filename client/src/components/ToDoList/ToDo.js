import React from 'react';
const Todo = ({todotext, todo, todos, setTodos}) => {
    // delete func for remove a todo
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    return(
        <div className='todo rowcard green lighten-2 row p-2' style={{borderRadius: '10px'}}>
            <li className='todo-item card-content white-text col-10'>{todotext}</li>
            <button 
                className='col-2 card-action' 
                style={{borderRadius: '10px'}}
                onClick={deleteHandler}
            >
                🗑
            </button>
        </div>
    );
}


export default Todo;