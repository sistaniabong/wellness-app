import React, { useState, useRef, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_COMPLETE_REMINDER } from '../../utils/mutations'

const Alert = ({ reminders }) => {
  // Grab a single reminder for demo purpose
  // console.log(reminders);
  // hide the reminder when the page start
  const [reminderStatus, setReminderStatus] = useState(false);

  let startReminderInterval = useRef();
  let reminderStatusInterval;

  const startReminder = () => {
    startReminderInterval = setInterval(() => {
      // show card function
      setReminderStatus(true);
      // stop the timer for 2 seconds for the reminder
      reminderStatusInterval = setTimeout(()=>{
        setReminderStatus(false);
      }, 2000);
      // clearTimeout(reminderStatusInterval);
    }, 58000);
  }



  useEffect(() => {
    // call the startReminder when the page start 
    startReminder();
  });

  return (
    <div>
      {reminders?.map(reminder => (
        <div className={`row ${reminderStatus ? '' : 'hidden'}`}>
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Time to take a {reminder.title} !</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Alert;