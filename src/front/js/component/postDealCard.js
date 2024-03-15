import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const PostDealCard = (props) => {
  const { store, actions } = useContext(Context);

  const [scheduled, setScheduled] = useState(false);

  return (
    <div
      className="card mb-3 border-0 text-white"
      style={{ maxWidth: "540px", background: "#020D19" }}
    >
      {/*---------------------------------------DEAL INPUT FORM---------------------------------*/}
      <form>
        <div className="row flex-row">
          <div className="col-md-6 text-center m-auto">
            {" "}
            {/*---texto del mismo color que el fondo para que sea invisible,
           pero tenemos que cambiarlo correctamente ----*/}
            <img className="rounded-circle img-fluid "
              src={
                props.image_url ||
                "https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1710115200&semt=sph"
              }
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <ul className="list-group">
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
                      props.onInputChange(e, "game_title");
                    }}
                    required
                  />
                </li>
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
                      props.onInputChange(e, "image_url");
                    }}
                  />
                </li>
                {/*---------------------------------------Platform---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                  style={{ maxHeight: "35px" }}
                >
                  <select
                    className="form-control border-0 text-white h-100 p-0 input-placeholder-white"
                    style={{ background: "#020D19" }}
                    onChange={(e) => {
                      props.onInputChange(e, "platform");
                    }}
                  >
                    <option value="PC">PC</option>
                    <option value="PS5">PS5</option>
                    <option value="Xbox">Xbox</option>
                    <option value="Nintendo">Nintendo</option>
                  </select>
                </li>
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
                      props.onInputChange(e, "type");
                    }}
                  >
                    <option value="Game">Game</option>
                    <option value="DLC">DLC</option>
                    <option value="In-game Purchase">In-game Purchase</option>
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
                        props.onInputChange(e, "format");
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
                        props.onInputChange(e, "format");
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
                    className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                    placeholder="Original price"
                    onChange={(e) => {
                      props.onInputChange(e, "original_price");
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
                    className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                    placeholder="Offer price"
                    onChange={(e) => {
                      props.onInputChange(e, "offer_price");
                    }}
                  />
                </li>
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
                      props.onInputChange(e, "expiration_date");
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
                    className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                    placeholder="Promocode"
                    onChange={(e) => {
                      props.onInputChange(e, "promo_code");
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
                    className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                    placeholder="Offerlink"
                    onChange={(e) => {
                      props.onInputChange(e, "offer_link");
                    }}
                  />
                </li>
                {/*---------------------------------------Schedule Post---------------------------------*/}
                <li
                  className="list-group-item border-0 my-2 text-white bg-transparent d-flex flex-row "
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
                    <div
                      className="modal-content text-white"
                      style={{ background: "#020D19" }}
                    >
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
                          onChange={(e) => {
                            props.onInputChange(e, "scheduled_date");
                          }}
                        />
                        <input
                          type="time"
                          className="form-control rounded-5 text-white bg-transparent h-100"
                          onChange={(e) => {
                            props.onInputChange(e, "scheduled_time");
                          }}
                        />
                      </div>
                      <div className="modal-footer border-0 flex-column">
                        <button
                          className="btn text-white"
                          style={{ background: "#992899" }}
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
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
