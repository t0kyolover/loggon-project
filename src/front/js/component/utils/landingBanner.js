import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../../styles/cardEffect.css";

import bn1 from "../../../img/bn1.png";

import { Context } from "../../store/appContext";

export const LandingBanner = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container d-flex flex-column justify-content-center p-5">
        <div className="text-white text-center m-3">
          <h1 style={{ fontSize: "50px" }}>Welcome to</h1>
        </div>
        <img
          src={bn1}
          alt="bn"
          width="auto"
          height="auto"
          className="mt-3 sombra rounded-4 bn-effect img-fluid"
        />{" "}
      </div>
    </>
  );
};
