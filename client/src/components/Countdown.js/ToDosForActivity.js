import React from 'react';

const ToDosForActivity = ({todos}) =>{

    const changeStatusHandler=(todo)=>{
            // change the status from False to True, or True to False
            // if (todo.status == false){
            //     todo.status = true;
            // }else {
            //     todo.status = false;
            // }

            // test
            
    }

    return (
            
                <div className="row">
                    <div className='col-12'>
                    <h1>📝 To Do List</h1>
                    
                        <div className='todos-container'>
                            <ul className='todos-list'>

                            <div className='green lighten-2 row p-2' style={{borderRadius: '10px'}}>
                                    <li className='card-content white-text col-10'>This is a test.</li>
                                    <button 
                                        className='col-2 card-action' 
                                        style={{borderRadius: '10px'}}
                                        // status={todo.status}
                                        onClick={changeStatusHandler}
                                    >
                                        ✔️
                                    </button>
                                </div>


                                {todos.map(todo => {
                                    <div className='todo green lighten-2 row p-2' style={{borderRadius: '10px'}}>
                                    <li className='todo-item card-content white-text col-10'>{todo.name}</li>
                                    <button 
                                        className='col-2 card-action' 
                                        style={{borderRadius: '10px'}}
                                        status={todo.status}
                                        onClick={changeStatusHandler}
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