import React, { useEffect, useState } from "react";
import { useMutation } from '@apollo/client';

import { ADD_ACTIVITY } from '../utils/mutations';
import { Redirect, useParams } from 'react-router-dom';


function Activity () {
    const { username } = useParams(); //grab the username from url
    console.log(username)

    const [formState, setFormState] = useState({
        title:'',
        duration: 60, //change this '' once we have the value of the form 
        user: username, //pass the username to the user field
      });
    const [addActivity, { error, data }] = useMutation(ADD_ACTIVITY);
    
    const addActivityHandler= async(e)=>{

        e.preventDefault();
        try {
            console.log('init add reminder')
            const { data } = await addActivity({
              variables: { ...formState },
            });
            console.log(data)
            const activityId= data._id //to get _id 

            setFormState({ user: '', title: '', duration:'' });
            // need to redirect to /activity/:activityId
            
          } catch (err) {
            console.error(err);
          }

        // setActivity([
        //     ...activity, { name: activityState, id: `${activityState}` }
        // ])
        // setActivityState("");
    };
    return (
      <main className="flex-column justify-center align-center text-center">
       <div>
         <h3>Name Your Activity!</h3>
         <textarea
                     id="icon_prefix2" 
                     className="materialize-textarea" 
                     placeholder="Type Here"
                     style={{color: 'white'}} 
                     value={formState.title}
                     onChange={(e)=>{
                         const todoContent = e.target.value;
                         setFormState({ ...formState, title: todoContent });
                        //  setActivityState(todoContent);
                     }}
                     >
                     </textarea> <button className="waves-effect waves-light btn-floating"
                     id="add-todo"
                     style={{borderRadius: '10px' }} 
                     onClick={addActivityHandler}
                     >Done!</button>
       </div>
       <div className>
       <h3>Set Your Timer</h3>
       </div> 
       <div> 
           <button className="btn-floating btn-large red lighten-2" style={{width:'100px', height:'100px'}}>NEXT</button>
       </div>
      </main>
    );
}
export default Activity;
  