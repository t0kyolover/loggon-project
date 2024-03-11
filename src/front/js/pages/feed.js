import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import loggonBn from '/workspaces/loggon-dak-final-project-v2/src/front/img/loggonBn.png';

import "/workspaces/loggon-dak-final-project-v2/src/front/styles/icons.css"

import { DealCard } from "../component/dealCard";
import { Filters } from "../component/filters";

import { Context } from "../store/appContext";

export const Feed = () => {
  const { store, actions } = useContext(Context);
  const [activeTab, setActiveTab] = useState("grid1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    let activeElement = null;

    const handleClick = (event) => {
      if (activeElement) activeElement.classList.remove('active');
      if (event.target.matches('.ps-effect, .xbox-effect, .pc-effect, .nintendo-effect')) {
        activeElement = event.target;
        activeElement.classList.add('active');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      {/*------------------------------------LOGO---------------------------------*/}
      <div className="container mt-2 py-5 ">
      <img src={loggonBn} alt="Descrição da Imagem" className="img-fluid"/>
      </div>
      <div className="d-flex justify-content-end pt-4">
        <Filters />
      </div>
      {/*---------------------------------------PLATFORMS TABS---------------------------------*/}
      <div className="row mt-3">
        <nav className="d-flex justify-content-center ">
          <div className="nav nav-tabs " id="nav-tab" role="tablist">
            <button
              className="bg-dark border-0 "
              id="nav-ps-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-ps"
              type="button"
              role="tab"
              aria-controls="nav-ps"
              
            >
            <img className="ps-effect rounded-circle" src="https://img.icons8.com/ios-glyphs/50/228BE6/play-station.png" alt="play-station"/>
            </button>
            <button
              className="bg-dark border-0"
              id="nav-xbox-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-xbox"
              type="button"
              role="tab"
              aria-controls="nav-xbox"
              
            >
              <img className="xbox-effect rounded-circle" src="https://img.icons8.com/ios/50/40C057/xbox.png" alt="xbox"/>
            </button>
            <button
              className="bg-dark border-0"
              id="nav-pc-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-pc"
              type="button"
              role="tab"
              aria-controls="nav-pc"
              
            >
              <img className="pc-effect rounded-4 img-fluid" src="https://img.icons8.com/ios-glyphs/50/FD7E14/windows-10.png" alt="windows-10"/>
            </button>
            <button
              className="bg-dark border-0"
              id="nav-nintendo-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-nintendo"
              type="button"
              role="tab"
              aria-controls="nav-nintendo"
              
            >
              <img className="nintendo-effect rounded-4 img-fluid" src="https://img.icons8.com/ios-filled/50/FA5252/nintendo-switch-logo.png" alt="nintendo-switch-logo"/>
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
            <div className="container text-center pb-5">
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
