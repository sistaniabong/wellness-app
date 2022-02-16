import React, { useEffect, useRef, useState }from 'react';
import { useMutation } from '@apollo/client';

const Timer = ({duration, activityId}) =>{
    // console.log('init countdown')
    // console.log(duration)
    // console.log(activityId)
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] =useState("00");
    const [timerSeconds, setTimerSeconds] =useState("00");
    // transfer duration to milliseconds, and countdown later
    const [distance, setDistanceState] = useState(duration*60*1000)
    // console.log('distance')
    // console.log(distance)
    let interval = useRef();
    const startTimer = () => {
        interval = setTimeout(()=>{
            // transfer the time to milliseconds 
            const second = 1000;
            const minute = second * 60;
            const hour = minute *60;
            // calculate hours, minutes, and seconds
            const hours = Math.floor(distance/hour); 
            const minutes = Math.floor((distance%hour)/minute);
            const seconds = Math.floor((distance%minute)/second);
            // console.log(distance);
            // console.log(hours);
            // console.log(minutes);
            // console.log(seconds);

            if (distance < 0){
                // stop timer
                clearInterval(interval.current);
                setDistanceState(0)
                setTimerHours("00")
                setTimerMinutes("00")
                setTimerSeconds("00")
                // jump to the summary page
                window.location.href = '/summary/' + activityId;
            }else{
                // update timer
                setDistanceState(distance-1000)
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        },1000);      
       
    };

    useEffect(() => {
        startTimer();
        return () => {clearInterval(interval)}
     })

    return(
        <main>
            <div className="justify-center align-center text-center">
                <h1>🕰 Countdown Timer</h1>
                <div 
                    className="d-flex justify-content-around p-3 m-3"
                    style={{borderStyle: "double", borderRadius: "10px"}}
                >
                    <h2 type="number">{timerHours}</h2>
                    <h2>:</h2>
                    <h2 type="number">{timerMinutes}</h2>
                    <h2>:</h2>
                    <h2 type="number">{timerSeconds}</h2>
                </div>  
            </div>
            
        </main>
        
    )
};

export default Timer;