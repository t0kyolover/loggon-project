import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const DealCard = () => {
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
        <div className="ms-auto">
          <p>Rating {rating}</p>
        </div>
      </div>
    </div>
  );
};
