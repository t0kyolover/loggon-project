import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { Context } from "../../store/appContext";

import "../../../styles/button.css";

export const SearchBar = ({searchTerm, setSearchTerm, performSearch}) => {
  const { store, actions } = useContext(Context);

  /* useEffect(() => {
     if (!searchTerm) {
       setSuggestions([]);
     }
   }, [searchTerm]);*/

  /*const handleInputChange = (e) => {
     setSearchTerm(e.target.value);
     setSuggestions(actions.getSuggestions(e.target.value));
   };*/

  return (
    <div className="d-flex flex-row">
      <p className="">
        <button
          className="btn mt-3 icon-effect-purple border-0 rounded-circle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSearch"
          aria-expanded="false"
          aria-controls="collapseSearch"
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#992899", fontSize: "20px" }}
          ></i>
        </button>
      </p>
      <div style={{ minHeight: "50px" }}>
        <div className="collapse collapse-horizontal" id="collapseSearch">
          <form onSubmit={performSearch}>
            <input
              type="search"
              className="form-control rounded-5 w-auto text-white bg-transparent mt-3"
              style={{ maxHeight: "30px" }}
              aria-label="Búsqueda"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
