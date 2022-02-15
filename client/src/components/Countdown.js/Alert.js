import {React, useState, useEffect} from 'react';
import { Modal, Button } from 'react-bootstrap';

function Alert() {
    const [status, setStatus] = useState(true);
    const showModal = () => {
        setTimeout(() => {
          setStatus(false);;
          console.log(status);
        }, 10000); //Can adjust reminder mini timer here. -KP
      };
      showModal();
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     console.log(handleClose);
    //  const handleShow = () => setShow(true);

   return (
        <div style={{ visibility: status ? 'hidden' : 'visible'}} show={show} onHide={handleClose}>
    <Modal.Dialog> 
  <Modal.Header closeButton>
    <Modal.Title style={{ color: 'turquoise'}}>Time To Walk!</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p style={{ color: 'black'}} >This is your reminder to take a 10 minute walk!</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" onClick={handleClose} className="btn-floating btn-large red lighten-2" style={{width:'90px', height:'50px'}}>Complete</Button>
    <Button className="btn-floating btn-large red lighten-2" style={{width:'90px', height:'50px'}}>Skip</Button>
  </Modal.Footer>
</Modal.Dialog>
</div>
);
}
export default Alert;