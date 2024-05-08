import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ForgotPasswordModal = ({
  forgotPassword,
  setForgotPassword,
  sendRecoveryEmail
}) => {
  const { store, actions } = useContext(Context);

  return (
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
            {/*---------------------------------Email---------------------------------*/}
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
              {/*---------------------------------Buttons---------------------------------*/}
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
                  /* data-bs-dismiss="modal"*/
                  onClick={sendRecoveryEmail}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};
