import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const EditableDealCard = (props) => {
  const { store, actions } = useContext(Context);

  const [deal, setDeal] = useState({
    id: props.id,
    user_id: props.userId,
    game_title: props.gameTitle,
    item_type: props.itemType,
    format: props.format,
    rating: props.rating,
    image_url: props.imageUrl,
    offer_link: props.offerLink,
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
      id: props.id,
      user_id: props.userId,
      game_title: props.gameTitle,
      item_type: props.itemType,
      format: props.format,
      rating: props.rating,
      image_url: props.imageUrl,
      offer_link: props.offerLink,
      original_price: props.originalPrice,
      offer_price: props.offerPrice,
      expiration_date: props.expirationDate,
      promo_code: props.promoCode,
      scheduled_date: props.scheduledDate,
      scheduled_time: props.scheduledTime,
    });
  }, [store.user, props.user]);

  function handleInputChange(e, item) {
    e.persist();
    setNewPostData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  }

  function modifyPostHandler(e) {
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
    console.log(newPostData);
    setDeal((prevState) => ({
      ...prevState,
      image_url: newPostData.imageUrl,
      offer_price: newPostData.offerPrice,
      expiration_date: newPostData.expirationDate,
      promo_code: newPostData.promoCode,
      scheduled_date: newPostData.scheduledDate,
      scheduled_time: newPostData.scheduledTime,
    }));
  }
  /*No actualiza los datos al modificar en la card, pero si que los modifica a nivel de datos */
  return (
    <div className="card card-effect sombra text-white" style={{ width: "18rem" }}>
      <img src={deal.image_url} className="card-img-top" alt="..." />
      <div className="card-body flex-row d-flex bg-color text-white rounded-bottom-2 pe-0">
        <div className="row">
        <div className="col-12">
          <h5 className="card-title ">{deal.game_title}</h5>
          <p className="card-text ">{deal.format}</p>
          </div>
          <div className="d-flex mt-2 ">
          <div className="col-6">
           <p className="card-text">{deal.item_type}</p>
          
          <p className="card-text text-decoration-line-through">
            {deal.original_price}
          </p>
          <p className="card-text">{deal.offer_price} €</p>
          </div>
          <div className="col-6">
          {deal.promo_code && <h6 className="card-text">{deal.promo_code}</h6>}
          {deal.expiration_date && (
            <p className="card-text">{deal.expiration_date}</p>
          )}
          <div className="ms-4">
          <Link className="btn btn-link text-white btn-effect rounded-2  px-2" to={`/post/${deal.id}`}>
          DETAILS
          </Link>
          </div>
          </div>
          </div>
          <div className="d-flex flex-column">
          <button
            className="btn btn text-white rounded-2 mt-3 px-2 btn-effect-blue ms-4"
          >
            <a className="text-white " href={deal.offer_link} target="_blank" style={{ textDecoration: 'none' }}>
            DEAL
            </a>
          </button>
          </div>
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
              <div className="modal-content text-white" style={{ background: "#020D19" }}>
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
                                onChange={(e) => {
                                  handleInputChange(e, "imageUrl");
                                }}
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
                                onChange={(e) => {
                                  handleInputChange(e, "offerPrice");
                                }}
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
                                onChange={(e) => {
                                  handleInputChange(e, "expirationDate");
                                }}
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
                                onChange={(e) => {
                                  handleInputChange(e, "promoCode");
                                }}
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
                                    modifyPostHandler(e);
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
              <div className="modal-content text-white" style={{ background: "#020D19" }}>
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
                    onChange={(e) => {
                      handleInputChange(e, "scheduledDate");
                    }}
                  />
                  <input
                    type="time"
                    className="form-control rounded-5 text-white bg-transparent h-100"
                    value={newPostData.scheduledTime}
                    onChange={(e) => {
                      handleInputChange(e, "scheduledTime");
                    }}
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
          {/* <p>Rating {deal.rating}</p> */}
          {deal.scheduled && (
            <div>
              <p>{deal.scheduled_date}</p>
              <p>{deal.scheduled_date}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
