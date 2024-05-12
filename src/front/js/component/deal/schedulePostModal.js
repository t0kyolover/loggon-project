import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../store/appContext";

export const SchedulePostModal = ({onInputChange, deal}) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="modal fade"
      id={`scheduleModalToggle-${deal.id}`}
      aria-hidden="true"
      aria-labelledby={`scheduleModalToggleLabel-${deal.id}`}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-sm modal-dialog-centered">
        <div
          className="modal-content text-white"
          style={{ background: "#020D19" }}
        >
          <div className="modal-header border-0">
            <h1 className="modal-title fs-5" id={`scheduleModalToggleLabel-${deal.id}`}>
              Schedule Post
            </h1>
            <div className="ms-auto" data-bs-theme="dark">
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="modal-body">
            <input
              type="date"
              className="form-control rounded-5 text-white bg-transparent h-100 mb-3"
              onChange={(e) => {
                onInputChange(e, "scheduled_date");
              }}
            />
            <input
              type="time"
              className="form-control rounded-5 text-white bg-transparent h-100"
              onChange={(e) => {
                onInputChange(e, "scheduled_time");
              }}
            />
          </div>
          <div className="modal-footer border-0 flex-column">
            <button
              className="btn btn-effect text-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={(e) => e.preventDefault()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
