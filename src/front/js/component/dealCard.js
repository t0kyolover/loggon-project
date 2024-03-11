import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "/workspaces/loggon-dak-final-project-v2/src/front/styles/cardEffect.css"

import { Context } from "../store/appContext";

export const DealCard = (props) => {
  const { store, actions } = useContext(Context);

  const [deal, setDeal] = useState({
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

  const [gameTitle, setGameTitle] = useState("Game Title");
  const [format, setFormat] = useState("Digital");
  const [offerPrice, setOfferPrice] = useState(100);
  const [rating, setRating] = useState(10);

  return (
    <div className="card card-effect sombra text-white" style={{ width: "18rem" }}>
      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
      <div className="card-body flex-row d-flex">
        <div>
          <h5 className="card-title">{gameTitle}</h5>
          <p className="card-text">{format}</p>
          <p className="card-text">{offerPrice} €</p>
          <p className="card-text">{deal.game_tags} €</p> {/* Map de tags */}
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
