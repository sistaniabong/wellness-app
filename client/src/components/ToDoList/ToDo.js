import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_TODO } from '../../utils/mutations';

const Todo = ({todoId, todotext}) => {
    console.log('todoId:')
    console.log(todoId)


    // delete func for remove a reminder
    const [deleteTodo, { error, data }] = useMutation(REMOVE_TODO);

    const deleteHandler = async(todoId) => {
        // setReminders(reminders.filter((el) => el.id !== reminder.id))
        try {
            console.log('init remove todo')
            console.log("todoId:")
            console.log(todoId)
            const { data } = await deleteTodo({
              variables: { todoId: todoId },
            });
            window.location.reload();
          } catch (err) {
            console.error(err);
          }
    };
    return(
        <div className='todo rowcard green lighten-2 row p-2' style={{borderRadius: '10px'}}>
            <li className='todo-item card-content white-text col-10'>{todotext}</li>
            <button 
                className='col-2 card-action' 
                style={{borderRadius: '10px'}}
                onClick={() => deleteHandler(todoId)}
            >
                🗑
            </button>
        </div>
    );
}


export default Todo;