import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../../styles/cardOuterGLowEffect.css";

import { GameDetailsModal } from "./gameDetailsModal";

import { Context } from "../../store/appContext";

export const GameCard = ({ game }) => {
  const { store, actions } = useContext(Context);

  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(game.description);
  }, [game]);

  useEffect(() => {
    const fixedDescription = actions.extractEnglishDescription(
      game.description
    );
    setDescription(fixedDescription);
    console.log(fixedDescription);
    console.log("estoy aqui", description);
  }, [game]);

  return (
    <div className="container1">
      <div className="card">
        <div className="face face1">
          <div className="content">
            {/*---------------------------------------Game Image---------------------------------*/}
            <img
              src={game.background_image}
              className="card-img-top rounded-2 img-fluid"
              alt="..."
            />
          </div>
        </div>
        <div className="face face2 d-flex flex-column">
          <div className="content m-auto p-2">
            {/*------------------------Game Title // Details Modal Trigger---------------------------*/}
            <a
              href={`#detailsModal${game.id}`}
              className="content m-auto pt-auto text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target={`#detailsModal${game.id}`}
            >
              <h3>{game.name}</h3>
            </a>
          </div>
        </div>
      </div>
      {/*---------------------------------------Game Details Modal---------------------------------*/}
      <GameDetailsModal
        game={game}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};
