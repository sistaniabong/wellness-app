import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

const Login = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

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
    <>
      <button
        className="m-6 waves-effect waves-light btn-floating"
        style={{ borderRadius: "10px", width: "50px" }}
        onClick={showModal}
      >
        Login
      </button>
      <Modal show={isOpen} onHide={hideModal} dialogClassName="modal-90w">
        <Modal.Header>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleLoginBtn}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
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
                onChange={handleChange}
              ></input>
            </div>
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
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
          <button
            className="m-6 waves-effect waves-light btn-floating"
            style={{ borderRadius: "10px", width: "50px" }}
          >
            Login
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
