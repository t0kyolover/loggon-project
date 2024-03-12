import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const PostDealCard = (props) => {
  const { store, actions } = useContext(Context);

  //not all inputs work

  const [postDeal, setPostDeal] = useState({
    image_url: "",
    game_title: "",
    platform: "",
    type: "",
    format: "Digital",
    original_price: "",
    promo_price: "",
    exp_date: "",
    promo_code: "",
    offer_link: "",
    scheduled_date: "",
    scheduled_time: 0,
  });
  const [scheduled, setScheduled] = useState(false);

  useEffect(() => {
    console.log(postDeal);
  }, [postDeal]);

  return (
    <div
      className="card mb-3 bg-dark border-0 text-white"
      style={{ maxWidth: "540px" }}
    >
      {/*---------------------------------------DEAL INPUT FORM---------------------------------*/}
      <form>
        <div className="row g-0">
          <div className="col-md-4 m-auto text-dark">
            {" "}
            {/*---texto del mismo color que el fondo para que sea invisible,
           pero tenemos que cambiarlo correctamente ----*/}
            <li
              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
              style={{ maxHeight: "35px" }}
            >
              <input
                type="text"
                className="form-control border-0 text-white bg-transparent h-100 p-0"
                placeholder="Image URL"
                value={postDeal.image_url}
                onChange={(e) => {
                  setPostDeal((prevState) => ({
                    ...prevState,
                    image_url: e.target.value,
                  }));
                }}
              />
              <img src={postDeal.image_url} alt="..." />
            </li>
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
                    value={postDeal.game_title}
                    onChange={(e) => {
                      setPostDeal((prevState) => ({
                        ...prevState,
                        game_title: e.target.value,
                      }));
                    }}
                  />
                </li>
                {/*---------------------------------------Platform---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <select
                    className="form-control border-0 text-white bg-dark h-100 p-0"
                    onChange={(e) => {
                      setPostDeal((prevState) => ({
                        ...prevState,
                        platform: e.target.value,
                      }));
                    }}
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
                    onChange={(e) => {
                      setPostDeal((prevState) => ({
                        ...prevState,
                        type: e.target.value,
                      }));
                    }}
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
                      value="Digital"
                      onChange={(e) => {
                        setPostDeal((prevState) => ({
                          ...prevState,
                          format: e.target.value,
                        }));
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
                        setPostDeal((prevState) => ({
                          ...prevState,
                          format: e.target.value,
                        }));
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
                {/*---------------------------------------Original Price---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="number"
                    className="form-control border-0 text-white bg-transparent h-100 p-1"
                    placeholder="Original price"
                    value={postDeal.original_price}
                    onChange={(e) => {
                      setPostDeal((prevState) => ({
                        ...prevState,
                        original_price: e.target.value,
                      }));
                    }}
                  />
                </li>
                {/*---------------------------------------Offer Price---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="number"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placeholder="Offer price"
                    value={postDeal.promo_price}
                    onChange={(e) => {
                      setPostDeal((prevState) => ({
                        ...prevState,
                        promo_price: e.target.value,
                      }));
                    }}
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
                    value={postDeal.exp_date}
                    onChange={(e) => {
                      setPostDeal((prevState) => ({
                        ...prevState,
                        exp_date: e.target.value,
                      }));
                    }}
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
                    value={postDeal.promo_code}
                    onChange={(e) => {
                      setPostDeal((prevState) => ({
                        ...prevState,
                        promo_code: e.target.value,
                      }));
                    }}
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
                    value={postDeal.offer_link}
                    onChange={(e) => {
                      setPostDeal((prevState) => ({
                        ...prevState,
                        offer_link: e.target.value,
                      }));
                    }}
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
                          value={postDeal.scheduled_date}
                          onChange={(e) => {
                            setPostDeal((prevState) => ({
                              ...prevState,
                              scheduled_date: e.target.value,
                            }));
                          }}
                        />
                        <input
                          type="time"
                          className="form-control rounded-5 text-white bg-transparent h-100"
                          value={postDeal.scheduled_time}
                          onChange={(e) => {
                            setPostDeal((prevState) => ({
                              ...prevState,
                              scheduled_time: e.target.value,
                            }));
                          }}
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
