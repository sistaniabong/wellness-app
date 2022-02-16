import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth"

const Login = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const [formState, setFormState] = useState({ username: '', password: '' });
  // will take login from mutations when finished
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // handles login submit btn
  const handleLoginBtn = async (event) => {
    event.preventDefault();
    console.log('handleLoginBtn')
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      // const token = data.login.token;
      console.log('data')
      console.log(data)
      // Auth.login(token); // route to the dashboard //had to comment this out because Auth is not added yet
      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

        // clear form values
      setFormState({
        email: '',
        password: '',
      });
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
        style={{ borderRadius: "10px", width: "50px" }}
        onClick={showModal}
        id="loginBtn"
      >
        Login
      </button>
      <Modal show={isOpen} onHide={hideModal} dialogClassName="modal-90w">
        <Modal.Header>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Username
              </span>
              <input
                type="text"
                name="username"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={formState.username}
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
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                value={formState.password}
                onChange={handleChange}
              ></input>
            </div>
          </form>
          {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="m-6 waves-effect waves-light btn-floating"
            style={{ borderRadius: "10px", width: "65px" }}
            onClick={hideModal}
          >
            Cancel
          </button>
          <button
            className="m-6 waves-effect waves-light btn-floating"
            style={{ borderRadius: "10px", width: "50px" }}
            onClick={handleLoginBtn}
          >
            Login
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;