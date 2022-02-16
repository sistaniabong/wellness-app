import React from 'react';
import { useMutation } from '@apollo/client';
import Reminder from './Reminder';

const ReminderList=({reminders})=>{
    console.log('reminders:')
    console.log(reminders)
    

    // if (!reminders.length) {
    //     return <h3></h3>;
    // }
    return(
        <div className='reminders-container'>
            <ul className='reminders-list'>
                {reminders.map((reminder, index, reminder_array) => (
                    <Reminder 
                        // setActivityRemindersState={setActivityRemindersState}
                        reminderId={reminder._id} 
                        text={`${reminder.title} every ${reminder.time_interval} mins.`}
                        // index={index}
                        // reminderArray={reminder_array}
                    />
                ))}
                
            </ul>  
        </div> 
    )
}


// const ReminderList=({reminders})=>{
//     console.log('reminders:')
//     console.log(reminders)
    

//     if (!reminders.length) {
//         return <h3>No reminders yet</h3>;
//     }
//     return(
//         <div className='reminders-container'>
//             <ul className='reminders-list'>
//                 {reminders.map(reminder => (
//                     <Reminder 
//                         reminder = {reminder}
//                         // key={reminder._id} 
//                         // text={`${reminder.title} every ${reminder.time_interval} mins.`}

//                     />
//                 ))}
                
//             </ul>  
//         </div> 
//     )
// }

export default ReminderList;