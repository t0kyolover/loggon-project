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

  console.log(deal.id);
  return (
    <div
      className="card card-effect sombra text-white"
      style={{ width: "18rem" }}
    >
      <img src={deal.image_url} className="card-img-top" alt="..." />
      <div className="card-body flex-row d-flex">
        <div>
          <h5 className="card-title">{deal.game_title}</h5>
          <div className="d-flex flex-inline">
            <p className="card-text">{deal.item_type}</p>
            <p className="card-text ms-2">{deal.format}</p>
          </div>
          <div className="d-flex flex-column">
            <button
            className="btn text-white rounded- ms-3"
            style={{ background: "#992899" }}
          >
            <a className="text-white" href={deal.offer_link} target="_blank">
              Deal
            </a>
          </button>
          <Link className="btn btn-link" to={`/post/${deal.id}`}>
            Details
          </Link>
          </div>
        </div>
        <div className="ms-auto">
          {deal.expiration_date && (
            <p className="card-text">{deal.expiration_date}</p>
          )}<p className="card-text text-decoration-line-through">
              {deal.original_price} €
            </p>
            <p className="card-text ms-2">{deal.offer_price} €</p>
          
          {/*<p>Rating {deal.rating}</p>*/}
        </div>
      </div>
    </div>
  );
};
