import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { EditableDealCard } from "../component/editableDealCard";
import { DealCard } from "../component/dealCard";

import { Context } from "../store/appContext";

export const MyProfile = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [username, setUsername] = useState("Pere");
  const [email, setEmail] = useState("pereayats@email.com");
  const [imageUrl, setImageUrl] = useState(
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/429857093_437082848988064_3333411511087179117_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=oB8UaK6zJUcAX8DG7Pj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRI6WYkb2BOpkY2dEyd2AVYZqf9FUYaKcFlToeIgOBLiQ&oe=66087116"
  );
  const [steamUsername, setSteamUsername] = useState("pereayts");
  const [twitchUsername, setTwitchUsername] = useState("pereayts");
  const [interests, setInterests] = useState([
    "Single Player",
    "Horror",
    "Survival",
    "Third Person",
    "Action-Adventure",
    "3D",
  ]);
  const [newInterest, setNewInterest] = useState("");
  const [clicked, setClicked] = useState("");
  const [myPosts, setMyPosts] = useState(["Post1", "Post2", "Post3", "Post4"]);
  const [savedDeals, setSavedDeals] = useState([
    "Saved1",
    "Saved2",
    "Saved3",
    "Saved4",
  ]);
  const [myAlerts, setMyAlerts] = useState([
    "Alert1",
    "Alert2",
    "Alert3",
    "Alert4",
  ]);

  useEffect(() => {}, [interests]);

  function resetClicked(e) {
    e.preventDefault();
    setClicked("");
  }

  function updateInterests(e) {
    e.preventDefault();
    setInterests((prevInterests) => [...prevInterests, newInterest]);
    setNewInterest("");
    console.log(interests);
  }

  /*Conectar useStates con sus useEffects*/
  return (
    /*Put store.loggedIn variable here*/
    <div className="container-fluid m-auto">
      {/*---------------------------------------PROFILE DETAILS---------------------------------*/}
      <div className="d-flex justify-content-center w-100 mt-3">
        <div className="d-flex flex-column text-white">
          <h3 className="ms-3">My Profile</h3>

          <div className="d-flex flex-row flex-wrap">
            <form>
              {clicked == "image" ? (
                <div>
                  <button className="btn py-0" onClick={resetClicked}>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#992899" }}
                    ></i>
                  </button>
                  <input
                    type="text"
                    className="img-fluid"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
              ) : (
                <div>
                  <button
                    className="btn py-0"
                    onClick={(e) => {
                      e.preventDefault();
                      setClicked("image");
                    }}
                  >
                    <i
                      className="fa-solid fa-pencil fa-flip-horizontal"
                      style={{ color: "#992899" }}
                    ></i>
                  </button>
                  <img
                    style={{ maxWidth: "500px", maxHeight: "500px" }}
                    className="rounded-circle img-fluid m-5"
                    src={imageUrl}
                  />
                </div>
              )}
            </form>

            <ul className="list-group">
              {/*---------------------------------------Username---------------------------------*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Username</div>
              <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
                <div className="w-100">
                  {clicked == "username" ? (
                    <input
                      className="form-control border-0 text-white bg-transparent"
                      value={`@${username}`}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  ) : (
                    <p className="fw-bold mb-0">@{username}</p>
                  )}
                </div>
                <div className="ms-auto">
                  {clicked == "username" ? (
                    <button className="btn py-0" onClick={resetClicked}>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#992899" }}
                      ></i>
                    </button>
                  ) : (
                    <button
                      className="btn py-0"
                      onClick={(e) => {
                        e.preventDefault();
                        setClicked("username");
                      }}
                    >
                      <i
                        className="fa-solid fa-pencil"
                        style={{ color: "#992899" }}
                      ></i>
                    </button>
                  )}
                </div>
              </li>
              {/*---------------------------------------Email---------------------------------*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Email</div>
              <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
                <div className="w-100">
                  {clicked == "email" ? (
                    <input
                      className="form-control border-0 text-white bg-transparent"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    <p className="fw-bold mb-0">{email}</p>
                  )}
                </div>
                <div className="ms-auto">
                  {clicked == "email" ? (
                    <button className="btn py-0" onClick={resetClicked}>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#992899" }}
                      ></i>
                    </button>
                  ) : (
                    <button
                      className="btn py-0"
                      onClick={(e) => {
                        e.preventDefault();
                        setClicked("email");
                      }}
                    >
                      <i
                        className="fa-solid fa-pencil"
                        style={{ color: "#992899" }}
                      ></i>
                    </button>
                  )}
                </div>
              </li>
              {/*---------------------------------------Password---------------------------------*/}
              {/*Cuadrar el boton. Onclick el boton redirige al mismo workflow de "Forgot password"*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Password</div>
              <div className="d-flex flex-row">
                <li className="list-group-item rounded-5 my-2 text-white bg-transparent">
                  <div className="me-auto">
                    <p className="fw-bold mb-0">*********</p>
                  </div>
                </li>
                <Link to="/password/recovery/:username">
                  <button
                    className="btn text-white rounded-5 ms-3"
                    style={{ background: "#992899" }}
                  >
                    Change
                  </button>
                </Link>
              </div>
              {/*---------------------------------------Platforms usernames---------------------------------*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Link</div>
              <li className="list-group-item border-0 my-2 text-white bg-transparent d-flex flex-row">
                {/*---------------------------------------Steam---------------------------------*/}
                <p className="me-2">
                  <a
                    className="btn p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSteam"
                    aria-expanded="false"
                    aria-controls="collapseSteam"
                  >
                    <i className="fa-brands fa-steam text-white fs-3"></i>
                  </a>
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
                      value={steamUsername}
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
                      value={twitchUsername}
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
                {/*!!!!!BUG!!!!!!!--------Creo que el problema cuando se añade más intereses y la página empieza a bailar está aquí */}
                <div className="d-flex flex-wrap gap-2">
                  {interests.length === 0 ? (
                    <p className="bg-transparent p-2">No Interests Added</p>
                  ) : (
                    interests.map((interest, index) => (
                      <p
                        className="bg-transparent rounded-5 border-white border p-2"
                        key={index}
                      >
                        {interest}
                      </p>
                    ))
                  )}
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
                        <form onSubmit={updateInterests}>
                          <input
                            type="search"
                            className="form-control rounded-5 bg-transparent text-white mb-3"
                            value={newInterest}
                            onChange={(e) => {
                              setNewInterest(e.target.value);
                            }}
                          ></input>
                        </form>
                        <small>My interests</small>
                        <ul className="list-group border-0 my-2 bg-transparent d-flex flex-row">
                          <div className="d-flex flex-wrap gap-2 justify-content-center">
                            {interests.length === 0 ? (
                              <p className="bg-transparent p-2">
                                No Interests Added
                              </p>
                            ) : (
                              interests.map((interest, index) => (
                                <li
                                  className="list-group-item bg-transparent text-white rounded-5 border-white border p-2"
                                  key={index}
                                >
                                  {interest}
                                  <button
                                    className="btn border-0 p-0 ms-2"
                                    onClick={() =>
                                      setInterests(
                                        interests.filter(
                                          (interest, currentIndex) =>
                                            index != currentIndex
                                        )
                                      )
                                    }
                                  >
                                    <i className="fa-solid fa-xmark"></i>
                                  </button>
                                </li>
                              ))
                            )}
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
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
            className="tab-pane fade show active"
            id="nav-my-posts"
            role="tabpanel"
            aria-labelledby="nav-my-posts-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row row-cols-auto">
                {myPosts.length === 0 ? (
                  <p className="bg-transparent p-2">No posts</p>
                ) : (
                  myPosts.map((post, index) => (
                    <div className="col mx-2 my-4" key={index}>
                      <EditableDealCard />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          {/*---------------------------------------Saved---------------------------------*/}
          <div
            className="tab-pane fade"
            id="nav-saved"
            role="tabpanel"
            aria-labelledby="nav-saved-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row row-cols-auto">
                {savedDeals.length === 0 ? (
                  <p className="bg-transparent p-2">No saved deals</p>
                ) : (
                  savedDeals.map((deal, index) => (
                    <div className="col mx-2 my-4" key={index}>
                      <DealCard />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          {/*---------------------------------------Alerts---------------------------------*/}
          <div
            className="tab-pane fade"
            id="nav-alerts"
            role="tabpanel"
            aria-labelledby="nav-alerts-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row row-cols-auto">
                {myAlerts.length === 0 ? (
                  <p className="bg-transparent p-2">No alerts</p>
                ) : (
                  myAlerts.map((alert, index) => (
                    <div className="col mx-2 my-4" key={index}>
                      <DealCard />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
