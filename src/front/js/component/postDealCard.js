import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PostDealCard = () => {
  const { store, actions } = useContext(Context);
  const [scheduled, setScheduled] = useState(false);

  return (
    <div
      className="card mb-3 bg-dark border-0 text-white"
      style={{ maxWidth: "540px" }}
    >
      {/*---------------------------------------DEAL INPUT FORM---------------------------------*/}
      <form>
        <div className="row g-0">
          <div className="col-md-4">
            <input type="file" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <ul className="list-group">
                {/*---------------------------------------Game Title---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="search"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placeholder="Nombre de Juego"
                    required
                  />
                </li>
                {/*---------------------------------------Platform---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <select
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    required
                  >
                    <option value="PC">PC</option>
                    <option value="PC">PS4</option>
                    <option value="PC">Xbox</option>
                    <option value="PC">Nintendo</option>
                  </select>
                </li>
                {/*---------------------------------------Type---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <select
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placeholder="Tipo"
                    required
                  >
                    <option value="PC">Juego</option>
                    <option value="PC">DLC</option>
                    <option value="PC">In-game</option>
                  </select>
                </li>
                {/*---------------------------------------Format---------------------------------*/}
                <li
                  className="list-group-item border-0 my-2 text-white bg-transparent d-flex"
                  style={{ maxHeight: "35px" }}
                >
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioFormat"
                      id="flexRadioDigital"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDigital"
                    >
                      Digital
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioFormat"
                      id="flexRadioPhysical"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioPhysical"
                    >
                      CD
                    </label>
                  </div>
                </li>
                {/*---------------------------------------Original Price---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="number"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placeholder="Precio original"
                    required
                  />
                </li>
                {/*---------------------------------------Promo Price---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="number"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placeholder="Precio de oferta"
                    required
                  />
                </li>
                {/*---------------------------------------Exp Date---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="date"
                    placeholder="Fecha de vencimiento"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                  />
                </li>
                {/*---------------------------------------Promo Code---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="text"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placeholder="Código Promocional"
                  />
                </li>
                {/*---------------------------------------Offer Link---------------------------------*/}
                <li
                  className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <input
                    type="text"
                    className="form-control border-0 text-white bg-transparent h-100 p-0"
                    placehoolder="Enlace de oferta"
                    required
                  />
                </li>
                {/*---------------------------------------Schedule Post---------------------------------*/}
                <li
                  className="list-group-item border-0 my-2 text-white bg-transparent d-flex flex-row"
                  style={{ maxHeight: "35px" }}
                >
                  <div className="form-check d-flex flex-row align-items-center">
                    <input
                      onChange={(e) => setScheduled(!scheduled)}
                      className="form-check-input"
                      type="checkbox"
                    />
                    <label className="form-check-label ms-2" htmlFor="scheduleCheck">
                      Programar
                    </label>
                    {/*---------------------------------------Schedule Post Modal Trigger---------------------------------*/}
                    {scheduled && (
                      <button
                        type="button"
                        className="btn btn-link"
                        id="scheduleCheck"
                        data-bs-toggle="modal"
                        data-bs-target="#scheduleModal"
                      >
                        Elegir fecha y hora
                      </button>
                    )}
                  </div>
                </li>
                {/*---------------------------------------Schedule Post Modal---------------------------------*/}
                <div
                  className="modal fade"
                  id="scheduleModal"
                  aria-hidden="true"
                  aria-labelledby="scheduleModalLabel"
                  tabIndex="-1"
                >
                  <div className="modal-dialog modal-sm modal-dialog-centered">
                    <div className="modal-content bg-dark text-white">
                      <div className="modal-header border-0">
                        <h1
                          className="modal-title fs-5"
                          id="scheduleModalLabel"
                        >
                          Programar la publicación
                        </h1>
                        <div className="ms-auto" data-bs-theme="dark">
                          <button
                            type="button"
                            className="btn-close "
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                      </div>
                      <div className="modal-body">
                        <input
                          type="date"
                          className="form-control rounded-5 text-white bg-transparent h-100 mb-3"
                        />
                        <input
                          type="time"
                          className="form-control rounded-5 text-white bg-transparent h-100"
                        />
                      </div>
                      <div className="modal-footer border-0 flex-column">
                        <button
                          className="btn text-white"
                          style={{ background: "#992899" }}
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
