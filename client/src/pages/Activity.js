import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_ACTIVITY } from '../utils/mutations';
import { useParams } from 'react-router-dom';


function Activity () {
  // Grab the username(str) from url 
    const { username } = useParams(); 
    // split the username in the url based on the uppercase letters and generate the user name as user (a string)
    const user = username.split(/(?=[A-Z])/).join(" ");
    // console.log(user);

    // Set useState for calculating the Activity duration
    const [hour, sethourState] = useState("");
    const [minute, setminuteState] = useState("");
    // convert the time in one value (minutes)
    const activityDuration = hour*60+minute;
    // console.log(activityDuration);

    // Set useState for Activity title, and user
    const [formState, setFormState] = useState({
        title:'',
        user: user, 
      });
    
    const [addActivity, { error }] = useMutation(ADD_ACTIVITY);
    // eventListener on the NEXT btn
    const addActivityHandler= async(e)=>{
        e.preventDefault();
      
        try {
            const data  = await addActivity({
              variables: { ...formState, duration:activityDuration },
            });
            
            // console.log(formState);
            // console.log('data');
            // console.log(data);

            const activityId = data.data.addActivity._id 
            // console.log(activityId);
            
            // Redirect on next page
            window.location.href = '/activitysetup/' + activityId;
              
            // Clean out the form
            setFormState({ user: user, title: ''});
            sethourState("");
            setminuteState("");
            
          } catch (err) {
            console.error(err);
          };
    };
    return (
      <main className="flex-column justify-center align-center text-center">
       <div className="m-3 col-10">
         <h1>📚 Name Your Activity</h1>
         <textarea 
         id="icon_prefix2" 
         className="materialize-textarea" 
         placeholder="Type Here" 
         style={{color: 'white'}} 
         value={formState.title} 
         onChange={(e)=> { 
          const activityTitle = e.target.value;
          setFormState({ ...formState, title: activityTitle });
          //  setActivityState(activityTitle);
          }}></textarea>
       </div>

        {/* Setup Hour */}
       <div className="m-3">
        <h1>⏲ Set Your Timer</h1>
        <div className= "d-flex  m-3 ">
        <input 
        type="number" 
        className="input-group-text" 
        placeholder="00"  
        value={hour} 
        onChange={(e)=>{
        const hourContent = e.target.value;
        // Convert Str to Int based on the Activity Model
        sethourState(parseInt(hourContent));
          }}></input>
        <span className="">hour</span>

        {/* Setup Minute */}
        <input 
        type="number" 
        className="input-group-text" 
        placeholder="00" 
        value={minute}     
        onChange={(e)=>{
        const minuteContent = e.target.value;
        // Convert Str to Int based on the Activity Model
        setminuteState(parseInt(minuteContent));
          }}></input>
        <span className="">min</span>
        </div>
       </div>

       <div> 
          <button 
            className="btn-floating btn-large red lighten-2" 
            style={{width:'100px', height:'100px'}} 
            onClick={addActivityHandler}
            >
              NEXT
            </button>
       </div>

      </main>
    );
}
export default Activity;
