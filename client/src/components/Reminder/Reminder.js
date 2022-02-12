import React from 'react';
const Reminder = ({text, reminder, reminders, setReminders}) => {
    // delete func for remove a reminder
    const deleteHandler = () => {
        setReminders(reminders.filter((el) => el.id !== reminder.id))
    };
    return(
        <div className='reminder rowcard green lighten-2 row p-2' style={{borderRadius: '10px'}}>
            <li className='reminder-item card-content white-text col-10'>{text}</li>
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


export default Reminder;