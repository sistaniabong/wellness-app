import React, { useState }from 'react';
import { Link , useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Timer from '../components/Countdown/Timer';
import ToDosForActivity from '../components/Countdown/ToDosForActivity';
import { GET_SINGLE_ACTIVITY } from '../utils/queries';
import Alert from '../components/Countdown/Alert'

const Countdown = () =>{
    // grab the activityId here. and pass to the component below
    const { activityId } = useParams();
    console.log(activityId)

    const { loading, data } = useQuery(GET_SINGLE_ACTIVITY,
        {
          variables: { activityId: activityId },
        }
    );
      console.log(data);
      const duration = data?.activity.duration || [];
      console.log('duration:')
      console.log(duration)
      const todos = data?.activity.todos || [];
      console.log('todos:')
      console.log(todos);
      const reminders = data?.activity.reminders || [];
      console.log('reminder:')
      console.log(reminders);
    
    // Grab a single reminder for demo purpose
        // const demoReminder = reminders[0];
        // console.log(reminders[0])
    return (
        <main>
            {/* CountdownTimer */}
                <Timer duration={duration} activityId={activityId}/>
                
            {/* Todo List todos={todos} */}
                <ToDosForActivity 
                    todos={todos}
                />

            {/* Reminder Popup thing */}
                <Alert  reminders={reminders} />
                {/* Add a visible and invisible attribtue for the reminder card*/}
        </main>
        
    )
}

export default Countdown;