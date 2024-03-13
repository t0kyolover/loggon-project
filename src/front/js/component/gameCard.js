import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "/workspaces/loggon-dak-final-project-v2/src/front/styles/cardOuterGLowEffect.css";

import { Context } from "../store/appContext";

export const GameCard = (props) => {
  const { store, actions } = useContext(Context);

  const [game, setGame] = useState({
    id: props.id,
    rawg_id: props.rawgId,
    name: props.name,
    description: props.description,
    released: props.released,
    tba: props.tba,
    website: props.website,
    background_image: props.backgroundImage,
    background_image_additional: props.backgroundImageAdditional,
    platforms: props.platforms,
    game_tags: props.gameTags,
  });

  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(game.description);
  }, [game]);

  useEffect(() => {
    const fixedDescription = actions.extractEnglishDescription(game.description);
    setDescription(fixedDescription);
    console.log(fixedDescription);
    console.log("estoy aqui", description);
  }, [game]);

  return (
    <div className="container1">
      <div className="card">
        <div className="face face1">
          <div className="content ">
            <img
              src={game.background_image} 
              //src="https://picsum.photos/id/1/200"
              className="card-img-top rounded-2 "
              alt="..."
            />
          </div>
        </div>
        <div className="face face2 d-flex flex-column justify-content-end">
          <div className="content m-auto p-2">
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
      {/*---------------------------------------DETAILS MODAL---------------------------------*/}
      <div
        className="modal fade"
        id={`detailsModal${game.id}`}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent text-white">
            <div className="ms-auto" data-bs-theme="dark">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <div
                className="position-relative"
                style={{
                  backgroundImage: `url(${game.background_image_additional})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "500px",
                }}
              >
                {/* Gradiente preto sólido na parte inferior */}
                <div
                  className="position-absolute w-100 bottom-0"
                  style={{
                    height: "95%",
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 10), transparent)",
                  }}
                ></div>
                {/* Gradiente transparente na parte superior */}
                <div
                  className="position-absolute w-100 top-0"
                  style={{
                    height: "95%",
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent)",
                  }}
                ></div>
                <div className="position-absolute text-white">
                  <h1 className="text-white my-auto">{game.name}</h1>
                  <p className="text-white m-auto">
                    {game.tba ? "To be announced" : game.released}
                  </p>
                  {game.platforms.map((platform, index) => (
                    <p key={index} className="text-white m-auto">
                      {platform}
                    </p>
                  ))}
                  <div className="d-flex">
                    {
                    game.game_tags.map((tag, index) => (
                    <p key={index} className="text-white m-auto" style={{fontSize: "10px"}}>
                      {tag}
                    </p>
                    ))}
                  </div>

                  <a href={game.website} target="_blank">
                    Website
                  </a>
                  <div>{description}</div>
                </div>
                <button
                  type="button"
                  className="btn btn-close position-absolute top-0 end-0 text-white"
                  aria-label="Close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              {/*-----------------------------Game Information from API----------------------------------*/}
              <div className="container text-white">
                {/* Your content here */}
              </div>
            </div>
            {/* <div className="modal-footer border-0">
              <p style={{ color: "#992899" }}>
                Made by DKA <i className="fa-solid fa-skull-crossbones"></i>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
