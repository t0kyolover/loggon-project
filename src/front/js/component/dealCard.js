import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "/workspaces/loggon-dak-final-project-v2/src/front/styles/cardEffect.css";

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
  
  return (
    <div
      className="card card-effect sombra text-white"
      style={{ width: "18rem" }}
    >
      <img src={deal.image_url} className="card-img-top" alt="..." />
      <div className="card-body flex-row d-flex">
        <div>
          <h5 className="card-title">{deal.game_title}</h5>
          <p className="card-text">{deal.item_type}</p>
          <p className="card-text">{deal.format}</p>
          <p className="card-text text-decoration-line-through">
            {deal.original_price}
          </p>
          <p className="card-text">{deal.offer_price} €</p>
          {deal.promo_code && <p className="card-text">{deal.promo_code}</p>}
          {deal.expiration_date && (
            <p className="card-text">{deal.expiration_date}</p>
          )}
          {deal.game_tags.map((tag, index) => (
            <li
            className="list-group-item bg-transparent text-white rounded-5 border-white border m-1"
            key={index}
          > {tag}</li>
          ))}
          <Link className="btn btn-link" to={`/post/${props.id}`}>
            Details
          </Link>
          <button
            className="btn text-white rounded-5 ms-3"
            style={{ background: "#992899" }}
          >
            <a className="text-white" href={deal.offer_link} target="_blank">
              Offer Link
            </a>
          </button>
        </div>
        <div className="ms-auto">
          <p>Rating {deal.rating}</p>
        </div>
      </div>
    </div>
  );
};
