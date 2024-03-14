import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams} from "react-router-dom";

import { DealCard } from "../component/dealCard";
import { GameCard } from "../component/gameCard";

import { Context } from "../store/appContext";

export const SearchResults = () => {
  const { store, actions } = useContext(Context);
  const { keyword } = useParams();
  

  useEffect(() => {
    actions.searchInNavbar(keyword);
  }, []);

  useEffect(() => {
    actions.searchInNavbar(keyword);
  }, [keyword]);

  const deals = store.searchResults.filter((item) => item.user_id);
  const games = store.searchResults.filter((item) => item.rawg_id);
  console.log("games", games);

  return (
    <div>
      <div className="text-center text-white m-5"></div>
      <div className="container text-center ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3 justify-content-center">
          {/*<h5 className="text-white">Deals</h5>
          */}
          {deals.length > 0 &&
            deals.map((deal, index) => (
              <div key={index}>
                <div className="col" >
                  <DealCard
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
              </div>
            ))}
        </div>
        {/*<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
          <h5 className="text-white">Games</h5>
          {games.length > 0 &&
            games.map((game, index) => (
              <div key={index}>
                <div className="col" >
                  <GameCard
                    id={game.id}
                    rawgId={game.rawg_id}
                    name={game.name}
                    description={game.description}
                    released={game.released}
                    tba={game.tba}
                    website={game.website}
                    backgroundImage={game.background_image}
                    backgroundImageAdditional={game.background_image_additional}
                    platforms={game.platforms}
                    gameTags={game.game_tags}
                  />
                </div>
              </div>
            ))}
        </div>
        */}
        
      </div>
    </div>
  );
};
