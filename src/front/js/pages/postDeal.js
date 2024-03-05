import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { PostDealCard } from "../component/postDealCard";

import { Context } from "../store/appContext";

export const PostDeal = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center w-100 mt-3">
        <div className="d-flex flex-column text-white">
          <h3 className="m-3 ms-0">Post Deal</h3>
          <PostDealCard />
          {/*---------------------------------------BUTTONS---------------------------------*/}
          <div className="grid gap-3 d-flex justify-content-end mb-4">
            <button
              type="button"
              className="btn"
              style={{ background: "#992899" }}
            >
              <i className="fa-solid fa-plus text-white"></i>
            </button>
            <button
              type="button"
              className="btn text-white"
              style={{ background: "#992899" }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
