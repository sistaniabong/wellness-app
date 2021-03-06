import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';



const Signup = () => {
  
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const [formState, setFormState] = useState({ username: "", email: "", password: "" }); // change to username?
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // handles signup submit btn
  const handleSignupBtn = async (event) => {
    event.preventDefault();
    console.log('init handleSignupBtn')

    try {
      console.log('signup')
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data)
      console.log(data.signup.token)

      Auth.login(data.signup.token);
    } catch (e) {
      console.error(e);
    }
    // const token = mutationResponse.data.addUser.token;
    // //had to comment this out because Auth is not added yet
    // // Auth.login(token);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <button
        className="m-6 waves-effect waves-light btn-floating"
        style={{ borderRadius: "10px", width: "90px", height: "auto" }}
        onClick={showModal}
        id="signUpBtn"
      >
        Sign up
      </button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>SIGN UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Username
              </span>
              <input
                type="username"
                name="username"
                id="username"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={formState.username}
                onChange={handleChange}
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Email
              </span>
              <input
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Password
              </span>
              <input
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder=""
                name="password"
                type="password"
                id="pwd"
                value={formState.password}
                onChange={handleChange}
              ></input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="m-6 waves-effect waves-light btn-floating"
            style={{ borderRadius: "10px", width: "65px" }}
            onClick={hideModal}
          >
            Cancel
          </button>
          {/* <Link
            className="m-6 waves-effect waves-light btn-floating"
            style={{ borderRadius: "10px", width: "50px" }}
            type="submit" to={'/dashboard'}
          >
            Signup
          </Link> */}

        <button
            className="m-6 waves-effect waves-light btn-floating"
            style={{ borderRadius: "10px", width: "50px" }}
            // type="submit" 
            onClick={handleSignupBtn}
          >
            Signup
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Signup;
