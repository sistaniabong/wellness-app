import React, { useEffect, useRef, useState }from 'react';
import { useMutation } from '@apollo/client';

const Timer = ({duration}) =>{
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] =useState('00');
    const [timerSeconds, setTimerSeconds] =useState('00');
    
    let interval = useRef();
    // Connect with the Query, get the activity, and transfer the duration to milliseconds (duration*60*1000)
    const startTimer = () => {
        
            // distance is the duration of the activity
            // set duration=125.5 (2h5min30s) for example
            const distance = 125.5;
            const hours = Math.floor(distance/60); //2
            const minutes = Math.floor(distance%60);// distance%60 == 5.5 floor is 5
            const seconds = Math.floor(distance%60%minutes*60);// 5.5/5*60=30s

            if (distance < 0){
                // stop timer
                clearInterval(interval);
            }else{
                // update timer
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
       
    };

    useEffect(() => {
        const interval = setInterval(startTimer, 1000);
        return () => clearInterval(interval)
     })
    // useEffect(() => {
    //     startTimer();
    //     return() => {
    //         clearInterval(interval);
    //     }
    // })

    return(
        <main>
            <h1>🕰 Countdown Timer</h1>
            <div 
                className="d-flex justify-content-around p-3 m-3"
                style={{borderStyle: "double", borderRadius: "10px" }}
            >
                <span type="hour">{timerHours}</span>
                <span>:</span>
                <span type="minute">{timerMinutes}</span>
                <span>:</span>
                <span type="second">{timerSeconds}</span>
            </div>
            
            
        </main>
        
    )
};

export default Timer;

 {/* redirect to the summary page */}