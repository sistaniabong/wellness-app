import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_REMINDER } from '../../utils/mutations';
import { GET_SINGLE_ACTIVITY_REMINDERS } from '../../utils/queries';
import { Link, useParams } from 'react-router-dom';


// const Reminder = ({ setActivityRemindersState, reminderId, text, index, reminderArray }) => {
const Reminder = ({ reminderId, text }) => {
  
    console.log('init render reminder')

    console.log('reminderId:')
    console.log(reminderId)

    const { activityId } = useParams();

    console.log(activityId)


    // delete func for remove a reminder
    // const [deleteReminder, { error, data }] = useMutation(REMOVE_REMINDER);

    const [deleteReminder, { error }] = useMutation(REMOVE_REMINDER, {
        update(cache, { data: { deleteReminder } }) {
            try {
                // cache.writeQuery({
                //   query: GET_SINGLE_ACTIVITY_REMINDERS,
                //   variables: {
                //     activityId: activityId,
                //   },
                //   data: { activityReminders: [addReminder, ...activityReminders] },
                // });

                // cache.modify({
                //     id: cache.identify(reminderId),
                //     fields: {
                //         comments(existingCommentRefs, { DELETE }) {
                //           return DELETE;
                //         },
                //       },
                //   });

                // cache.delete(reminderId)

            } catch (e) {
                console.error(e);
            }
        },
    });



    const deleteHandler = async (reminderId) => {
        // setReminders(reminders.filter((el) => el.id !== reminder.id))
        try {
            console.log('init remove reminder')
            console.log("reminderId:")
            console.log(reminderId)
            const { data } = await deleteReminder({
                variables: { reminderId: reminderId },
            });
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div key={reminderId} className='reminder rowcard green lighten-2 row p-2' style={{ borderRadius: '10px' }}>
            <li className='reminder-item card-content white-text col-10'>{text}</li>
            <button
                className='col-2 card-action'
                style={{ borderRadius: '10px' }}
                // onClick={deleteHandler}
                onClick={() => {
                    // const temp_array= reminderArray.slice()
                    // temp_array.splice(index,1)
                    // setActivityRemindersState(temp_array)
                    deleteHandler(reminderId)

                }}
            >
                🗑
            </button>
        </div>
    );
}


export default Reminder;