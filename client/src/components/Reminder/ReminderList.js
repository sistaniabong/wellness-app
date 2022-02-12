import React from 'react';
import { useMutation } from '@apollo/client';
import Reminder from './Reminder';

const ReminderList=({reminders, setReminders})=>{
    // console.log(reminders);

    return(
        <div className='reminders-container'>
            <ul className='reminders-list'>
                {reminders.map(reminder => (
                    <Reminder 
                        key={reminder.id} 
                        text={`${reminder.title} every ${reminder.time_interval} mins.`}
                        reminders={reminders} 
                        setReminders={setReminders}
                        reminder={reminder}
                    />
                ))}
                
            </ul>  
        </div> 
    )
}

export default ReminderList;