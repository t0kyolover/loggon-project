import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { DealCard } from "../component/dealCard";
import { GameCard } from "../component/gameCard";

import { Context } from "../store/appContext";

export const SearchResults = () => {
  const { store, actions } = useContext(Context);
  const { keyword } = useParams();

  useEffect(() => {
    console.log(keyword);
    actions.searchInNavbar(keyword);
  }, []);

  return (
    <div>
      <div className="text-center text-white m-5"></div>
      <div className="container text-center">
        <h5 className="text-white">Deals</h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
          {store.searchResults
            .filter((item) => item.user_id)
            .map((deal, index) => {
              return (
                <div className="col">
                  <DealCard
                    key={index}
                    id={deal.id}
                    gameTitle={deal.game_title}
                    imageUrl={deal.image_url}
                    itemType={deal.item_type}
                    platform={deal.platform}
                    format={deal.format}
                    originalPrice={deal.original_price}
                    offerPrice={deal.offer_price}
                    expirationDate={deal.expiration_date}
                    promoCode={deal.promo_code}
                    offerLink={deal.offer_link}
                    gameTags={deal.game_tags}
                    rating={deal.rating}
                  />
                  ;
                </div>
              );
            })}
        </div>
        <h5 className="text-white">Games</h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
        {/*store.searchResults
            .filter((item) => item.user_id)
            .map((game, index) => {
              return (
                <div className="col">
                  <GameCard
                  />
                  ;
                </div>
              );
            })*/}
        </div>
      </div>
    </div>
  );
};
