import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
// import bootstrap from bootstrap;

const Signup = () => {

  const [isOpen, setIsOpen] = React.useState(false);

    // opens modal
  const showModal = () => {
    setIsOpen(true);
  };

  // closes modal
  const hideModal = () => {
    setIsOpen(false);
  };

  // handles signup submit btn
  const handleSignupBtn = async (event) => {
    event.preventDefault();
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

//   fix the too many or not enough divs

  return (
    <div>

        {/* <!-- signup button --> */}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" class="m-2 waves-effect waves-light btn-large signup" style="border-radius: 10px;" onClick={showModal}>Sign Up</button>
         {/* <!-- Signup modal --> */}
         <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Signup</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hideModal}></button>
                          </div>
                          <div className="modal-body">
                          <Link to="/login">← Go to Login</Link>
                            <form onSubmit={handleSignupBtn}>
                              <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">First Name</span>
                                <input  
                                className="form-control" 
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="First"
                                name="firstName"
                                type="firstName"
                                id="firstName"
                                onChange={handleChange}
                                ></input>
                              </div>
                              <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Last Name</span>
                                <input 
                                className="form-control" 
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Last"
                                name="lastName"
                                type="lastName"
                                id="lastName"
                                onChange={handleChange}
                                ></input>
                              </div>
                              <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Username</span>
                                <input 
                                type="username" 
                                name="username"
                                id="username"
                                className="form-control" 
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"
                                onChange={handleChange}
                                ></input>
                              </div>
                              <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                <input 
                                className="form-control" 
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="youremail@test.com"
                                name="email"
                                type="email"
                                id="email"
                                onChange={handleChange}
                                ></input>
                              </div>
                              <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                                <input  
                                className="form-control" 
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="******"
                                name="password"
                                type="password"
                                id="pwd"
                                onChange={handleChange}
                                ></input>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Signup</button>
                          </div>
                        </div>
                      </div>
                    </div>
    </div>
  )
};

export default Signup;