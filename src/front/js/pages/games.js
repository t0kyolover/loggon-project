import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { GameCard } from "../component/gameCard";
import { Filters } from "../component/filters";

import { Context } from "../store/appContext";

export const Games = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadGames();
  }, []);

 useEffect(() => {
    actions.loadGamesWithDetails();
  }, [store.games])

  return (
    <div>
      <div className="text-center text-white m-3">
        <h1 style={{ fontSize: "50px" }}>Games</h1>
      </div>
      <div className="d-flex justify-content-end">
        <Filters />
      </div>
      <div className="container text-center">
        <div className="row row-cols-auto">
          <div className="col m-auto">
            {store.gamesWithDetails.map((game, index) => (
              <GameCard
                key={game.id}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
