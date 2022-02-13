import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_REMINDER } from '../../utils/mutations';

// const Reminder = ({reminder}) => {
//     console.log('reminder:')
//     console.log(reminder)

//     const text=`${reminder.title} every ${reminder.time_interval} mins.`
//     console.log(text)
//     const reminderId = reminder._id
//     console.log(reminderId)


//     // delete func for remove a reminder
//     const [deleteReminder, { error, data }] = useMutation(REMOVE_REMINDER);

//     const deleteHandler = async(reminderId) => {
//         // setReminders(reminders.filter((el) => el.id !== reminder.id))
//         try {
//             console.log('init remove reminder')
//             console.log("reminderId:")
//             console.log(reminderId)
//             const { data } = await deleteReminder({
//               variables: { reminderId:reminderId },
//             });
//             window.location.reload();
//           } catch (err) {
//             console.error(err);
//           }
//     };
//     return(
//         <div className='reminder rowcard green lighten-2 row p-2' style={{borderRadius: '10px'}}>
//             <li key = {reminderId} className='reminder-item card-content white-text col-10'>{text}</li>
//             <button 
//                 className='col-2 card-action' 
//                 style={{borderRadius: '10px'}}
//                 // onClick={deleteHandler}
//                 onClick={() => deleteHandler(reminderId)}
//             >
//                 🗑
//             </button>
//         </div>
//     );
// }



const Reminder = ({reminderId, text}) => {
    console.log('reminderId:')
    console.log(reminderId)

    // const text=`${reminder.title} every ${reminder.time_interval} mins.`
    // console.log(text)
    // const reminderId = reminder._id
    // console.log(reminderId)


    // delete func for remove a reminder
    const [deleteReminder, { error, data }] = useMutation(REMOVE_REMINDER);

    const deleteHandler = async(reminderId) => {
        // setReminders(reminders.filter((el) => el.id !== reminder.id))
        try {
            console.log('init remove reminder')
            console.log("reminderId:")
            console.log(reminderId)
            const { data } = await deleteReminder({
              variables: { reminderId:reminderId },
            });
            window.location.reload();
          } catch (err) {
            console.error(err);
          }
    };
    return(
        <div key = {reminderId} className='reminder rowcard green lighten-2 row p-2' style={{borderRadius: '10px'}}>
            <li className='reminder-item card-content white-text col-10'>{text}</li>
            <button 
                className='col-2 card-action' 
                style={{borderRadius: '10px'}}
                // onClick={deleteHandler}
                onClick={() => deleteHandler(reminderId)}
            >
                🗑
            </button>
        </div>
    );
}


export default Reminder;