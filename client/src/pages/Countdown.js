import React, { useState }from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import Timer from '../components/Countdown/Timer';
import ToDosForActivity from '../components/Countdown/ToDosForActivity';
// import { GET_SINGLE_ACTIVITY } from '../utils/queries';

const Countdown = () =>{
    // grab the activityId here. and pass to the component below
    const activityId = "62090c30b9a9ef3fddb08f75";
    const duration = 1;
      

    return (
        <main>
            {/* CountdownTimer */}
                <Timer duration={duration} activityId={activityId}/>
                
            {/* Todo List todos={todos} */}
                {/* <ToDosForActivity /> */}

            {/* Reminder Popup thing */}
                {/* Add a visible and invisible attribtue for the reminder card*/}
        </main>
        
    )
}

export default Countdown;