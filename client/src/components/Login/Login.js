// import { setLogVerbosity } from "@apollo/client";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import Auth from "../utils/auth"; //commented-auth is not yet in utils
// import { LOGIN_USER } from "../utils/mutations"; // incorrect path
import { LOGIN_USER } from "../../utils/mutations";
// import  {Signup}  from '../Signup/Signup'; //Signup did not need to be deconstruct
import  Signup  from '../Signup/Signup';


const Login = () => {
  // example of a way to open the modal if using state doesnt work
  // myModal.addEventListener('shown.bs.modal', function () {
  //   myInput.focus()
  // })
  const [isOpen, setIsOpen] = React.useState(false);
  // opens modal
  const showModal = () => {
    setIsOpen(true);
  };

  // closes modal
  const hideModal = () => {
    setIsOpen(false);
  };

  const [formState, setFormState] = useState({ email: "", password: "" });
  // will take login from mutations when finished
  const [login, { error }] = useMutation(LOGIN_USER);

  // handles login submit btn
  const handleLoginBtn = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      // Auth.login(token); // route to the dashboard //had to comment this out because Auth is not added yet
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login">
      {/*  login button and modal trigger */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
        className="m-2 waves-effect waves-light btn-large login"
        style="border-radius: 10px;"
        onclick={showModal}
      >
        Login
      </button>

      {/* <!-- login modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={hideModal}
              ></button>
            </div>
            <div className="modal-body">
              {/* How to link to the signup page */}
              <Link to={Signup}>← Go to Signup</Link>
              <form onSubmit={handleLoginBtn}>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Username
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Password
                  </span>
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
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              {/* If there's an error */}
              {error ? (
                <div>
                  <p className="error-text">
                    The provided credentials are incorrect
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
