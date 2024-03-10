import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


import { GameCard } from "../component/gameCard";
import { Filters } from "../component/filters";

import { Context } from "../store/appContext";

export const Games = () => {
  const { store, actions } = useContext(Context);
  const [activeTab, setActiveTab] = useState("grid1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="text-center text-white m-3">
        <h1 style={{ fontSize: "50px" }}>Games</h1>
      </div>
      <div className="d-flex justify-content-end">
        <Filters />
      </div>
      <div className="container text-center">
        <div className="row row-cols-auto">
         <div className="col m-auto">
            <GameCard />
          </div>
          <div className="col m-auto">
            <GameCard />
          </div>
          <div className="col m-auto">
            <GameCard />
          </div>
          <div className="col m-auto">
            <GameCard />
          </div>
          <div className="col m-auto">
            <GameCard />
          </div>
          <div className="col m-auto ">
            <GameCard />
          </div>
          <div className="col m-auto ">
            <GameCard />
          </div>
        </div>
      </div>
    </div>
  );
};
