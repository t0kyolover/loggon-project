import React, { useState, useEffect, useContext } from "react";
import { Formik, useFormik } from "formik";
import { postDealSchema } from "../../schemas";
import { Link } from "react-router-dom";

import { Context } from "../../store/appContext";

export const PostDealForm = () => {
  const { store, actions } = useContext(Context);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        // user_id: store.user.id,
        image_url: "",
        game_title: "",
        platform: "PC",
        type: "Game",
        format: "Digital",
        original_price: "",
        offer_price: "",
        expiration_date: null,
        promo_code: "",
        offer_link: "",
        scheduled_date: null,
        scheduled_time: null,
        scheduled: false,
        rating: 0,
      },
      validationSchema: postDealSchema,
      onSubmit: (values) => {
        // actions.postDeal(values);
        console.log(values);
      },
    });

  return (
    <>
      <form
        autoComplete="off"
        style={{ background: "#020D19" }}
        onSubmit={handleSubmit}
      >
        <ul className="list-group">
          <div className="row">
            <div className="col-6">
              {/*---------------------------------------Game Title---------------------------------*/}
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                style={{ maxHeight: "35px" }}
              >
                <input
                  value={values.game_title}
                  type="search"
                  className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                  placeholder="Game title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="game_title"
                  required
                />
              </li>
            </div>
            <div className="col-6">
              {/*---------------------------------------Image Url---------------------------------*/}
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-column border border-white"
                style={{ maxHeight: "35px" }}
              >
                <input
                  value={values.image_url}
                  type="text"
                  className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                  placeholder="Image URL"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="image_url"
                  required
                />
                {errors.image_url && touched.image_url && (
                  <p className="error">{errors.image_url}</p>
                )}
              </li>
            </div>
          </div>
          <div className="row"></div>
          <div className="row">
            <div className="col-4">
              {/*---------------------------------------Platform---------------------------------
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
              </li>*/}
            </div>
            <div className="col-4">
              {/*---------------------------------------Type---------------------------------
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
                  <option value="In-game Purchase">In-game Purchase</option>
                </select>
              </li>*/}
            </div>
            <div className="col-4">
              {/*---------------------------------------Format---------------------------------
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
              </li>*/}
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
                  value={values.original_price}
                  type="number"
                  className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                  placeholder="Original price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="original_price"
                  required
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
                  value={values.offer_price}
                  type="number"
                  className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                  placeholder="Offer price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="offer_price"
                  required
                />
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              {/*---------------------------------------Expiration Date---------------------------------
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
              </li>*/}
            </div>
            <div className="col-4">
              {/*---------------------------------------Promo Code---------------------------------*/}
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row border border-white"
                style={{ maxHeight: "35px" }}
              >
                <input
                  value={values.promo_code}
                  type="text"
                  className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                  placeholder="Promocode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="promo_code"
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
                  value={values.offer_link}
                  type="text"
                  className="form-control border-0 text-white bg-transparent h-100 p-0 input-placeholder-white"
                  placeholder="Offerlink"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="offer_link"
                  required
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
                  {/* <input
                    onChange={(e) => setScheduled(!scheduled)}
                    className="form-check-input"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label ms-2"
                    htmlFor="scheduleCheck"
                  >
                    <h6>Schedule</h6>
                  </label> */}

                  {/*---------------------------------------Schedule Post Modal Trigger---------------------------------*/}
                  <div className="d-inline-flex">
                    {/* {scheduled && (
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
                    )} */}
                   {/*-------------------------Save Button-----------------------**/}
                    <button
                      type="submit"
                      className="btn btn-effect ms-3"
                      // data-bs-dismiss="modal"
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
    </>
  );
};
