import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const PasswordRecovery = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [currentPassword, setCurrentPassword] = useState("1234");
  const [currentPasswordConfirmation, setCurrentPasswordConfirmation] =
    useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");

  function resetPassword(e) {
    e.preventDefault();
    if (newPassword !== newPasswordConfirmation) {
      alert("Passwords don't match");
    } else if (newPassword == currentPassword) {
      alert("New password can't be the same as current password");
    } else {
      setCurrentPassword(newPassword);
      alert("Password changed successfully");
      //useHistory().push("/home") if came from link in email
    }
  }

  function changePassword(e) {
    e.preventDefault();
    if (currentPassword !== currentPasswordConfirmation) {
      alert("Incorrect current password");
    } else if (newPassword !== newPasswordConfirmation) {
      alert("Passwords don't match");
    } else if (newPassword == currentPassword) {
      alert("New password can't be the same as current password");
    } else {
      setCurrentPassword(newPassword);
      alert("Password changed successfully");
      //useHistory().push("/home") if came from link in email
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h5 className="card-title text-center text-white">Change Password</h5>
          <form>
            <div className="form-group">
              {store.loggedIn && (
                <input
                  type="password"
                  className="form-control my-4"
                  id="recoverPasswordCurrentInput"
                  placeholder="Current Password"
                  value={currentPasswordConfirmation}
                  onChange={(e) =>
                    setCurrentPasswordConfirmation(e.target.value)
                  }
                />
              )}
              <input
                type="password"
                className="form-control my-3"
                id="recoverPasswordNewInput"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                className="form-control my-3"
                id="recoverPasswordConfirmInput"
                placeholder="Confirm New Password"
                value={newPasswordConfirmation}
                onChange={(e) => setNewPasswordConfirmation(e.target.value)}
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
                  onClick={store.loggedIn ? changePassword : resetPassword}
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
