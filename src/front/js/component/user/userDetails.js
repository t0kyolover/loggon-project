import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../../store/appContext";

export const UserDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(store.user);
  const [newUserData, setNewUserData] = useState({
    username: "",
    imageUrl: "",
    steamUsername: "",
    twitchUsername: "",
    newInterest: "",
  });
  const [newInterest, setNewInterest] = useState("");
  const [clicked, setClicked] = useState("");

  useEffect(() => {
    setUser(store.user);
    setNewUserData(store.user.username);
    if (store.user.image_url !== null) {
      setNewUserData({ ...newUserData, imageUrl: store.user.image_url });
    }
  }, []);

  useEffect(() => {
    setUser(store.user);
  }, [store.user]);

  function updateItem(e, newItem, itemType) {
    e.preventDefault();
    if (
      newItem.trim() == "" &&
      (itemType != "steam_username" || itemType != "twitch_username")
    ) {
      setUser(store.user);
      setClicked("");
    } else {
      setUser((prevState) => ({
        ...prevState,
        [itemType]: newItem,
      }));
      actions.updateItem(newItem, itemType);
    }
    setClicked("");
  }

  //The interests get updated in the store but the page doesn't re-render when deleted, function in line 346
  function updateInterests(e) {
    e.preventDefault();
    actions.addInterest(newUserData.newInterest);
    setUser((prevState) => ({
      ...prevState,
      interests: [...prevState.interests, newUserData.newInterest],
    }));
    setNewUserData({ ...newUserData, newInterest: "" });
  }

  if (store.loggedIn === false) {
    navigate("/login");
  }

  if (user == {}) {
    return <LoadingSpinner />;
  }

  return (
    <div className="d-flex justify-content-center w-100 mt-3">
      <div className="d-flex flex-row text-white">
        {/*--------falta de centralización----------*/}
        <div className="d-flex flex-row flex-wrap ">
          <form>
            {clicked == "image" ? (
              <div>
                <button
                  className="btn btn-effect py-0"
                  onClick={(e) => {
                    updateItem(e, newUserData.imageUrl, "image_url");
                  }}
                >
                  <i className="fa-solid fa-circle-check"></i>
                </button>
                <input
                  type="text"
                  className="img-fluid"
                  value={newUserData.imageUrl}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, imageUrl: e.target.value })
                  }
                />
              </div>
            ) : (
              <div>
                <button
                  className="btn btn-effect py-0"
                  onClick={(e) => {
                    e.preventDefault();
                    setClicked("image");
                  }}
                >
                  <i className="fa-solid fa-pencil fa-flip-horizontal"></i>
                </button>
                <img
                  style={{ maxWidth: "500px", maxHeight: "500px" }}
                  className="rounded-circle img-fluid p-5 image-container"
                  src={user.image_url}
                />
              </div>
            )}
          </form>

          <ul className="list-group m-auto">
            {/*---------------------------------------Username---------------------------------*/}
            <div style={{ fontSize: "12px", color: "#992899" }}>Username</div>
            <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
              <div className="w-100">
                {clicked == "username" ? (
                  <input
                    className="form-control border-0 text-white bg-transparent"
                    value={newUserData.username}
                    onChange={(e) =>
                      setNewUserData({
                        ...newUserData,
                        username: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p className="fw-bold mb-0">@{user.username}</p>
                )}
              </div>
              <div className="ms-auto">
                {clicked == "username" ? (
                  <button
                    className="btn btn-effect py-0"
                    onClick={(e) => {
                      updateItem(e, newUserData.username, "username");
                    }}
                  >
                    <i className="fa-solid fa-circle-check"></i>
                  </button>
                ) : (
                  <button
                    className="btn btn-effect py-0"
                    onClick={(e) => {
                      e.preventDefault();
                      setClicked("username");
                    }}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                )}
              </div>
            </li>
            {/*---------------------------------------Email---------------------------------*/}
            <div style={{ fontSize: "12px", color: "#992899" }}>Email</div>
            <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
              <div className="w-100">
                <p className="fw-bold mb-0">{user.email}</p>
              </div>
            </li>
            {/*---------------------------------------Password---------------------------------*/}
            {/*Cuadrar el boton. Onclick el boton redirige al mismo workflow de "Forgot password"*/}
            <div style={{ fontSize: "12px", color: "#992899" }}>Password</div>
            <div className="d-flex flex-row align-items-center">
              <li className="list-group-item rounded-5 my-2 text-white bg-transparent">
                <div className="me-auto">
                  <p className="fw-bold mb-0">*********</p>
                </div>
              </li>
              <Link to={`/password_recovery/${user.username}`}>
                <button className="btn btn-effect rounded-5 ms-3">
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
                  <div className="d-flex flex-row">
                    <input
                      type="text"
                      className="form-control rounded-5 text-black w-auto"
                      style={{ maxHeight: "30px" }}
                      value={newUserData.steamUsername}
                      onChange={(e) =>
                        setNewUserData({
                          ...newUserData,
                          steamUsername: e.target.value,
                        })
                      }
                    />
                    <button
                      className="btn btn-effect py-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSteam"
                      aria-expanded="false"
                      aria-controls="collapseSteam"
                      onClick={(e) => {
                        updateItem(
                          e,
                          newUserData.steamUsername,
                          "steam_username"
                        );
                      }}
                    >
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#992899" }}
                      ></i>
                    </button>
                  </div>
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
                  <div className="d-flex flex-row">
                    <input
                      type="text"
                      className="form-control rounded-5 text-black w-auto"
                      style={{ maxHeight: "30px" }}
                      value={newUserData.twitchUsername}
                      onChange={(e) =>
                        setNewUserData({
                          ...newUserData,
                          twitchUsername: e.target.value,
                        })
                      }
                    />
                    <button
                      className="btn btn-effect py-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwitch"
                      aria-expanded="false"
                      aria-controls="collapseTwitch"
                      onClick={(e) => {
                        updateItem(
                          e,
                          newUserData.twitchUsername,
                          "twitch_username"
                        );
                      }}
                    >
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#992899" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {/*---------------------------------------Interests---------------------------------*/}
            <div style={{ fontSize: "12px", color: "#992899" }}>Interests</div>
            <li className="list-group-item border-0 my-2 text-white bg-transparent d-flex flex-row">
              {/*!!!!!BUG!!!!!!!--------Creo que el problema cuando se añade más intereses y la página empieza a bailar está aquí */}
              {/* <div className="d-flex flex-wrap gap-2" > */}
              <div
                className="list-group"
                style={{ height: "200px", overflowX: "auto" }}
              >
                {!user || !user.interests || user.interests.length === 0 ? (
                  <p className="bg-transparent p-2">No Interests Added</p>
                ) : (
                  user.interests.map((interest, index) => (
                    <p
                      className="bg-transparent rounded-5 border-white m-auto my-2 border p-2"
                      key={index}
                      s
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
                  className="btn btn-effect"
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
                  <div
                    className="modal-content"
                    style={{ background: "#020D19" }}
                  >
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
                          value={newUserData.newInterest}
                          onChange={(e) =>
                            setNewUserData({
                              ...newUserData,
                              newInterest: e.target.value,
                            })
                          }
                        ></input>
                      </form>
                      <small style={{ color: "#992899" }}>My interests</small>
                      <ul className="list-group border-0 my-2 bg-transparent d-flex flex-row">
                        <div className="d-flex flex-wrap gap-2 justify-content-center">
                          {!user ||
                          !user.interests ||
                          user.interests.length === 0 ? (
                            <p className="bg-transparent p-2">
                              No Interests Added
                            </p>
                          ) : (
                            user.interests.map((interest, index) => (
                              <li
                                className="list-group-item bg-transparent text-white rounded-5 border-white border p-2"
                                key={index}
                              >
                                {interest}
                                <button
                                  className="btn border-0 p-0 ms-2"
                                  onClick={() => {
                                    actions.deleteInterest(index);
                                    setUser((prevState) => ({
                                      ...prevState,
                                      interests: prevState.interests.filter(
                                        (_, i) => i !== index
                                      ),
                                    }));
                                  }}
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
  );
};
