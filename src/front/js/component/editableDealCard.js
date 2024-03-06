import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const EditableDealCard = () => {
  const { store, actions } = useContext(Context);

  const [gameTitle, setGameTitle] = useState("Game Title");
  const [format, setFormat] = useState("Digital");
  const [offerPrice, setOfferPrice] = useState(100);
  const [rating, setRating] = useState(10);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
      <div className="card-body flex-row d-flex">
        <div>
          <h5 className="card-title">{gameTitle}</h5>
          <p className="card-text">{format}</p>
          <p className="card-text">{offerPrice} €</p>
          <Link className="btn btn-link" to="/post/:id">
            Details
          </Link>
        </div>
        {/*--------------------------MODIFY DEAL MODAL TRIGGER BUTTON----------------------*/}
        <div className="ms-auto">
          <button
            className="btn py-0"
            data-bs-toggle="modal"
            data-bs-target="#editDealModalToggle"
          >
            <i className="fa-solid fa-pencil" style={{ color: "#992899" }}></i>
          </button>
          <p>Rating {rating}</p>
          {/*--------------------------MODIFY DEAL MODAL----------------------*/}
          <div
            className="modal fade"
            id="editDealModalToggle"
            tabIndex="-1"
            aria-labelledby="editDealModalToggleLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header border-0">
                  <h1
                    className="modal-title fs-5"
                    id="editDealModalToggleLabel"
                  >
                    Modify Post
                  </h1>
                  <div className="ms-auto" data-bs-theme="dark">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <input
                          type="file"
                          className="img-fluid rounded-start"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <ul className="list-group">
                            {/*---------------------------------------Original Price---------------------------------*/}
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="number"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                placeholder="Original price"
                                required
                              />
                            </li>
                            {/*---------------------------------------Promo Price---------------------------------*/}
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="number"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                placeholder="Offer price"
                                required
                              />
                            </li>
                            {/*---------------------------------------Exp Date---------------------------------*/}
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="date"
                                placeholder="Expiration date"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                              />
                            </li>
                            {/*---------------------------------------Promo Code---------------------------------*/}
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="text"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                placeholder="Promocode"
                              />
                            </li>
                            {/*---------------------------------------Offer Link---------------------------------*/}
                            <li
                              className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                              style={{ maxHeight: "35px" }}
                            >
                              <input
                                type="text"
                                className="form-control border-0 text-white bg-transparent h-100 p-0"
                                placehoolder="Offer link"
                                required
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn text-white"
                    style={{ background: "#992899" }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
