import React from 'react';
import { useMutation } from '@apollo/client';
// maybe we don't need the authentication, just took the authentication off 

export const todoList = ({todos}) => {
    if (!todos.length) {
        return <h3>Let's add some tasks here.</h3>;
    }

    // do i need to add remove todo list?

    return (
        <div>
            <div className="flex-row justify-space-between my-4">
                {todos &&
                todos.map((todo) => (
                    <div key={todo} className="col-12 col-xl-6">
                    <div className="card mb-3">
                        <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                        <span>{todo}</span>
                        </h4>
                    </div>
                    </div>
                ))}
            </div>
            {error && (
                <div className="my-3 p-3 bg-danger text-white"> Something went wrong... </div>
            )}
        </div>
    )
}








export const updateToDo = ({ todos }) => {

    const handleCheckbox = async (todo) => {
        try {
        const { data } = await removeSkill({
            variables: { skill },
        });
        } catch (err) {
            console.error(err);
        }
    };

    if (!todos.length) {
        return <h3>Let's add some tasks here.</h3>;
    }

    return (
        <div>
        <div className="flex-row justify-space-between my-4">
            {todos &&
            todos.map((todo) => (
                <div key={todo} className="col-12 col-xl-6">
                <div className="card mb-3">
                    <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                    <span>{todo}</span>
                    
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleCheckbox(todo)}
                    >
                      X
                    </button>
                  )
                    </h4>
                </div>
                </div>
            ))}
        </div>
        {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
        </div>
    );
};

