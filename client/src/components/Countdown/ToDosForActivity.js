import React from 'react';

const ToDosForActivity = ({todos}) =>{

    const changeStatusHandler=(todo)=>{
            // change the status from False to True, or True to False
            // need to add UpdateTodo Mutation here to change the status
            if (todo.status == false){
                todo.status = true;
            }else {
                todo.status = false;
            }
    }

    return (  
        <div className="row">
            <div className='col-12'>
            <h1>📝 To Do List</h1>
                <div className='todos-container'>
                    <ul className='todos-list'>

                    {/* This is the test for when the todo.status == true */}
                    <div className='green lighten-2 row p-2' style={{borderRadius: '10px'}}>
                        <li className={`card-content white-text col-10 true`}><h4>This is a test.</h4></li>
                        <button 
                            className='col-2 card-action' 
                            style={{borderRadius: '10px'}}
                            // status={todo.status}
                            onClick={changeStatusHandler}
                        >
                            ✔️
                        </button>
                    </div>
                        

                        {/* Here is the real coding for each todos */}
                        {todos.map(todo => {
                            <div className='todo green lighten-2 row p-2' style={{borderRadius: '10px'}}>
                            <li 
                            // Decide the todo css format based on each todo.status (true? go with css style; false? do nothing for the styling)
                            className={`todo-item card-content white-text col-10 ${todo.status? true: ''}`}                           >
                                <h4>{todo.name}</h4>
                            </li>

                            <button 
                                className='col-2 card-action' 
                                style={{borderRadius: '10px'}}
                                status={todo.status}
                                onClick={changeStatusHandler(todo)}
                            >
                                ✔️
                            </button>
                        </div>
                        })}
                        
                    </ul>
                </div>
            </div>
        </div>   
    )
}

export default ToDosForActivity;