import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const LoginModal = (props) => {
  const { store, actions } = useContext(Context);

  const [login, setLogin] = useState({
    email: props.email,
    password: props.password,
    remember_me: props.remember_me,
  });

  const [forgotPassword, setForgotPassword] = useState({
    email: props.email,
    email2: props.email2,
  });

  return (
    <div>
      <div
        className="modal fade"
        id="loginModalToggle"
        aria-hidden="true"
        aria-labelledby="loginModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content text-white "
            style={{ background: "#020D19" }}
          >
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="loginModalToggleLabel">
                Login
              </h1>
              <div className="ms-auto" data-bs-theme="dark">
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  ref={props.closeLoginButton}
                ></button>
              </div>
            </div>
            <div className="modal-body">
              {/*---------------------------------------Login modal 3rd party buttons---------------------------------*/}

              <div className="text-center mt-4 p-3">
                <button className="mt-2 rounded-circle mx-2">
                  <i className="fa-brands fa-steam text-dark fs-3"></i>
                </button>

                <button className="mt-2 rounded-circle mx-2">
                  <i className="fa-brands fa-twitch text-dark fs-3"></i>
                </button>

                <button className="mt-2 rounded-circle mx-2">
                  <i className="fa-brands fa-google text-dark fs-3"></i>
                </button>
              </div>
              {/*---------------------------------------Login modal form---------------------------------*/}
              <form>
                <div className="mb-3">
                  <label htmlFor="loginEmailInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-5 text-white bg-transparent"
                    id="loginEmailInput"
                    placeholder="Email"
                    value={login.email}
                    onChange={(e) =>
                      setLogin({ ...login, email: e.target.value })
                    }
                  />
                </div>
                <label htmlFor="loginPasswordInput" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="loginPasswordInput"
                  className="form-control rounded-5 text-white bg-transparent"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Password"
                  value={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
                <div
                  id="passwordHelpBlock"
                  className="form-text text-white"
                ></div>
                {/**<div className="mb-3 form-check m-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMeCheck"
                value={login.remember_me}
                onChange={(e) => {
                  setLogin((prevState) => ({
                    ...prevState,
                    remember_me: !login.remember_me,
                  }));
                  console.log(login.remember_me);
                }}
              />
              <label
                className="form-check-label"
                htmlFor="rememberMeCheck"
                style={{ fontSize: "15px" }}
              >
                Remember me
              </label>
            </div>
             * 
             */}

                {/*------------------------Forgot Password Modal Trigger Button------------------------*/}
                <div className="text-center">
                  <button
                    className="btn btn-sm btn-link "
                    data-bs-target="#forgotPasswordModalToggle"
                    data-bs-toggle="modal"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot my password
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-sm btn-link"
                    data-bs-target="#signupModalToggle"
                    data-bs-toggle="modal"
                  >
                    Not registered yet?
                  </button>
                </div>
                {/*---------------------------------------Login Modal buttons---------------------------------*/}
                <div className="modal-footer border-0 flex-column">
                  <button
                    className="btn text-white btn-effect"
                    data-bs-toggle={`${store.loggedIn ? "modal" : ""}`}
                    onClick={props.handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------Forgot Password Modal---------------------------------*/}
      <div
        className="modal fade"
        id="forgotPasswordModalToggle"
        aria-hidden="true"
        aria-labelledby="forgotPasswordModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div
            className="modal-content text-white"
            style={{ background: "#020D19" }}
          >
            <div className="modal-header border-0">
              <h1
                className="modal-title fs-5"
                id="forgotPasswordModalToggleLabel"
              >
                Please input your email
              </h1>
            </div>
            <form>
              <div className="modal-body">
                <input
                  type="email"
                  className="form-control rounded-5 text-white bg-transparent h-100 mb-3"
                  placeholder="Email"
                  value={forgotPassword.email}
                  onChange={(e) =>
                    setForgotPassword({
                      ...forgotPassword,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  type="email"
                  className="form-control rounded-5 text-white bg-transparent h-100"
                  placeholder="Confirm your email"
                  value={forgotPassword.email2}
                  onChange={(e) =>
                    setForgotPassword({
                      ...forgotPassword,
                      email2: e.target.value,
                    })
                  }
                />
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn text-white btn-effect-blue"
                  data-bs-target="#loginModalToggle"
                  data-bs-toggle="modal"
                >
                  Back
                </button>
                <button
                  className="btn text-white btn-effect"
                  type="submit"
                  // style={{ background: "#992899" }}
                  /* data-bs-dismiss="modal"*/
                  onClick={props.sendRecoveryEmail}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
