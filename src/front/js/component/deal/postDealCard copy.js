import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../store/appContext";
import { SchedulePostModal } from "./schedulePostModal";

export const PostDealCard = ({
  onInputChange,
  isAdditional,
  onClick,
}) => {
  const { store, actions } = useContext(Context);

  const [scheduled, setScheduled] = useState(false);

  return (
    <div
      className="card mb-3 border-0 text-white"
      style={{ maxWidth: "540px", background: "#020D19" }}
    >
      <form>
        <div className="row flex-row">
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
                      onInputChange(e, "game_title");
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
                      onInputChange(e, "image_url");
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
                      onInputChange(e, "platform");
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
                      onInputChange(e, "type");
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
                        onInputChange(e, "format");
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
                        onInputChange(e, "format");
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
                      onInputChange(e, "original_price");
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
                      onInputChange(e, "offer_price");
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
                      onInputChange(e, "expiration_date");
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
                      onInputChange(e, "promo_code");
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
                      onInputChange(e, "offer_link");
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
                          data-bs-target="#scheduleModal"
                        >
                          Choose
                        </button>
                      )}
                      {/*---------------------------------------DELETE BUTTON---------------------------------*/}
                      {isAdditional && (
                        <button
                          className="btn btn-effect py-0 ms-3"
                          onClick={onClick}
                        >
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </li>

                {/*---------------------------------------Schedule Post Modal---------------------------------*/}
                <SchedulePostModal onInputChange={onInputChange} />
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
