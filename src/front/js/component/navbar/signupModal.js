import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../store/appContext";

import loggon2 from "../../../img/loggon2.png";

export const SignupModal = ({
  signup,
  setSignup,
  handleSignup,
  closeSignUpButton,
}) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="modal fade"
      id="signupModalToggle"
      aria-hidden="true"
      aria-labelledby="signupModalToggleLabel"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div
          className="modal-content text-white"
          style={{ background: "#020D19" }}
        >
          {/*---------------------------------------Title---------------------------------*/}
          <div className="modal-header border-0">
            <h1 className="modal-title fs-5 " id="signupModalToggleLabel">
              Signup
            </h1>
            <div className="ms-auto" data-bs-theme="dark">
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeSignUpButton}
              ></button>
            </div>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
              <div className="mb-3 col-md-6 m-4">
                <img src={loggon2} className="img-fluid mb-5" alt="Logo" />
                {/*---------------------------3rd Party Signup Buttons-----------------------------*/}
                <div className="text-center mt-4 d-none d-md-block">
                  <button className="mt-2 rounded-circle mx-2 btn-effect-blue">
                    <i className="fa-brands fa-steam text-dark fs-3"></i>
                  </button>
                  <button className="mt-2 rounded-circle mx-2 btn-effect-blue">
                    <i className="fa-brands fa-twitch text-dark fs-3"></i>
                  </button>
                  <button className="mt-2 rounded-circle mx-2 btn-effect-blue">
                    <i className="fa-brands fa-google text-dark fs-3"></i>
                  </button>
                </div>
              </div>
              {/*---------------------------------Registration Form---------------------------------*/}
              <form className="col-md-6 m-auto p-4">
                <div className="mb-1">
                  {/*---------------------------------username---------------------------------*/}
                  <label htmlFor="signupUsernameInput" className="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-5 text-white bg-transparent"
                    id="signupUsernameInput"
                    placeholder="Username"
                    value={signup.username}
                    onChange={(e) =>
                      setSignup({ ...signup, username: e.target.value })
                    }
                  />
                </div>
                {/*---------------------------------email---------------------------------*/}
                <div className="mb-1">
                  <label htmlFor="signupEmailInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-5 text-white bg-transparent"
                    id="signupEmailInput"
                    placeholder="Email"
                    value={signup.email}
                    onChange={(e) =>
                      setSignup({ ...signup, email: e.target.value })
                    }
                  />
                </div>
                {/*---------------------------------password---------------------------------*/}
                <div className="mb-1">
                  <label htmlFor="signupPasswordInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-5 text-white bg-transparent"
                    id="signupPasswordInput"
                    placeholder="Password"
                    value={signup.password}
                    onChange={(e) =>
                      setSignup({ ...signup, password: e.target.value })
                    }
                  />
                </div>
                {/*---------------------------------password2---------------------------------*/}
                <div className="mb-1">
                  <label htmlFor="signupPasswordInput2" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="signupPasswordInput2"
                    className="form-control rounded-5 text-white bg-transparent"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Confirm Password"
                    value={signup.password2}
                    onChange={(e) =>
                      setSignup({ ...signup, password2: e.target.value })
                    }
                  />
                </div>
                <div
                  id="passwordHelpBlock"
                  className="form-text text-white p-2"
                  style={{ fontSize: "10px" }}
                >
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </div>
                {/*---------------------------------newsletter---------------------------------*/}
                <div className="mb-3 form-check m-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="newsletterCheck"
                    value={signup.newsletter}
                    onChange={() =>
                      setSignup({
                        ...signup,
                        newsletter: !signup.newsletter,
                      })
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="newsletterCheck"
                    style={{ fontSize: "10px" }}
                  >
                    I agree to receive commercial communications and offers by
                    loGGon
                  </label>
                </div>
                {/*---------------------------------privacy policy---------------------------------*/}
                <div className="mb-3 form-check m-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="privacyCheck"
                    value={signup.privacy}
                    onChange={() =>
                      setSignup({ ...signup, privacy: !signup.privacy })
                    }
                  />
                  <Link
                    to="/privacy_policy"
                    target="_blank"
                    htmlFor="privacyCheck"
                    className="form-check-label btn btn-link p-0"
                    style={{ fontSize: "10px" }}
                  >
                    I have read and accept the Terms & Conditions of Use and
                    Privacy Policy{" "}
                  </Link>
                </div>
                {/*---------------------------------------Buttons---------------------------------*/}
                <div className="modal-footer flex-column border-0">
                  {/*---------------------------------signup---------------------------------*/}
                  <button className="btn btn-effect" onClick={handleSignup}>
                    Signup
                  </button>
                  {/*---------------------------------to login modal---------------------------------*/}
                  <button
                    className="btn btn-sm btn-link"
                    data-bs-target="#loginModalToggle"
                    data-bs-toggle="modal"
                    onClick={(e) => e.preventDefault()}
                  >
                    Already registered?
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
