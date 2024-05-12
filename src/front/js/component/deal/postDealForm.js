import React, { useState, useEffect, useContext } from "react";
import { Formik, useFormik } from "formik";
import { postDealSchema } from "../../schemas";
import { Link } from "react-router-dom";

import { Context } from "../../store/appContext";

export const PostDealForm = ({ onValuesChange }) => {
  const { store, actions } = useContext(Context);
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: store.newDealDefault,
    //validationSchema: postDealSchema,
    onSubmit: (values) => {
      actions.savePostDealForm(values);
      // actions.postDeal(values);
      console.log(store.newDeals, "Saved");
      onValuesChange(values);
    },
  });

  return (
    <>
      <form
        autoComplete="off"
        style={{ background: "#020D19" }}
        onSubmit={handleSubmit}
        className="mb-3"
      >
        {/*---------------------------------------CAROUSEL---------------------------------*/}
        <div id="carouselPostDealForm" className="carousel slide">
          <div className="carousel-inner">
            {/*---------------------------------------Carousel 1st Slide---------------------------------*/}
            <div className="carousel-item active">
              <div className="row">
                {/*---------------------------------------game title---------------------------------*/}
                <div className="col-6">
                  <label htmlFor="game_title" className="form-label">
                    Game Title
                  </label>
                  <div className="input-group mb-3 align-items-center">
                    <i id="search-addon" className="fas fa-search me-2"></i>
                    <input
                      value={values.game_title}
                      type="search"
                      className="form-control rounded-5 text-white bg-transparent text-white"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="game_title"
                      required
                    />
                  </div>
                  {errors.game_title && touched.game_title && (
                    <p className="error mt-2 ms-3">{errors.game_title}</p>
                  )}
                </div>
                {/*---------------------------------------image url---------------------------------*/}
                <div className="col-6">
                  <label htmlFor="image_url" className="form-label">
                    Image URL
                  </label>
                  <input
                    value={values.image_url}
                    type="text"
                    className={
                      "form-control rounded-5 text-white bg-transparent text-white"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="image_url"
                    required
                  />
                  {errors.image_url && touched.image_url && (
                    <p className="error mt-2">{errors.image_url}</p>
                  )}
                </div>
              </div>
            </div>
            {/*---------------------------------------Carousel 2nd Slide---------------------------------*/}
            <div className="carousel-item">
              <div className="row mb-3">
                {/*---------------------------------------platform---------------------------------*/}
                <div className="col-4">
                  <label htmlFor="platform" className="form-label">
                    Platform
                  </label>
                  <select
                    value={values.platform}
                    className={
                      "form-control rounded-5 text-white bg-transparent text-white"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="plaform"
                    required
                  >
                    <option value="PC">PC</option>
                    <option value="PS5">PS5</option>
                    <option value="Xbox">Xbox</option>
                    <option value="Nintendo">Nintendo</option>
                  </select>
                </div>{" "}
                {/*---------------------------------------format---------------------------------*/}
                <div className="col-4"></div>
                {/*---------------------------------------type---------------------------------*/}
                <div className="col-4">
                  <label htmlFor="type" className="form-label">
                    Type
                  </label>
                  <select
                    value={values.type}
                    className={
                      "form-control rounded-5 text-white bg-transparent text-white"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="type"
                    required
                  >
                    <option value="Game">Game</option>
                    <option value="DLC">DLC</option>
                    <option value="Subscription">Subscription</option>
                  </select>
                </div>
              </div>
            </div>
            {/*---------------------------------------Carousel 3rd Slide---------------------------------*/}
            <div className="carousel-item">
              <div className="row">
                {/*---------------------------------------original price---------------------------------*/}
                <div className="col-6">
                  <label htmlFor="original_price" className="form-label">
                    Original Price
                  </label>
                  <div className="input-group mb-3 align-items-center">
                    <i id="price-addon" className="fas fa-dollar me-2"></i>
                    <input
                      value={values.original_price}
                      type="number"
                      className="form-control rounded-5 text-white bg-transparent text-white"
                      aria-label="Price"
                      aria-describedby="price-addon"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="original_price"
                      required
                    />
                  </div>
                  {errors.original_price && touched.original_price && (
                    <p className="error mt-2">{errors.original_price}</p>
                  )}
                </div>
                {/*---------------------------------------offer price---------------------------------*/}
                <div className="col-6">
                  <label htmlFor="offer_price" className="form-label">
                    Offer Price
                  </label>
                  <div className="input-group mb-3 align-items-center">
                    <i id="price2-addon" className="fas fa-percent me-2"></i>
                    <input
                      value={values.offer_price}
                      type="number"
                      className="form-control rounded-5 text-white bg-transparent text-white"
                      aria-label="Price2"
                      aria-describedby="price2-addon"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="offer_price"
                      required
                    />
                  </div>
                  {errors.offer_price && touched.offer_price && (
                    <p className="error mt-2">{errors.offer_price}</p>
                  )}
                </div>
              </div>
              <div className="row">
                {/*---------------------------------------expiration date---------------------------------*/}
                <div className="col-4"></div>
                {/*---------------------------------------promo code---------------------------------*/}
                <div className="col-4">
                  <label htmlFor="promo_code" className="form-label">
                    Promocode
                  </label>
                  <div className="input-group mb-3 align-items-center">
                    <i id="promocode-addon" className="fas fa-barcode me-2"></i>
                    <input
                      value={values.promo_code}
                      type="text"
                      className="form-control rounded-5 text-white bg-transparent text-white"
                      aria-label="Promocode"
                      aria-describedby="promocode-addon"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="promo_code"
                    />
                  </div>
                </div>
                {/*---------------------------------------offer link---------------------------------*/}
                <div className="col-4">
                  <label htmlFor="offer_link" className="form-label">
                    Offer link
                  </label>
                  <div className="input-group mb-3 align-items-center">
                    <input
                      value={values.offer_link}
                      type="text"
                      className="form-control rounded-5 text-white bg-transparent text-white"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="offer_link"
                      required
                    />
                  </div>
                  {errors.offer_link && touched.offer_link && (
                    <p className="error mt-2">{errors.offer_link}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/*---------------------------------------Buttons---------------------------------*/}
          <div className="row mt-3">
            <div className="d-flex flex-row justify-content-end">
              {/*-------------------------save-----------------------**/}
              <button disabled={isSubmitting} type="submit" className="col-2 btn btn-effect me-3">
                Save
              </button>
              {/*----------------carousel navigation-------------------*/}
              <button
                className="col-1 btn btn-effect-blue me-2 p-0"
                type="button"
                data-bs-target="#carouselPostDealForm"
                data-bs-slide="prev"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                className="col-1 btn btn-effect-blue"
                type="button"
                data-bs-target="#carouselPostDealForm"
                data-bs-slide="next"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
