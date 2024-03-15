import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import '../../styles/cardEffect.css';

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
      <div className="card-body flex-row d-flex bg-color text-white rounded-bottom-2">
        <div className="row">
       
        <div className="col-12">
          <h5 className="card-title">{deal.game_title}</h5>
          <p className="card-text ms-2">{deal.format}</p>
          </div>
          <div className="d-flex mt-2">
        <div className="col-6">
          <p>Original Price:</p>
          <p className="card-text text-decoration-line-through">
              {deal.original_price} €
            </p>
            <p>Offer Price:</p>
            <p className="card-text ms-2">{deal.offer_price} €</p>
            </div>
          {/*<p>Rating {deal.rating}</p>*/}
          <div className="col-6">
          <p className="card-text">{deal.item_type}</p>
          {deal.expiration_date && (
            <p className="card-text text-white mt-2">{deal.expiration_date} ⌛</p>
          )}
          <Link className="btn btn-link text-white btn-effect rounded-2 mt-3 px-2" to={`/post/${deal.id}`} style={{ textDecoration: 'none' }}>
            DETAILS
          </Link>
          </div>
          </div>
          <div className="d-flex flex-column">
            <button
            className="btn text-white rounded-2 mt-3 btn-effect-blue"
          >
            <a className="text-white" href={deal.offer_link} target="_blank" style={{ textDecoration: 'none' }}>
              DEAL
            </a>
          </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};