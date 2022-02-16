import React, {useState, useRef, useEffect} from 'react';
import { useMutation } from '@apollo/client';
import{ UPDATE_COMPLETE_REMINDER } from '../../utils/mutations'

const Alert = ({reminders}) => {
  // Grab a single reminder for demo purpose
    // console.log(reminders);
    // hide the reminder when the page start
      const [reminderStatus, setReminderStatus] = useState(false);

      let reminderInterval = useRef();
      const startReminder=()=>{
        reminderInterval = setInterval(()=>{
          // show card function
          setReminderStatus(true);
          // stop the timer for reminder
          clearInterval(reminderInterval);
        },10000);
      };

      useEffect(() => {
        // call demo reminder at the first time 
        startReminder();
      });

    // update reminder complete_count
    const [updateReminderCompleteCount, {error, data}] = useMutation(UPDATE_COMPLETE_REMINDER);
    // for complete button
    const updateReminderCount = async (reminder) => {
      console.log(reminder);
      try {
        const { data } = await updateReminderCompleteCount({
            variables: { reminderId: reminder._id },
        });
        console.log('data')
        console.log(data)

        } catch (err) {
        console.error(err);
        }
        // hide the card
        setReminderStatus(false);
        //  next time_interval start
        startReminder();
    }

    //  for skip button
    const skipReminder = async(reminder) => {
      // hide the card
      setReminderStatus(false);
      // next time_interval start
      startReminder();
    }

    return (
      <div>
        {reminders?.map(reminder=>(
          <div className={`row ${reminderStatus ?  '' : 'hidden' }`}>
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Time to take a {reminder.title} !</span> 
                </div>
                <div className="card-action">
                  <button
                    className="mr-2"
                    style={{border:'none',borderRadius: '10px',}}
                    onClick={()=> updateReminderCount(reminder)}
                  >Complete</button>
                  <button
                    className="ml-2"
                    style={{border:'none',borderRadius: '10px',}}
                    onClick={()=>skipReminder(reminder)}
                  >Skip</button>
                </div>
              </div>
            </div>
          </div>
        ))} 
      </div>
    )
}

export default Alert;