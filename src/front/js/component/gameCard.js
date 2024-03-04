import React from "react";
import { Link } from "react-router-dom";

export const GameCard = () => {
  return (

    
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://picsum.photos/id/1/200"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        {/*---------------------------------------DETAILS MODAL---------------------------------*/}

        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#detailsModal"
        >
          Details
        </button>

        <div
          class="modal fade"
          id="detailsModal"
          tabindex="-1"
          aria-labelledby="detailsModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark text-white">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="detailsModalLabel">
                  Game Details
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {/*---------------------------------------ALLAN---------------------------------*/}
                informacion de lo que que lleva el modal guachin
                {/*---------------------------------------ALLAN---------------------------------*/}
              </div>
              <div class="modal-footer">
                <p style={{ color: "#992899" }}>
                  Made by DKA <i className="fa-solid fa-skull-crossbones"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
