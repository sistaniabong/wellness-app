import React, { useState }from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import Timer from '../components/Countdown.js/Timer';
import ToDosForActivity from '../components/Countdown.js/ToDosForActivity';
import { GET_SINGLE_ACTIVITY } from '../utils/queries';

const Countdown = () =>{
    // grab the activityId here. and pass to the component below
    const activityId = "62090c30b9a9ef3fddb08f75";

    const { loading, data } = useQuery(GET_SINGLE_ACTIVITY,
        {
          variables: { activityId: activityId },
        }
        
    );
      console.log(data);
      const duration = data?.duration || [];
      console.log('duration:')
      console.log(duration)
      const todos = data?.todos || [];
      console.log('todos:')
      console.log(todos);

    return (
        <main>
            {/* CountdownTimer */}
                <Timer duration={duration}/>
                
            {/* Todo List */}
                <ToDosForActivity todos={todos}/>

            {/* Reminder Popup thing */}
                {/* Add a visible and invisible attribtue for the reminder card*/}
        </main>
        
    )
}

export default Countdown;