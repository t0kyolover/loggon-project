import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/cardEffect.css";

import { Context } from "../store/appContext";

export const DealCard = (props) => {
  const { store, actions } = useContext(Context);

  const [deal, setDeal] = useState({
    id: props.id,
    game_title: props.gameTitle,
    image_url: props.imageUrl,
    item_type: props.itemType,
    platform: props.platform,
    format: props.format,
    original_price: props.originalPrice,
    offer_price: props.offerPrice,
    expiration_date: props.expirationDate,
    promo_code: props.promoCode,
    offer_link: props.offerLink,
    game_tags: props.gameTags,
    rating: props.rating,
  });

  console.log(deal.id);

  return (
    <div
      className="card card-effect sombra text-white"
      style={{ width: "18rem" }}
    >
      <img src={deal.image_url} className="card-img-top" alt="..." />
      <div className="card-body flex-row d-flex bg-color text-white rounded-bottom-2 shadow-lg">
        <div className="row">
          <div className="col-7">
            <h5 className="card-title">{deal.game_title}</h5>
          </div>
          <div className="col-5">
            {deal.expiration_date && (
              <p
                className="card-text text-white"
                style={{ fontSize: "x-small" }}
              >
                {deal.expiration_date} ⌛
              </p>
            )}
          </div>
          <div className="col-6" >
            <p className="card-text">{deal.format}</p>
            <p className="card-text" style={{ fontSize: "small" }}>{deal.item_type}</p>
          </div>
          <div className="col-6">
            <h4 className="card-text ms-2">{deal.offer_price} €</h4>
            <p className="card-text text-decoration-line-through">
              {deal.original_price} €
            </p>
          </div>
          {/*<p>Rating {deal.rating}</p>*/}

          <div className="d-flex flex-row grid gap-2">
            <div className="col-6">
              <Link
                className="btn btn-link btn-effect rounded-2 mt-3 px-2 w-100"
                to={`/post/${deal.id}`}
                style={{ textDecoration: "none" }}
              >
                DETAILS
              </Link>
            </div>
            <div className="col-6">
              <button className="btn rounded-2 mt-3 btn-effect-blue w-100">
                <a
                  href={deal.offer_link}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  DEAL
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
