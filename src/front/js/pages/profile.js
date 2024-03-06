import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Profile = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [username, setUsername] = useState("@Pere");
  const [email, setEmail] = useState("pereayats@email.com");
  const [steamUsername, setSteamUsername] = useState("");
  const [twitchUsername, setTwitchUsername] = useState("");
  const [usernameClicked, setUsernameClicked] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);
  const [imageClicked, setImageClicked] = useState(false);

  /*Conectar useStates con sus useEffects*/
  return (
    <div className="container-fluid m-auto">
      {/*---------------------------------------PROFILE DETAILS---------------------------------*/}
      <div className="d-flex justify-content-center w-100 mt-3">
        <div className="d-flex flex-column text-white">
          <h3 className="ms-3">My Profile</h3>

          <form className="d-flex flex-row flex-wrap">
            <div>
              <button
                className="btn py-0"
                onClick={(e) => {
                  e.preventDefault();
                  setImageClicked(!imageClicked);
                }}
              >
                <i
                  className="fa-solid fa-pencil fa-flip-horizontal"
                  style={{ color: "#992899" }}
                ></i>
              </button>
              {imageClicked ? (
                <input type="file" className="img-fluid" />
              ) : (
                <img
                  style={{ maxWidth: "500px", maxHeight: "500px" }}
                  className="rounded-circle img-fluid m-5"
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429857093_437082848988064_3333411511087179117_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=oB8UaK6zJUcAX8DG7Pj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRI6WYkb2BOpkY2dEyd2AVYZqf9FUYaKcFlToeIgOBLiQ&oe=66087116"
                />
              )}
            </div>

            <ul className="list-group">
              {/*---------------------------------------Username---------------------------------*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Username</div>
              <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
                <div className="w-100">
                  {usernameClicked ? (
                    <input className="form-control border-0 text-white bg-transparent" />
                  ) : (
                    <p className="fw-bold mb-0">{username}</p>
                  )}
                </div>
                <div className="ms-auto">
                  <button
                    className="btn py-0"
                    onClick={(e) => {
                      e.preventDefault();
                      setUsernameClicked(!usernameClicked);
                    }}
                  >
                    <i
                      className="fa-solid fa-pencil"
                      style={{ color: "#992899" }}
                    ></i>
                  </button>
                </div>
              </li>
              {/*---------------------------------------Email---------------------------------*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Email</div>
              <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
                <div className="w-100">
                  {emailClicked ? (
                    <input className="form-control border-0 text-white bg-transparent" />
                  ) : (
                    <p className="fw-bold mb-0">{email}</p>
                  )}
                </div>
                <div className="ms-auto">
                  <button
                    className="btn py-0"
                    onClick={(e) => {
                      e.preventDefault();
                      setEmailClicked(!emailClicked);
                    }}
                  >
                    <i
                      className="fa-solid fa-pencil"
                      style={{ color: "#992899" }}
                    ></i>
                  </button>
                </div>
              </li>
              {/*---------------------------------------Password---------------------------------*/}
              {/*Cuadrar el boton. Onclick el boton redirige al mismo workflow de "Forgot password"*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>
                Password
              </div>
              <div className="d-flex flex-row">
                <li className="list-group-item rounded-5 my-2 text-white bg-transparent">
                  <div className="me-auto">
                    <p className="fw-bold mb-0">*********</p>
                  </div>
                </li>
                <link
                  to="/password_recovery/:username"
                  className="btn text-white rounded-5 ms-3"
                  style={{ background: "#992899" }}
                  
                >
                  Change
                </link>
              </div>
              {/*---------------------------------------Platforms usernames---------------------------------*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Link</div>
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
                Interests
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
                {/*----------------------------Modify Interests Modal Trigger Button-----------------------*/}
                <div className="ms-3">
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#modifyInterestsModal"
                  >
                    <i
                      className="fa-solid fa-pencil"
                      style={{ color: "#992899" }}
                    ></i>
                  </button>
                </div>
                {/*----------------------------Modify Interests Modal-------------------------------*/}
                <div
                  className="modal fade"
                  id="modifyInterestsModal"
                  tabIndex="-1"
                  aria-labelledby="modifyInterestsModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content bg-dark">
                      <div className="modal-header border-0">
                        <h1
                          className="modal-title fs-5"
                          id="modifyInterestsModalLabel"
                        >
                          Interests
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
                          type="search"
                          className="form-control rounded-5 bg-transparent text-white mb-3"
                        ></input>
                        <small>My interests</small>
                        <ul className="list-group border-0 my-2 bg-transparent d-flex flex-row">
                          <div className="d-flex flex-wrap gap-2 justify-content-center">
                            <li className="list-group-item bg-transparent text-white rounded-5 border-white border p-2">
                              Single Player
                            </li>
                            <li className="list-group-item bg-transparent text-white rounded-5 border-white border p-2">
                              Horror
                            </li>
                            <li className="list-group-item bg-transparent text-white rounded-5 border-white border p-2">
                              Survival
                            </li>
                            <li className="list-group-item bg-transparent text-white rounded-5 border-white border p-2">
                              Third Person
                            </li>
                            <li className="list-group-item bg-transparent text-white rounded-5 border-white border p-2">
                              Action-Adventure
                            </li>
                            <li className="list-group-item bg-transparent text-white rounded-5 border-white border p-2">
                              3D
                            </li>
                          </div>
                        </ul>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="button"
                          className="btn"
                          style={{ background: "#992899" }}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </form>
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
              My deals
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
              Saved
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
              Alerts
            </button>
          </div>
        </nav>
        {/*---------------------------------------TABS CONTENT---------------------------------*/}
        <div className="tab-content text-white" id="nav-tabContent">
          {/*---------------------------------------My deals---------------------------------*/}
          <div
            className="tab-pane fade show active d-flex justify-content-center"
            id="nav-my-posts"
            role="tabpanel"
            aria-labelledby="nav-my-posts-tab"
            tabIndex="0"
          >
            Grid with deal cards
          </div>
          {/*---------------------------------------Saved---------------------------------*/}
          <div
            className="tab-pane fade d-flex justify-content-center"
            id="nav-saved"
            role="tabpanel"
            aria-labelledby="nav-saved-tab"
            tabIndex="0"
          >
            Grid with saved deals
          </div>
          {/*---------------------------------------Alerts---------------------------------*/}
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
