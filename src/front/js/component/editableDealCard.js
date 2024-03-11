import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const EditableDealCard = (props) => {
  const { store, actions } = useContext(Context);

  const [deal, setDeal] = useState({
    id: props.id,
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
  const [newPostData, setNewPostData] = useState({
    imageUrl: "",
    offerPrice: "",
    expirationDate: "",
    promoCode: "",
    scheduledDate: "",
    scheduledTime: "",
  });
  const [scheduledButton, setScheduledButton] = useState(false);

  useEffect(() => {
    setNewPostData({
      imageUrl: deal.image_url,
      offerPrice: deal.offer_price,
      expirationDate: deal.expiration_date,
      promoCode: deal.promo_code,
      scheduledDate: deal.scheduled_date,
      scheduledTime: deal.scheduled_time,
    });
  }, []);

  useEffect(() => {
    setDeal({
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
  }, [store.user]);

  function handleInputChange(e, item) {
    e.persist();
    setNewPostData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  }

  function modifyPost(e) {
    e.preventDefault();
    actions.modifyPost(
      newPostData.imageUrl,
      newPostData.offerPrice,
      newPostData.expirationDate,
      newPostData.promoCode,
      newPostData.scheduledDate,
      newPostData.scheduledTime,
      newPostData.scheduled
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
            id={`editDealModalToggle-${props.id}`}
            aria-hidden="true"
            aria-labelledby={`editDealModalToggleLabel-${props.id}`}
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header border-0">
                  <h1
                    className="modal-title fs-5"
                    id={`editDealModalToggleLabel-${props.id}`}
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
                                value={newPostData.imageUrl}
                                onChange={(e) => {handleInputChange(e, "imageUrl")}}
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
                                value={newPostData.offerPrice}
                                onChange={(e) => {handleInputChange(e, "offerPrice")}
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
                                value={newPostData.expirationDate}
                                onChange={(e) => {handleInputChange(e, "expirationDate")}
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
                                value={newPostData.promoCode}
                                onChange={(e) => {handleInputChange(e, "promoCode")}
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
                                  onChange={(e) =>
                                    setScheduledButton(!scheduledButton)
                                  }
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
                                {scheduledButton && (
                                  <button
                                    className="btn btn-link btn-sm"
                                    data-bs-target={`#editScheduleModalToggle-${props.id}`}
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
            id={`editScheduleModalToggle-${props.id}`}
            aria-hidden="true"
            aria-labelledby={`editScheduleModalToggleLabel-${props.id}`}
            tabIndex="-1"
          >
            <div className="modal-dialog modal-sm modal-dialog-centered">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header border-0">
                  <h1
                    className="modal-title fs-5"
                    id={`editScheduleModalToggleLabel-${props.id}`}
                  >
                    Schedule Post
                  </h1>
                </div>
                <div className="modal-body">
                  <input
                    type="date"
                    className="form-control rounded-5 text-white bg-transparent h-100 mb-3"
                    value={newPostData.scheduledDate}
                    onChange={(e) => {handleInputChange(e, "scheduledDate")}
                    }
                  />
                  <input
                    type="time"
                    className="form-control rounded-5 text-white bg-transparent h-100"
                    value={newPostData.scheduledTime}
                    onChange={(e) => {handleInputChange(e, "scheduledTime")}
                    }
                  />
                </div>
                <div className="modal-footer border-0">
                  <button
                    className="btn"
                    style={{ background: "#992899" }}
                    data-bs-target={`#editDealModalToggle-${props.id}`}
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
            data-bs-target={`#editDealModalToggle-${props.id}`}
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
