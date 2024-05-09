import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const LogoutModal = () => {
  const { store, actions } = useContext(Context);

  return (
      <div
        className="modal fade"
        id="logoutModal"
        aria-hidden="true"
        aria-labelledby="logoutModalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div
            className="modal-content text-white"
            style={{ background: "#020D19" }}
          >
            {/*---------------------------------Title---------------------------------*/}
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="logoutModalLabel">
                Are you sure?
              </h1>
              <div className="ms-auto" data-bs-theme="dark">
                {/*------------------------------Buttons------------------------------*/}
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-effect-blue"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <Link to="/">
                {" "}
                <button
                  className="btn btn-effect"
                  data-bs-dismiss="modal"
                  
                  onClick={actions.logout}
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};
