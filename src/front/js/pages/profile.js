import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("@Pere");
  const [email, setEmail] = useState("pereayats@email.com");
  const [steamUsername, setSteamUsername] = useState("");
  const [twitchUsername, setTwitchUsername] = useState("");
  
/*Habilitar lapiz de editar y conectar useStates con sus useEffects*/
  return (
    <div>
      {/*---------------------------------------PROFILE DETAILS---------------------------------*/}
      <div className="row justify-content-center mt-3">
        <div className="d-flex flex-column text-white col-8">
          <h3>Mi perfil</h3>
          <div className="d-flex flex-row">
            <img
              className="rounded-circle img-fluid m-5"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429857093_437082848988064_3333411511087179117_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=oB8UaK6zJUcAX8DG7Pj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRI6WYkb2BOpkY2dEyd2AVYZqf9FUYaKcFlToeIgOBLiQ&oe=66087116"
            />
            <form>
              <ul className="list-group my-5">
                {/*---------------------------------------Username---------------------------------*/}
                <div style={{ fontSize: "12px", color: "#992899" }}>
                  Usuario
                </div>
                <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
                  <div className="me-auto">
                    <p className="fw-bold mb-0">{username}</p>
                  </div>
                  <div className="ms-3">
                    <button className="btn py-0">
                      <i
                        className="fa-solid fa-pencil"
                        style={{ color: "#992899" }}
                      ></i>
                    </button>
                  </div>
                </li>
                {/*---------------------------------------Email---------------------------------*/}
                <div style={{ fontSize: "12px", color: "#992899" }}>Correo</div>
                <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
                  <div className="me-auto">
                    <p className="fw-bold mb-0">{email}</p>
                  </div>
                  <div className="ms-3">
                    <button className="btn py-0">
                      <i
                        className="fa-solid fa-pencil"
                        style={{ color: "#992899" }}
                      ></i>
                    </button>
                  </div>
                </li>
                {/*---------------------------------------Password---------------------------------*/}
                <div style={{ fontSize: "12px", color: "#992899" }}>
                  Contraseña
                </div>
                <div className="d-flex flex-row">
                  <li className="list-group-item rounded-5 my-2 text-white bg-transparent">
                    <div className="me-auto">
                      <p className="fw-bold mb-0">*********</p>
                    </div>
                  </li>
                  <button
                    className="btn text-white rounded-5 ms-3"
                    style={{ background: "#992899" }}
                  >
                    Cambiar
                  </button>
                </div>
                {/*---------------------------------------Platforms usernames---------------------------------*/}
                <div style={{ fontSize: "12px", color: "#992899" }}>
                  Vincular
                </div>
                <li className="list-group-item border-0 my-2 text-white bg-transparent d-flex flex-row">
                  {/*---------------------------------------Steam---------------------------------*/}
                  <p className="me-2">
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSteam"
                      aria-expanded="false"
                      aria-controls="collapseSteam"
                    >
                      <i className="fa-brands fa-steam text-white fs-3"></i>
                    </button>
                  </p>
                  <div style={{ minHeight: "50px" }}>
                    <div
                      className="collapse collapse-horizontal"
                      id="collapseSteam"
                    >
                      <input
                        type="text"
                        className="form-control rounded-5 text-black w-auto"
                        style={{ maxHeight: "30px" }}
                        onChange={(e) => setSteamUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  {/*---------------------------------------Twitch---------------------------------*/}
                  <p className="mx-2">
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwitch"
                      aria-expanded="false"
                      aria-controls="collapseTwitch"
                    >
                      <i className="fa-brands fa-twitch text-white fs-3"></i>
                    </button>
                  </p>
                  <div style={{ minHeight: "50px" }}>
                    <div
                      className="collapse collapse-horizontal"
                      id="collapseTwitch"
                    >
                      <input
                        type="text"
                        className="form-control rounded-5 text-black w-auto"
                        style={{ maxHeight: "30px" }}
                        onChange={(e) => setTwitchUsername(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                {/*---------------------------------------Interests---------------------------------*/}
                <div style={{ fontSize: "12px", color: "#992899" }}>
                  Intereses
                </div>
                <li className="list-group-item border-0 my-2 text-white bg-transparent d-flex flex-row">
                  <div className="d-flex flex-wrap gap-2">
                    <p className="bg-transparent rounded-5 border-white border p-2">
                      Single Player
                    </p>
                    <p className="bg-transparent rounded-5 border-white border p-2">
                      Horror
                    </p>
                    <p className="bg-transparent rounded-5 border-white border p-2">
                      Survival
                    </p>
                    <p className="bg-transparent rounded-5 border-white border p-2">
                      Third Person
                    </p>
                    <p className="bg-transparent rounded-5 border-white border p-2">
                      Action-Adventure
                    </p>
                    <p className="bg-transparent rounded-5 border-white border p-2">
                      3D
                    </p>
                  </div>
                  <div className="ms-3">
                    <button className="btn">
                      <i
                        className="fa-solid fa-pencil"
                        style={{ color: "#992899" }}
                      ></i>
                    </button>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      {/*---------------------------------------TABS---------------------------------*/}
      <div className="row mt-3">
        <nav className="d-flex justify-content-center">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-my-posts-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-my-posts"
              type="button"
              role="tab"
              aria-controls="nav-my-posts"
              aria-selected="true"
              style={{ color: "#992899" }}
            >
              Mis ofertas
            </button>
            <button
              className="nav-link"
              id="nav-saved-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-saved"
              type="button"
              role="tab"
              aria-controls="nav-saved"
              aria-selected="false"
              style={{ color: "#992899" }}
            >
              Guardados
            </button>
            <button
              className="nav-link"
              id="nav-alerts-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-alerts"
              type="button"
              role="tab"
              aria-controls="nav-alerts"
              aria-selected="false"
              style={{ color: "#992899" }}
            >
              Alertas
            </button>
          </div>
        </nav>
        {/*---------------------------------------TABS CONTENT---------------------------------*/}
        <div className="tab-content text-white" id="nav-tabContent">
          <div
            className="tab-pane fade show active d-flex justify-content-center"
            id="nav-my-posts"
            role="tabpanel"
            aria-labelledby="nav-my-posts-tab"
            tabIndex="0"
          >
            Grid with deal cards
          </div>
          <div
            className="tab-pane fade d-flex justify-content-center"
            id="nav-saved"
            role="tabpanel"
            aria-labelledby="nav-saved-tab"
            tabIndex="0"
          >
            Grid with saved deals
          </div>
          <div
            className="tab-pane fade d-flex justify-content-center"
            id="nav-alerts"
            role="tabpanel"
            aria-labelledby="nav-alerts-tab"
            tabIndex="0"
          >
            Grid with deal cards based on interests
          </div>
        </div>
      </div>
    </div>
  );
};
