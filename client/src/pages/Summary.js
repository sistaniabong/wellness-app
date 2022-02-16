import React, { useState, useRef, useEffect } from "react";
import { todoList } from '../components/ToDoList/ToDoList';
import Confetti from "react-confetti";
// import ReactCanvasConfetti from 'react-canvas-confetti';
import { GET_SINGLE_ACTIVITY } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';




function Summary() {
  // const confettiStyle = {
  //     position: 'fixed',
  //     pointerEvent: 'none',
  //     with: '100%',
  //     height: '100%',
  //     top: 0,
  //     left: 0

  const width = '390px';
  const height = '844px';

  const { activityId } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_ACTIVITY,
    {
      variables: { activityId: activityId },
    }
  );

  const activity = data?.activity || [];

  // todo complete
  const todos = activity.todos;
  console.log(todos)

  const reminders = activity.reminders;
  console.log(reminders)
  // const reminder = reminders[0];


  let count = 0;
  let complete_todo = [];
  const x = todos?.map(todo => {
    if (todo.status === true) {
      complete_todo.push(todo)
      count++
    }
  });
  console.log(count)
  console.log(complete_todo)


  const y = reminders?.map(function (reminder) {
    return reminder.complete_count;
  });

  console.log(y, 'complete count')
  let sum = 0;

  for (let i = 0; i < y?.length; i++) {
    sum += y[i];
  }
  console.log(sum, 'sum')


  // const [height, setHeight] = useState(null);
  // const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  // useEffect(() => {
  //   setHeight(confettiRef.current.clientHeight);
  //   setWidth(confettiRef.current.clientWidth);
  // }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }

  return (
    <main className="flex-column justify-center align-center text-center">
      <div
        onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        className="confetti-wrap"
        ref={confettiRef}>
        <h1>{activity.title} Completed!</h1>
        <Confetti
          recycle={show}
          numberOfPieces={1000}
          width={width}
          height={height}
        />
      </div>
      <div>
        {/* <h3>Cycle Completed!</h3> */}
        <ul>
          <h2 className="m-2 p-2" style={{border:'double', borderRadius:'25px'}}> 👉 {activity.duration} minutes of productivity ! </h2>
          {reminders?.map(reminder=>(
            <h2 className="m-2 p-2" style={{border:'double', borderRadius:'25px'}}> 😄 {reminder.title} for every {reminder.time_interval} minutes !</h2>
          ))}
          <h2 className="m-2 p-2" style={{border:'double', borderRadius:'25px'}}> 🎯 Total tasks completed: {count} !</h2>
          <h2 className="m-2 p-2" style={{border:'double', borderRadius:'25px'}}>📝 Todos completed:
            <ul>
              {complete_todo.map(item => (
                <li> ✅ {item.name}</li>
              ))}
            </ul>
          </h2>

        </ul>
      </div>
      <div>
        {/* Link to= {`/dashboard/${user.username}`}*/}
        <button className="btn-floating btn-large red lighten-2" style={{ width: '100px', height: '100px' }}>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'>PUBLISH</Link>
        </button>
      </div>
    </main>
  );
}
export default Summary;
