import React, { useEffect, useState } from "react";

function Activity ({activity, setActivity, activityState, setActivityState}) {
    const addActivityName=(e)=>{
        e.preventDefault();
        setActivity([
            ...activity, { name: activityState, id: `${activityState}` }
        ])
        setActivityState("");
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
                     value={activityState}
                     onChange={(e)=>{
                         const todoContent = e.target.value;
                         setActivityState(todoContent);
                     }}
                     >
                     </textarea> <button className="waves-effect waves-light btn-floating"
                     id="add-todo"
                     style={{borderRadius: '10px' }} 
                     onClick={addActivityName}
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
  