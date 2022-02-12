import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';

const ReminderForm = ({ reminders, setReminders, typeState, setTypeState, timeState, setTimeState}) =>{
    const addReminderHandler = (e) =>{
      // grab the option value
      // set a card says "{types} every {times}" + a remove button (set a remove function) 
      // showed in <div className='reminderList'>
        e.preventDefault();
        // grab reminder id

        // setReminders([
        //     ...reminders, { title: typeState, time_interval: timeState, id: `${typeState}+${timeState}`}
        // ])
        setReminders([
          ...reminders, { title: typeState, time_interval: timeState}
        ])

        
        setTypeState("");
        setTimeState("");
    };
        console.log(reminders);
    return(
        <div>
            <h1 >⏳ Reminder Setup</h1>
              <div className="row justify-content-around">
                
                  <select 
                    id="types" 
                    value={typeState}
                    className="col-5 p-2" 
                    onChange={(e)=>{
                      const selectedType = e.target.value;
                      setTypeState(selectedType);
                    }}
                    >
                    <option value="">Types</option>
                    <option value="Drink">Drink</option>
                    <option value="Walk">Walk</option>
                    <option value="Relax">Relax</option>
                  </select>

                  <select 
                    id="times" 
                    value={timeState}
                    className="col-5 p-2"
                    onChange={(e)=>{
                      const selectedTime = e.target.value;
                      setTimeState(selectedTime);
                    }}>
                    <option value="">Times</option>
                    <option value="0.08">5 Sec</option>
                    <option value="5"> 5 Mins</option>
                    <option value="15"> 15 Mins</option>
                    <option value="30"> 30 Mins</option>
                    <option value="60"> 1 Hour</option>
                  </select>
            
                  <button 
                    className="m-1 waves-effect waves-light btn-floating" 
                    id="add-reminder" 
                    style={{borderRadius: '10px' }}
                    onClick={addReminderHandler}  
                  >
                    Add Reminder
                  </button>
              </div>
          </div>
    )
}

export default ReminderForm;