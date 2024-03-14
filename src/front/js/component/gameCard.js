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
        <div className="face face1 " >
          <div className="content " >
            <img
              src={game.background_image} 
              //src="https://picsum.photos/id/1/200"
              className="card-img-top rounded-2 img-fluid" 
              alt="..."
            />
            <div> 
            </div>
          </div>
        </div>
        <div className="face face2 d-flex flex-column">
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
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-transparent text-white">
            <div className="m-auto" data-bs-theme="dark">
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 text-white m-1"
                style={{ zIndex: 1051 }} 
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <div
                className="position-relative image-fluid"
                style={{
                  backgroundImage: `url(${game.background_image_additional})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100vh",
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
                 {/*-----------------------------Game Information from API----------------------------------*/}
                 <div className="position-absolute text-white">
  <div className="row">
    <div className="col">
      <h1 className="text-white my-auto mt-3">{game.name}</h1>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <h4 className="text-white mt-3">PLATFORM:</h4>
      <div className="d-flex justify-content-center align-items-center">
        {game.platforms.map((platform, index) => (
          <p key={index} className="text-white me-2">
            {platform}
          </p>
        ))}
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <h4 className="text-white">TAGS:</h4>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {game.game_tags.map((tag, index) => (
          <p key={index} className="text-white me-2" style={{ fontSize: "15px" }}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <p className="text-white">
      <h4> RELEASE DAY:</h4> {game.tba ? "To be announced" : game.released}
      </p>
    </div>
    <div className="col mt-2 ">
    <a href={game.website} target="_blank" className="text-white">
    <h4> Website</h4>
      </a>
    </div>
  </div>
  <div className="row">
    <div className="col-10 m-auto my-2">
      <div className="text-white">{description}</div>
    </div>
  </div>
</div>
                <button
                  type="button"
                  className="btn btn-close position-absolute top-0 end-0 text-white"
                  aria-label="Close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
