import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const EditableDealCard = (props) => {
  const { store, actions } = useContext(Context);

  const [deal, setDeal] = useState({
    game_title: props.gameTitle,
    format: props.format,
    rating: props.rating,
    image_url: props.imageUrl,
    offer_price: props.offerPrice,
    expiration_date: props.expirationDate,
    promo_code: props.promoCode,
    scheduled_date: props.scheduledDate,
    scheduled_time: props.scheduledTime,
  });

  const [scheduled, setScheduled] = useState(false);

  function modifyPost(e) {
    e.preventDefault();
    actions.modifyPost(
      deal.image_url,
      deal.offer_price,
      deal.expiration_date,
      deal.promo_code,
      deal.scheduled_date,
      deal.scheduled_time
    );
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={deal.image_url} className="card-img-top" alt="..." />
      <div className="card-body flex-row d-flex">
        <div>
          <h5 className="card-title">{deal.game_title}</h5>
          <p className="card-text">{deal.format}</p>
          <p className="card-text">{deal.offer_price} €</p>
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
                      <div className="col-md-8">
                        <div className="card-body">
                          <ul className="list-group">
                            {/*---------------------------------------Image Url---------------------------------*/}
                            <div style={{ fontSize: "12px", color: "#992899" }}>
                              Image
                            </div>
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="text"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                value={deal.image_url}
                                onChange={(e) =>
                                  setDeal((prevState) => ({
                                      ...prevState,
                                      image_url: e.target.value 
                                  }))
                              }
                                required
                              />
                            </li>
                            {/*---------------------------------------Offer Price---------------------------------*/}
                            <div style={{ fontSize: "12px", color: "#992899" }}>
                              Offer Price
                            </div>
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="number"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                value={deal.offer_price}
                                onChange={(e) =>
                                  setDeal((prevState) => ({
                                    ...prevState,
                                    offer_price: e.target.value 
                                }))
                                }
                                required
                              />
                            </li>
                            {/*---------------------------------------Exp Date---------------------------------*/}
                            <div style={{ fontSize: "12px", color: "#992899" }}>
                              Deal ends
                            </div>
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="date"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                value={deal.expiration_date}
                                onChange={(e) =>
                                  setDeal((prevState) => ({
                                    ...prevState,
                                    expiration_date: e.target.value 
                                }))
                                }
                              />
                            </li>
                            {/*---------------------------------------Promo Code---------------------------------*/}
                            <div style={{ fontSize: "12px", color: "#992899" }}>
                              Promocode
                            </div>
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="text"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                value={deal.promo_code}
                                onChange={(e) =>
                                  setDeal((prevState) => ({
                                    ...prevState,
                                    promo_code: e.target.value 
                                }))
                                }
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
                                {/*-------------------------Modify Submit Button-----------------------*/}
                                <button
                                  className="btn text-white rounded-5 ms-3"
                                  style={{ background: "#992899" }}
                                  data-bs-dismiss="modal"
                                  onClick={(e) => {
                                    modifyPost(e);
                                  }}
                                >
                                  Modify
                                </button>
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
                    value={deal.scheduled_date}
                    onChange={(e) =>
                      setDeal((prevState) => ({
                        ...prevState,
                        scheduled_date: e.target.value 
                    }))
                    }
                  />
                  <input
                    type="time"
                    className="form-control rounded-5 text-white bg-transparent h-100"
                    value={deal.scheduled_time}
                    onChange={(e) =>
                      setDeal((prevState) => ({
                        ...prevState,
                        scheduled_time: e.target.value 
                    }))
                    }
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
          <p>Rating {deal.rating}</p>
        </div>
      </div>
    </div>
  );
};
