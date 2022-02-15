import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_REMINDER } from '../../utils/mutations';
import { GET_SINGLE_ACTIVITY_REMINDERS } from '../../utils/queries';

// const ReminderForm = ({ activityId, reminders, setReminders, typeState, setTypeState, timeState, setTimeState}) =>{

const ReminderForm = ({ activity }) =>{
  console.log('init adding reminder form')

  const [formState, setFormState] = useState({
    activityId: activity,
    title:'',
    time_interval:0,
  });
  
  // Set up  addReminder mutation with an option to handle errors
  const [addReminder, { error, data }] = useMutation(ADD_REMINDER);
  
  // SB - apollo cache to add later
  // const [addReminder, { error }] = useMutation(ADD_REMINDER, {
  //   update(cache, { data: { addReminder } }) {
  //     try {
  //       const { reminders } = cache.readQuery({ query: GET_SINGLE_ACTIVITY_REMINDERS });

  //       cache.writeQuery({
  //         query: GET_SINGLE_ACTIVITY_REMINDERS,
  //         data: { reminders: [addReminder, ...reminders] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  
  const addReminderHandler = async (e) =>{
    
      // grab the option value
      // set a card says "{types} every {times}" + a remove button (set a remove function) 
      // showed in <div className='reminderList'>
        e.preventDefault();
        console.log("addReminderHandler")

        // grab reminder id

        // setReminders([
        //     ...reminders, { title: typeState, time_interval: timeState, id: `${typeState}+${timeState}`}
        // ])
        // setReminders([
        //   ...reminders, { activity:activityId, title: typeState, time_interval: timeState}
        // ])
        // setFormState({ ...formState })
        try {
          console.log('init add reminder')
          const { data } = await addReminder({
            variables: { ...formState },
          });
          setFormState({ activityId: '', title: '', time_interval:0 });
          window.location.reload();
          
        } catch (err) {
          console.error(err);
        }


        
        // setTypeState("");
        // setTimeState("");
    };
        // console.log(reminders);


    return(
        <div>
            <h1 >⏳ Reminder Setup</h1>
              <div className="row justify-content-around">
                
                  <select 
                    id="types" 
                    value={formState.title}
                    className="col-5 p-2" 
                    // onChange={(e)=>{
                    //   const selectedType = e.target.value;
                    //   setTypeState(selectedType);
                    // }}
                    onChange={(e)=>{
                      const selectedType = e.target.value;
                      setFormState({ ...formState, title: selectedType });
                    }}
                    >
                    <option value="">Types</option>
                    <option value="Drink">Drink</option>
                    <option value="Walk">Walk</option>
                    <option value="Relax">Relax</option>
                  </select>

                  <select 
                    id="times" 
                    value={formState.time_interval}
                    className="col-5 p-2"
                    // onChange={(e)=>{
                    //   const selectedTime = e.target.value;
                    //   setTimeState(selectedTime);
                    // }}
                    onChange={(e)=>{
                      const selectedTime = parseInt(e.target.value);
                      setFormState({ ...formState, time_interval: selectedTime });
                    }}
                    >
                    <option value="">Times</option>
                    {/* <option value="5">5 Sec</option>
                    <option value='10'>10 Sec</option>
                    <option value="300"> 5 Mins</option>
                    <option value="900"> 15 Mins</option>
                    <option value="1800"> 30 Mins</option>
                    <option value="3600"> 1 Hour</option> */}
                    <option value="1">1 Min</option>
                    <option value="5"> 5 Mins</option>
                    <option value="15"> 15 Mins</option>
                    <option value="30"> 30 Mins</option>
                    <option value="60"> 1 Hour</option>
                  </select>
            
                  <button 
                    className="m-3 waves-effect waves-light btn-floating" 
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