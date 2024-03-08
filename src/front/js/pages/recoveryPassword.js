import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const RecoveryPassword = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h5 className="card-title text-center text-white">
            Password Recovery
          </h5>

          <div id="step-request-email">
            <form>
              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="password"
                  className="form-control "
                  id="Password"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="new-password"></label>
              <input
                type="password"
                className="form-control"
                id="new-password"
                placeholder="New Password"
              />
            </div>

            <div id="passwordHelpBlock" className="form-text text-white">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password"></label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                placeholder="Confirm Password"
              />
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
              <button class="btn btn-primary me-md-2 border-0" style={{ background: "#992899" }} type="button">
                Reset Password
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
