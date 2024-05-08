import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ForgotPasswordModal } from "./forgotPasswordModal";

import { Context } from "../store/appContext";

export const LoginModal = ({
  login,
  setLogin,
  forgotPassword,
  setForgotPassword,
  sendRecoveryEmail,
  handleLogin,
  closeLoginButton,
}) => {
  const { store, actions } = useContext(Context);

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
              {/*--------------------------------Title---------------------------------*/}
              <h1 className="modal-title fs-5" id="loginModalToggleLabel">
                Login
              </h1>
              <div className="ms-auto" data-bs-theme="dark">
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  ref={closeLoginButton}
                ></button>
              </div>
            </div>
            <div className="modal-body">
              {/*--------------------------------3rd Party Login---------------------------------*/}

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
              {/*---------------------------------------Form---------------------------------*/}
              <form>
                <div className="mb-3">
                  {/*--------------------------------email---------------------------------*/}
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
                {/*--------------------------------password---------------------------------*/}
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
                {/*--------------------------------remember me---------------------------------*/}
                <div className="mb-3 form-check m-3">
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

                {/*----------------------------------Buttons----------------------------------*/}
                <div className="text-center">
                  {/*------------------------forgot password modal trigger------------------------*/}
                  <button
                    className="btn btn-sm btn-link "
                    data-bs-target="#forgotPasswordModalToggle"
                    data-bs-toggle="modal"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot my password
                  </button>{" "}
                  {/*------------------------signup modal trigger------------------------*/}
                  <button
                    type="button"
                    className="btn btn-sm btn-link"
                    data-bs-target="#signupModalToggle"
                    data-bs-toggle="modal"
                  >
                    Not registered yet?
                  </button>
                </div>
                {/*---------------------------------------login---------------------------------*/}
                <div className="modal-footer border-0 flex-column">
                  <button
                    className="btn text-white btn-effect"
                    data-bs-toggle={`${store.loggedIn ? "modal" : ""}`}
                    onClick={handleLogin}
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
      <ForgotPasswordModal
        forgotPassword={forgotPassword}
        setForgotPassword={setForgotPassword}
        sendRecoveryEmail={sendRecoveryEmail}
      />
    </div>
  );
};
