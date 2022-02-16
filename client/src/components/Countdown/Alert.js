import React, {useState, useRef, useEffect} from 'react';
import { useMutation } from '@apollo/client';
// import { Modal, Button } from 'react-bootstrap';

import{ UPDATE_COMPLETE_REMINDER } from '../../utils/mutations'

// function Alert({reminders}) {
//     const [status, setStatus] = useState(true);
//     const showModal = () => {
//         setTimeout(() => {
//           setStatus(false);;
//           console.log(status);
//         }, 10000); //Can adjust reminder mini timer here. -KP
//       };
//       showModal();
//      const [show, setShow] = useState(false);
//      const handleClose = () => setShow(false);
//      console.log(handleClose);
//     //  const handleShow = () => setShow(true);

//    return (
//         <div style={{ visibility: status ? 'hidden' : 'visible'}} show={show} onHide={handleClose}>
//     <Modal.Dialog> 
//   <Modal.Header closeButton>
//     <Modal.Title style={{ color: 'turquoise'}}>Time To Walk!</Modal.Title>
//   </Modal.Header>

//   <Modal.Body>
//     <p style={{ color: 'black'}} >This is your reminder to take a 10 minute walk!</p>
//   </Modal.Body>

//   <Modal.Footer>
//     <Button variant="primary" onClick={handleClose} className="btn-floating btn-large red lighten-2" style={{width:'90px', height:'50px'}}>Complete</Button>
//     <Button className="btn-floating btn-large red lighten-2" style={{width:'90px', height:'50px'}}>Skip</Button>
//   </Modal.Footer>
// </Modal.Dialog>
// </div>
// );
// }



const Alert = ({reminders}) => {
    console.log(reminders);
    // const [reminderStatus setReminderStatus] = useState(true);

    // grab each reminder time_interval, make a timer
      const [reminderTimer, setReminderTimer] = useState(0);
      // let interval = useRef();

      const startReminder=(reminder)=>{
        
        setReminderTimer(reminder.time_interval*60*1000)
          reminder._id = setInterval(()=>{
          if(reminderTimer==0){
            // stop timer
            clearInterval(reminder._id);
            setReminderTimer(reminder.time_interval*60*1000);
            // change the reminder to visible

          }else{
            setReminderTimer(reminderTimer-1000);
          }
        },1000); 
      };

      useEffect((reminders) => {
        // automatically call each reminder at the first time
        console.log(reminders)
          reminders.map(reminder=>{
            startReminder(reminder);
            clearInterval(reminder._id);
          })
      });

    // update reminder complete_count
    const [updateReminderCompleteCount, {error, data}] = useMutation(UPDATE_COMPLETE_REMINDER);
    // for complete button
    const updateReminderCount = async (reminder) => {
      console.log(reminder);
      try {
        const { data } = await updateReminderCompleteCount({
            variables: { reminderId: reminder._id },
        });
        console.log('data')
        console.log(data)

        } catch (err) {
        console.error(err);
        }

        // hide the card

        //  next time_interval start
        startReminder();
    }

    //  for skip button
    const skipReminder = async(reminder) => {
      // hide the card
      // next time_interval start
      startReminder();
    }

    return (
      <div>
        {reminders.map(reminder=>(
          <div className="row style={{ visibility: reminderStatus ? 'hidden' : 'visible'}}">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Time to take a {reminder.title} !</span>
                </div>

                <div className="card-action">
                  <button
                    className="mr-2"
                    style={{border:'none',borderRadius: '10px',}}
                    onClick={()=> updateReminderCount(reminder)}
                  >Complete</button>

                  <button
                    className="ml-2"
                    style={{border:'none',borderRadius: '10px',}}
                    onClick={()=>skipReminder(reminder)}
                  >Skip</button>
                </div>

              </div>
            </div>
          </div>
        ))}
        
      </div>
    )
}

export default Alert;