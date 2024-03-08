import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const EditableDealCard = () => {
  const { store, actions } = useContext(Context);

  const [gameTitle, setGameTitle] = useState("Game Title");
  const [format, setFormat] = useState("Digital");
  const [offerPrice, setOfferPrice] = useState(100);
  const [rating, setRating] = useState(10);
  const [expirationDate, setExpirationDate] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [scheduled, setScheduled] = useState(false);
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
      <div className="card-body flex-row d-flex">
        <div>
          <h5 className="card-title">{gameTitle}</h5>
          <p className="card-text">{format}</p>
          <p className="card-text">{offerPrice} €</p>
          <Link className="btn btn-link" to="/post/:id">
            Details
          </Link>
        </div>
        <div className="ms-auto">
          {/*--------------------------MODIFY DEAL MODAL----------------------*/}
          <div
            className="modal fade"
            id="editDealModalToggle"
            aria-hidden="true"
            aria-labelledby="editDealModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header border-0">
                  <h1
                    className="modal-title fs-5"
                    id="editDealModalToggleLabel"
                  >
                    Modify Post
                  </h1>
                  <div className="ms-auto" data-bs-theme="dark">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <input
                          type="file"
                          className="img-fluid rounded-start"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <ul className="list-group">
                            {/*---------------------------------------Offer Price---------------------------------*/}
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="number"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                value={offerPrice}
                                onChange={(e) => setOfferPrice(e.target.value)}
                                required
                              />
                            </li>
                            {/*---------------------------------------Exp Date---------------------------------*/}
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="date"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                value={expirationDate}
                                onChange={(e) =>
                                  setExpirationDate(e.target.value)
                                }
                              />
                            </li>
                            {/*---------------------------------------Promo Code---------------------------------*/}
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="text"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                              />
                            </li>
                            {/*------------------------------------Schedule Post---------------------------------*/}
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
                                {/*-------------------------Schedule Post Modal Trigger Button-----------------------*/}
                                {scheduled && (
                                  <button
                                    className="btn btn-link btn-sm"
                                    data-bs-target="#editScheduleModalToggle"
                                    data-bs-toggle="modal"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    Choose date and time
                                  </button>
                                )}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/*---------------------------------------Schedule Post Modal---------------------------------*/}
          <div
            className="modal fade"
            id="editScheduleModalToggle"
            aria-hidden="true"
            aria-labelledby="editScheduleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-sm modal-dialog-centered">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header border-0">
                  <h1
                    className="modal-title fs-5"
                    id="editScheduleModalToggleLabel"
                  >
                    Schedule Post
                  </h1>
                </div>
                <div className="modal-body">
                  <input
                    type="date"
                    className="form-control rounded-5 text-white bg-transparent h-100 mb-3"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                  />
                  <input
                    type="time"
                    className="form-control rounded-5 text-white bg-transparent h-100"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                  />
                </div>
                <div className="modal-footer border-0">
                  <button
                    className="btn"
                    style={{ background: "#992899" }}
                    data-bs-target="#editDealModalToggle"
                    data-bs-toggle="modal"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*--------------------------MODIFY DEAL MODAL TRIGGER BUTTON----------------------*/}
          <button
            className="btn py-0"
            data-bs-target="#editDealModalToggle"
            data-bs-toggle="modal"
          >
            <i className="fa-solid fa-pencil" style={{ color: "#992899" }}></i>
          </button>
          <p>Rating {rating}</p>
        </div>
      </div>
    </div>
  );
};
