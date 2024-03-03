import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

export const PostDeal = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center w-100 mt-3">
        <div className="d-flex flex-column text-white">
          <h3 className="ms-3">Publicar Oferta</h3>

          <form className="d-flex flex-row flex-wrap">
            <img
              style={{ maxWidth: "500px", maxHeight: "500px" }}
              className="rounded img-fluid m-5"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429857093_437082848988064_3333411511087179117_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=oB8UaK6zJUcAX8DG7Pj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRI6WYkb2BOpkY2dEyd2AVYZqf9FUYaKcFlToeIgOBLiQ&oe=66087116"
            />
            <ul className="list-group">
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                style={{ maxHeight: "35px" }}
              >
                <input
                  type="search"
                  className="form-control border-0 text-white bg-transparent h-100"
                  value="Juego"
                  required
                />
              </li>
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                style={{ maxHeight: "35px" }}
              >
                <input
                  type="search"
                  className="form-control border-0 text-white bg-transparent h-100"
                  value="Plataforma"
                  required
                />
              </li>
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                style={{ maxHeight: "35px" }}
              >
                <input
                  type="search"
                  className="form-control border-0 text-white bg-transparent h-100"
                  value="Tipo"
                  required
                />
              </li>
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                style={{ maxHeight: "35px" }}
              >
                <select
                  type="search"
                  className="form-control border-0 text-white bg-transparent h-100"
                  value="Digital"
                  required
                >
                  <option className="text-white" value={"Digital"}>
                    Digital
                  </option>
                  <option value={"CD"}>CD</option>
                </select>
              </li>
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                style={{ maxHeight: "35px" }}
              >
                <input
                  type="number"
                  className="form-control border-0 text-white bg-transparent h-100"
                  value="precioOriginal"
                  required
                />
              </li>
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                style={{ maxHeight: "35px" }}
              >
                <input
                  type="number"
                  className="form-control border-0 text-white bg-transparent h-100"
                  value="precioPromo"
                  required
                />
              </li>
             
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                style={{ maxHeight: "35px" }}
              >
                <input
                  type="datetime-local"
                  className="form-control border-0 text-white bg-transparent h-100"
                  value="fechaVencidad"
                />
              </li>
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                style={{ maxHeight: "35px" }}
              >
                <input
                  type="text"
                  className="form-control border-0 text-white bg-transparent h-100"
                  value="codigoPromocional"
                />
              </li>
              <li
                className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row"
                style={{ maxHeight: "35px" }}
              >
                <input
                  type="text"
                  className="form-control border-0 text-white bg-transparent h-100"
                  value="enlaceOferta"
                  required
                />
              </li>
             
              <div>
                 <button
                type="button"
                className="btn m-3"
                style={{ background: "#992899" }}
              >
                Añadir otra oferta
              </button>
              <button
                type="button"
                className="btn m-3"
                style={{ background: "#992899" }}
              >
                Publicar
              </button>
              </div>
             
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};
