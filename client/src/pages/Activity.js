// import React, { useEffect, useState } from "react";
// import { useMutation } from '@apollo/client';
// import { ADD_ACTIVITY } from '../utils/mutations';
// import { Redirect, useParams } from 'react-router-dom';


// function Activity () {
//     const { username } = useParams(); //grab the username from url
//     console.log(username)
//     const [hour, sethourState] = useState(0)
//     const [minute, setminuteState] = useState(0)
//     console.log(typeof hour);
//     // const convertDuration = (hour, minute) => {
//     //   let example= 123
//     //   timer = Math.floor(hour/60)
//     //   var minutes = time % 60
//     //   console.log(timer)
//     //   console.log(minutes)
//     // }
//     const [formState, setFormState] = useState({
//         title:'',
//         duration: '', //change this '' once we have the value of the form 
//         user: username, //pass the username to the user field
//       });
    
//     const addActivityHandler= async(e)=>{
//         e.preventDefault();
//         const [addActivity, { error }] = useMutation(ADD_ACTIVITY);
//         try {
//             console.log('init add activity name')
//             const { data } = await addActivity({
//               variables: { ...formState },
//             });
//             console.log('data');
//             console.log(data)
//             const activityId= data._id //to get _id 

//             setFormState({ user: '', title: '', duration:'' });
//             // need to redirect to /activitysetup/:activityId
//             // redirectHandler();
//           <Redirect to= {`/activitysetup/${activityId}`} />
//           } catch (err) {
//             console.error(err, );
//           };
//     };
//     return (
//       <main className="flex-column justify-center align-center text-center">
//        <div>
//          <h3>Name Your Activity!</h3>
//          <textarea id="icon_prefix2" className="materialize-textarea" placeholder="Type Here" style={{color: 'white'}} value={formState.title} onChange={(e)=> 
//          { 
//           const activityTitle = e.target.value;
//           setFormState({ ...formState, title: activityTitle });
//           //  setActivityState(activityTitle);
//       }}></textarea>
//        </div>

//        <div>
//        <h3>Set Your Timer</h3>
//        <div className= "d-flex  m-5 ">
//        <input type="number" className="input-group-text" placeholder="00" aria-label="hour" value={hour} 
//        onChange={(e)=>{
//        const hourContent = e.target.value;
//       sethourState(hourContent);
//          }}></input>
//        <span className="">hour</span>
//        <input type="number" className="input-group-text" placeholder="00" aria-label="min" value={minute}     
//        onChange={(e)=>{
//        const minuteContent = e.target.value;
//       setminuteState(minuteContent);
//          }}></input>
//        <span className="">min</span>
//        </div>
//        </div>

//        <div> 
//            <button className="btn-floating btn-large red lighten-2" style={{width:'100px', height:'100px'}} onClick={addActivityHandler}>NEXT</button>
//        </div>
//       </main>
//     );
// }
// export default Activity;