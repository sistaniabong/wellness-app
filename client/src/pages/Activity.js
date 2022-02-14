import React, { useEffect, useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_ACTIVITY } from '../utils/mutations';
import { Redirect, BrowserRouter as Router, Route, Switch, Link, useParams, useHistory } from 'react-router-dom';
import Setup from "./Setup";

function Activity () {
    const { username } = useParams(); //grab the username from url
    // console.log(username);
    // split the username in the url based on the uppercase letters and generate the user name as user (a string)
    const user = username.split(/(?=[A-Z])/).join(" ");
    // console.log(user);
    const [hour, sethourState] = useState("");
    const [minute, setminuteState] = useState("");
    // console.log(typeof hour);
    // convert the time in one value (minutes)
    const activityDuration = hour*60+minute;
    // console.log(activityDuration);

    // error fixed: the duration is an integer in the Model, not a string
    const [formState, setFormState] = useState({
        title:'',
        user: user, //pass the username to the user field
      });

    const [addActivity, { error }] = useMutation(ADD_ACTIVITY);

    const addActivityHandler= async(e)=>{
        e.preventDefault();
        // console.log("What!")

        try {
            // console.log('init add activity name')
           
            const data  = await addActivity({
              variables: { ...formState, duration:activityDuration },
            });
            console.log('data');
            console.log(data);
            const activityId = data.data.addActivity._id //to get _id 
            console.log(activityId);
            
            // Couldn't figure out...
            const RoutedApp =(activityId)=>{
              return(
                <Router>
                <Switch>
                  <Route exact path='/' render={()=>(<Redirect to={`/activitysetup/${activityId}`} />)} />
                </Switch>
              </Router>
                )
            }
              
              
            RoutedApp(activityId);
          
            // <Redirect to={`/activitysetup/${activityId}`}> 
            //   <Setup activityId={activityId} /> 
            // </Redirect>
            setFormState({ user: user, title: ''});
            sethourState("");
            setminuteState("");
            // need to redirect to /activitysetup/:activityId
            // redirectHandler();
            // <Redirect to={`/activitysetup/${activityId}`}  />

          } catch (err) {
            console.error(err);
          };
    };
    return (
      <main className="flex-column justify-center align-center text-center">
       <div className="m-3 col-10">
         <h1>Name Your Activity!</h1>
         <textarea id="icon_prefix2" className="materialize-textarea" placeholder="Type Here" style={{color: 'white'}} value={formState.title} onChange={(e)=> 
         { 
          const activityTitle = e.target.value;
          setFormState({ ...formState, title: activityTitle });
          //  setActivityState(activityTitle);
      }}></textarea>
       </div>

       <div className="m-3">
        <h1>Set Your Timer</h1>
        <div className= "d-flex  m-3 ">
        <input type="number" className="input-group-text" placeholder="00" aria-label="hour" value={hour} 
        onChange={(e)=>{
        const hourContent = e.target.value;
        //  console.log(e.target.value);
        //  console.log(typeof hourContent);
        //  console.log(parseInt(hourContent));
        sethourState(parseInt(hourContent));
          }}></input>
        <span className="">hour</span>
        <input type="number" className="input-group-text" placeholder="00" aria-label="min" value={minute}     
        onChange={(e)=>{
        const minuteContent = e.target.value;
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
