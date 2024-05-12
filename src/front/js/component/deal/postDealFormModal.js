import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { SchedulePostModal } from "./schedulePostModal";

import { Context } from "../../store/appContext";

export const PostDealFormModal = (deal, setDeal, onInputChange) => {
  const { store, actions } = useContext(Context);

  // const [deal, setDeal] = useState({
  //   id: props.id,
  //   user_id: props.userId,
  //   game_title: props.gameTitle,
  //   item_type: props.itemType,
  //   format: props.format,
  //   rating: props.rating,
  //   image_url: props.imageUrl,
  //   offer_link: props.offerLink,
  //   offer_price: props.offerPrice,
  //   expiration_date: props.expirationDate,
  //   promo_code: props.promoCode,
  //   scheduled_date: props.scheduledDate,
  //   scheduled_time: props.scheduledTime,
  // });
  const [newPostData, setNewPostData] = useState({
    imageUrl: "",
    offerPrice: "",
    expirationDate: "",
    promoCode: "",
    scheduledDate: "",
    scheduledTime: "",
  });
  const [scheduledButton, setScheduledButton] = useState(false);
  const [scheduled, setScheduled] = useState(false);

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

  // useEffect(() => {
  //   setDeal({
  //     id: props.id,
  //     user_id: props.userId,
  //     game_title: props.gameTitle,
  //     item_type: props.itemType,
  //     format: props.format,
  //     rating: props.rating,
  //     image_url: props.imageUrl,
  //     offer_link: props.offerLink,
  //     original_price: props.originalPrice,
  //     offer_price: props.offerPrice,
  //     expiration_date: props.expirationDate,
  //     promo_code: props.promoCode,
  //     scheduled_date: props.scheduledDate,
  //     scheduled_time: props.scheduledTime,
  //   });
  // }, [store.user, props.user]);

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
    <>
      <div
        className="modal fade"
        id={`editDealModalToggle-${deal.id}`}
        aria-hidden="true"
        aria-labelledby={`editDealModalToggleLabel-${deal.id}`}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content text-white"
            style={{ background: "#020D19" }}
          >
            <div className="modal-header border-0">
              <h1
                className="modal-title fs-5"
                id={`editDealModalToggleLabel-${deal.id}`}
              >
                Create Post
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
              <form style={{ background: "#020D19" }}>
                <ul className="list-group">
                  <div className="row">
                    <div className="col-6">
                      {/*---------------------------------------Game Title---------------------------------*/}
                      <li
                        className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                        style={{ maxHeight: "35px" }}
                      >
                        <input
                          type="search"
                          className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                          placeholder="Game title"
                          onChange={(e) => {
                            handleInputChange(e, "game_title");
                          }}
                          required
                        />
                      </li>
                    </div>
                    <div className="col-6">
                      {/*---------------------------------------Image Url---------------------------------*/}
                      <li
                        className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                        style={{ maxHeight: "35px" }}
                      >
                        <input
                          type="text"
                          className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                          placeholder="Image URL"
                          onChange={(e) => {
                            handleInputChange(e, "image_url");
                          }}
                        />
                      </li>
                    </div>
                  </div>
                  <div className="row"></div>
                  <div className="row">
                    <div className="col-4">
                      {/*---------------------------------------Platform---------------------------------*/}
                      <li
                        className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                        style={{ maxHeight: "35px" }}
                      >
                        <select
                          className="form-control border-0 text-white h-100 p-0 input-placeholder-white"
                          style={{ background: "#020D19" }}
                          onChange={(e) => {
                            handleInputChange(e, "platform");
                          }}
                        >
                          <option value="PC">PC</option>
                          <option value="PS5">PS5</option>
                          <option value="Xbox">Xbox</option>
                          <option value="Nintendo">Nintendo</option>
                        </select>
                      </li>
                    </div>
                    <div className="col-4">
                      {/*---------------------------------------Type---------------------------------*/}
                      <li
                        className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                        style={{ maxHeight: "35px" }}
                      >
                        <select
                          className="form-control border-0 text-white h-100 p-0 input-placeholder-white"
                          style={{ background: "#020D19" }}
                          placeholder="Type"
                          onChange={(e) => {
                            handleInputChange(e, "type");
                          }}
                        >
                          <option value="Game">Game</option>
                          <option value="DLC">DLC</option>
                          <option value="In-game Purchase">
                            In-game Purchase
                          </option>
                        </select>
                      </li>
                    </div>
                    <div className="col-4">
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
                            value="Digital"
                            onChange={(e) => {
                              handleInputChange(e, "format");
                            }}
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
                            value="CD"
                            onChange={(e) => {
                              handleInputChange(e, "format");
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioPhysical"
                          >
                            CD
                          </label>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      {/*---------------------------------------Original Price---------------------------------*/}
                      <li
                        className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                        style={{ maxHeight: "35px" }}
                      >
                        <input
                          type="number"
                          className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                          placeholder="Original price"
                          onChange={(e) => {
                            handleInputChange(e, "original_price");
                          }}
                        />
                      </li>
                    </div>
                    <div className="col-6">
                      {/*---------------------------------------Offer Price---------------------------------*/}
                      <li
                        className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                        style={{ maxHeight: "35px" }}
                      >
                        <input
                          type="number"
                          className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                          placeholder="Offer price"
                          onChange={(e) => {
                            handleInputChange(e, "offer_price");
                          }}
                        />
                      </li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      {/*---------------------------------------Expiration Date---------------------------------*/}
                      <li
                        className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                        style={{ maxHeight: "35px" }}
                      >
                        <input
                          type="date"
                          placeholder="Expiration date"
                          className="form-control border-0 text-white bg-transparent p-0 input-placeholder-white"
                          onChange={(e) => {
                            handleInputChange(e, "expiration_date");
                          }}
                        />
                      </li>
                    </div>
                    <div className="col-4">
                      {/*---------------------------------------Promo Code---------------------------------*/}
                      <li
                        className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                        style={{ maxHeight: "35px" }}
                      >
                        <input
                          type="text"
                          className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                          placeholder="Promocode"
                          onChange={(e) => {
                            handleInputChange(e, "promo_code");
                          }}
                        />
                      </li>
                    </div>
                    <div className="col-4">
                      {/*---------------------------------------Offer Link---------------------------------*/}
                      <li
                        className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                        style={{ maxHeight: "35px" }}
                      >
                        <input
                          type="text"
                          className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                          placeholder="Offerlink"
                          onChange={(e) => {
                            handleInputChange(e, "offer_link");
                          }}
                        />
                      </li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
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
                            <h6>Schedule</h6>
                          </label>

                          {/*---------------------------------------Schedule Post Modal Trigger---------------------------------*/}
                          <div className="d-inline-flex">
                            {scheduled && (
                              <button
                                type="button"
                                className="btn btn-effect-blue btn-link ms-2"
                                id="scheduleCheck"
                                data-bs-toggle="modal"
                                data-bs-target={`scheduleModalToggle-${deal.id}`}
                                onClick={(e) => e.preventDefault()}
                              >
                                Choose
                              </button>
                            )}
                            {/*-------------------------Save Button-----------------------**/}
                            <button
                              className="btn btn-effect ms-3"
                              data-bs-dismiss="modal"
                              onClick={(e) => {
                                modifyPostHandler(e);
                              }}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------Schedule Post Modal---------------------------------**/}
      <SchedulePostModal onInputChange={handleInputChange} deal={deal} />
    </>
  );
};
