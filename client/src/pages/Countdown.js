import React, { useState }from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import Timer from '../components/Countdown.js/Timer';
import Alert from '../components/Countdown.js/Alert';
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
      const reminders = data?.reminders || [];
      console.log('reminder:')
      console.log(reminders);

    return (
        <main>
            {/* CountdownTimer */}
                <Timer duration={duration}/>
                
            {/* Todo List */}
                <ToDosForActivity todos={todos}/>

            {/* Reminder Popup thing */}
                <Alert  reminders={reminders}/>
                {/* Add a visible and invisible attribtue for the reminder card*/}
        </main>
        
    )
}

export default Countdown;