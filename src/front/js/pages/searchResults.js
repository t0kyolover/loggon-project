import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DealCard } from "../component/dealCard";
import { GameCard } from "../component/gameCard";

import { Context } from "../store/appContext";

export const SearchResults = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <div>
      <div className="text-center text-white m-5">
      </div>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
          <div className="col">
            <DealCard />
          </div>
          <div className="col">
            <DealCard />
          </div>
          <div className="col">
            <DealCard />
          </div>
          <div className="col">
            <DealCard />
          </div>
        </div>
      </div>
    </div>
  );
};
