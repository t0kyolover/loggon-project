import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const PostDealCard = (props) => {
  const { store, actions } = useContext(Context);
  const [scheduled, setScheduled] = useState(false);

  return (
    <div
      className="card mb-3 bg-dark border-0 text-white"
      style={{ maxWidth: "540px" }}
    >
      {/*---------------------------------------DEAL INPUT FORM---------------------------------*/}
      <form>
        <div className="row g-0">
          <div className="col-md-4 m-auto text-dark"> {/*---texto del mismo color que el fondo para que sea invisible,
           pero tenemos que cambiarlo correctamente ----*/}
            <input type="file" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <ul className="list-group">
                {/*---------------------------------------Game Title---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="search"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placeholder="Game title"
                    
                  />
                </li>
                {/*---------------------------------------Platform---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <select
                    className="form-control border-0 text-white bg-dark h-100 p-0"
                    
                  >
                    <option value="PC">PC</option>
                    <option value="PC">PS4</option>
                    <option value="PC">Xbox</option>
                    <option value="PC">Nintendo</option>
                  </select>
                </li>
                {/*---------------------------------------Type---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <select
                    className="form-control border-0 text-white bg-dark h-100 p-0"
                    placeholder="Type"
                    
                  >
                    <option value="PC">Game</option>
                    <option value="PC">DLC</option>
                    <option value="PC">In-game Purchase</option>
                  </select>
                </li>
                {/*---------------------------------------Format---------------------------------*/}
                <li
                  className="list-group-item border-0 my-2 text-white bg-transparent d-flex"
                  style={{ maxHeight: "35px" }}
                >
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioFormat"
                      id="flexRadioDigital"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDigital"
                    >
                      Digital
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioFormat"
                      id="flexRadioPhysical"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioPhysical"
                    >
                      CD
                    </label>
                  </div>
                </li>
                {/*---------------------------------------Original Price---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="number"
                    className="form-control border-0 text-white bg-transparent h-100 p-1"
                    placeholder="Original price"
                    
                  />
                </li>
                {/*---------------------------------------Promo Price---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="number"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placeholder="Offer price"
                    
                  />
                </li>
                {/*---------------------------------------Exp Date---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="date"
                    placeholder="Expiration date"
                    className="form-control border-0 text-white bg-transparent p-0"
                  />
                </li>
                {/*---------------------------------------Promo Code---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="text"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placeholder="Promocode"
                  />
                </li>
                {/*---------------------------------------Offer Link---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="text"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placehoolder="Offer link"
                    
                  />
                </li>
                {/*---------------------------------------Schedule Post---------------------------------*/}
                <li
                  className="list-group-item border-0 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <div className="form-check d-flex flex-row align-items-center">
                    <input
                      onChange={(e) => setScheduled(!scheduled)}
                      className="form-check-input"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="scheduleCheck"
                    >
                      Schedule
                    </label>
                    {/*---------------------------------------Schedule Post Modal Trigger---------------------------------*/}
                    <div className="d-inline-flex">
                      {scheduled && (
                        <button
                          type="button"
                          className="btn btn-link"
                          id="scheduleCheck"
                          data-bs-toggle="modal"
                          data-bs-target="#scheduleModal"
                        >
                          Choose date and time
                        </button>
                      )}
                      {/*---------------------------------------DELETE BUTTON---------------------------------*/}
                      {props.isAdditional && (
                        <button className="btn py-0" onClick={props.onClick}>
                          <i className="fa-regular fa-trash-can text-danger"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </li>

                {/*---------------------------------------Schedule Post Modal---------------------------------*/}
                <div
                  className="modal fade"
                  id="scheduleModal"
                  aria-hidden="true"
                  aria-labelledby="scheduleModalLabel"
                  tabIndex="-1"
                >
                  <div className="modal-dialog modal-sm modal-dialog-centered">
                    <div className="modal-content bg-dark text-white">
                      <div className="modal-header border-0">
                        <h1
                          className="modal-title fs-5"
                          id="scheduleModalLabel"
                        >
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
                        />
                        <input
                          type="time"
                          className="form-control rounded-5 text-white bg-transparent h-100"
                        />
                      </div>
                      <div className="modal-footer border-0 flex-column">
                        <button
                          className="btn text-white"
                          style={{ background: "#992899" }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
