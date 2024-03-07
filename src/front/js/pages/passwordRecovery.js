import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const PasswordRecovery = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h5 className="card-title text-center text-white">Change Password</h5>
          <form>
            <div className="form-group">
              <input
                type="password"
                className="form-control my-4"
                id="recoverPasswordCurrentInput"
                placeholder="Current Password"
              />
              <input
                type="password"
                className="form-control my-3"
                id="recoverPasswordNewInput"
                placeholder="New Password"
              />
              <input
                type="password"
                className="form-control my-3"
                id="recoverPasswordConfirmInput"
                placeholder="Confirm New Password"
              />
              <div id="passwordHelpBlock" className="form-text text-white">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary me-md-2 border-0 mb-3"
                  style={{ background: "#992899" }}
                  type="button"
                >
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
