import React from 'react';
// import { useMutation } from '@apollo/client';

const ToDoForm=({todos, setTodos, todoState, setTodoState})=>{
    const addTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos, { name: todoState, id: `${todoState}` }
        ])
        setTodoState("");
    };
        // console.log(todos);

    return(
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
                     style={{color: 'white'}} 
                     value={todoState}
                     onChange={(e)=>{
                         const todoContent = e.target.value;
                         setTodoState(todoContent);
                     }}
                     >
                     </textarea>
                    <button
                     className="waves-effect waves-light btn-floating"
                     id="add-todo"
                     style={{borderRadius: '10px' }} 
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