import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../../styles/cardEffect.css";

import { Context } from "../../store/appContext";

export const GameDetailsModal = ({ game, description, setDescription }) => {
  const { store, actions } = useContext(Context);

  //   const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(game.description);
  }, [game]);

  useEffect(() => {
    const fixedDescription = actions.extractEnglishDescription(
      game.description
    );
    setDescription(fixedDescription);
  }, [game]);

  return (
    <div
      className="modal fade"
      id={`detailsModal${game.id}`}
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div
          className="modal-content bg-transparent text-white"
          style={{ maxHeight: "700px" }}
        >
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
            {/*---------------------------------------Game Image---------------------------------*/}
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
              {/*-----------------------------Game Details------------------------------*/}
              <div className="position-absolute text-white">
                <div className="row">
                  {/*-----------------------------game title----------------------------*/}
                  <div className="col-12">
                    <div className="d-flex flex-row align-items-center mx-5">
                      <h1 className="text-white my-auto mt-3 flex-grow-1">
                        {game.name}
                        {/*-----------------------------game website------------------------*/}
                        <span className="badge">
                          <a
                            href={game.website}
                            target="_blank"
                            className="btn btn-effect-blue"
                          >
                            <i className="fa-solid fa-info m-1"></i>
                          </a>
                        </span>
                      </h1>{" "}
                      {/*-----------------------------release date----------------------------*/}
                      <h6>
                        <small>
                          {game.tba ? "To be announced" : game.released}
                        </small>
                      </h6>
                    </div>
                  </div>
                </div>
                {/*-----------------------------platforms----------------------------*/}
                <div className="row">
                  <div className="col">
                    <div className="d-flex flex-row mx-3">
                      <h6 className="text-white mt-3">PLATFORM:</h6>
                      <div className="d-flex justify-content-center align-items-center">
                        {game.platforms.map((platform, index) => (
                          <p key={index} className="text-white me-2">
                            <small>{platform}</small>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/*-----------------------------tags----------------------------*/}
                <div className="row">
                  <div className="col">
                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                      {game.game_tags.map((tag, index) => (
                        <h6
                          key={index}
                          className="list-group-item bg-transparent rounded-5 border border-white m-2 p-1 px-4 text-center"
                          style={{ fontSize: "15px" }}
                        >
                          {tag}
                        </h6>
                      ))}
                    </div>
                  </div>
                </div>
                {/*-----------------------------game description----------------------------*/}
                <div className="row">
                  <div className="col-10 m-auto my-2">
                    <div className="text-white">{description}</div>
                  </div>
                </div>
              </div>
              {/*-----------------------------Close Modal Button----------------------------*/}
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
  );
};
