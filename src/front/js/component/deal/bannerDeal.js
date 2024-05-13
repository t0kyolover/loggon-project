import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import bn1 from "../../../img/bn1.png";
import "../../../styles/styles.css";

import { Context } from "../../store/appContext";

export const BannerDeal = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="wrapper">
      <div className="containerBanner">
        <input type="radio" name="slide" id="c1" checked />
        <label
          htmlFor="c1"
          className="cardBanner card-effect"
          style={{ backgroundImage: `url(${bn1})` }}
        >
          <div className="row ">
            <div className="icon">1</div>
            <div className="description">
              <h4>1</h4>
              <p>lorem</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label
          htmlFor="c2"
          className="cardBanner card-effect"
          style={{ backgroundImage: `url(${bn1})` }}
        >
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>2</h4>
              <p>Lorem</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label
          htmlFor="c3"
          className="cardBanner card-effect"
          style={{ backgroundImage: `url(${bn1})` }}
        >
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>3</h4>
              <p>lorem</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label
          htmlFor="c4"
          className="cardBanner card-effect"
          style={{ backgroundImage: `url(${bn1})` }}
        >
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
              <h4>4</h4>
              <p>lorem</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
