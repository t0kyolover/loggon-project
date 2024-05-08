import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingSpinner } from "../component/loadingSpinner";
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

  if (store.gamesWithDetails.length === 0) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <div>
      <div className="text-white m-3">
        <h1 style={{ fontSize: "50px" }}>Games</h1>
      </div>
      <div className="d-flex justify-content-end">
        <Filters />
      </div>
      <div className="container text-center ">
        <div className="row row-cols-auto justify-content-center">
            {store.gamesWithDetails.map((game, index) => (
              <div key={game.id} className="col">
              <GameCard
                key={game.id}
                game={game}
                description={(game.description)}
              />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
