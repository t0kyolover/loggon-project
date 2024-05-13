import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../store/appContext";

export const Filters = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <button
        className="btn btn-effect"
        // style={{ background: "#992899" }}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDark"
        aria-controls="offcanvasDark"
      >
        <i className="fa-solid fa-filter"></i> Filters
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasDark"
        aria-labelledby="offcanvasDarkLabel"
        style={{ width: "15%", background: "#020D19" }}
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title text-white" id="offcanvasDarkLabel">
            Filter by
          </h3>
        </div>
        <div className="offcanvas-body">
          <form>
            <select
              className="form-select mb-2 bg-transparent text-white"
              aria-label="Default select example"
            >
              <option defaultValue="By Type">By Type</option>
              <option value="Game">Game</option>
              <option value="DLC">DLC</option>
              <option value="In-game Purchase">In-game Purchase</option>
            </select>
            <div className="my-3">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="dateFilterSwitch"
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="dateFilterSwitch"
                >
                  newest
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="ratingFilterSwitch"
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="ratingFilterSwitch"
                >
                  highest rating
                </label>
              </div>
            </div>

            <div className="my-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="formatFilterOptions"
                  id="formatDigitalFilter"
                  value="Digital"
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="formatDigitalFilter"
                >
                  Digital
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="formatFilterOptions"
                  id="formatCDFilter"
                  value="CD"
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="formatCDFilter"
                >
                  CD
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
