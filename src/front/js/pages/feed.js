import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { DealCard } from "../component/dealCard";
import { Filters } from "../component/filters";

import { Context } from "../store/appContext";

export const Feed = () => {
  const { store, actions } = useContext(Context);
  const [activeTab, setActiveTab] = useState("grid1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/*------------------------------------LOGO---------------------------------*/}
      <div className="container mt-2 py-5 bg-light">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
      </div>
      <div className="d-flex justify-content-end pt-4">
        <Filters />
      </div>
      {/*---------------------------------------PLATFORMS TABS---------------------------------*/}
      <div className="row mt-3">
        <nav className="d-flex justify-content-center">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-ps-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-ps"
              type="button"
              role="tab"
              aria-controls="nav-ps"
              aria-selected="true"
            >
              PS
            </button>
            <button
              className="nav-link"
              id="nav-xbox-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-xbox"
              type="button"
              role="tab"
              aria-controls="nav-xbox"
              aria-selected="false"
            >
              XBOX
            </button>
            <button
              className="nav-link"
              id="nav-pc-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-pc"
              type="button"
              role="tab"
              aria-controls="nav-pc"
              aria-selected="false"
            >
              PC
            </button>
            <button
              className="nav-link"
              id="nav-nintendo-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-nintendo"
              type="button"
              role="tab"
              aria-controls="nav-nintendo"
              aria-selected="faalse"
            >
              Nintendo
            </button>
          </div>
        </nav>
        {/*---------------------------------------PLATFORMS TABS CONTENT---------------------------------*/}
        <div className="tab-content" id="nav-tabContent">
            {/*---------------------------------------PS---------------------------------*/}
          <div
            className="tab-pane fade show active"
            id="nav-ps"
            role="tabpanel"
            aria-labelledby="nav-ps-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row row-cols-auto">
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
              </div>
            </div>
          </div>
          {/*---------------------------------------XBOX---------------------------------*/}
          <div
            className="tab-pane fade"
            id="nav-xbox"
            role="tabpanel"
            aria-labelledby="nav-xbox-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row row-cols-auto">
              <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
            </div>
            </div>
          </div>
          {/*---------------------------------------PC---------------------------------*/}
          <div
            className="tab-pane fade"
            id="nav-pc"
            role="tabpanel"
            aria-labelledby="nav-pc-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row row-cols-auto">
              <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
                <div className="col m-auto my-4">
                  <DealCard />
                </div>
            </div>
            </div>
          </div>
          {/*---------------------------------------NINTENDO---------------------------------*/}
          <div
            className="tab-pane fade"
            id="nav-nintendo"
            role="tabpanel"
            aria-labelledby="nav-nintendo-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row row-cols-auto">
            <div className="col mx-2 my-4">
              <DealCard />
            </div>
            <div className="ccol mx-2 my-4">
              <DealCard />
            </div>
            <div className="col mx-2 my-4">
              <DealCard />
            </div>
            <div className="col mx-2 my-4">
              <DealCard />
            </div>
            <div className="col mx-2 my-4">
              <DealCard />
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};
