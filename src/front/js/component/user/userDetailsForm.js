import React, { useContext, useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { AddInterestForm } from "./addInterestForm";

import { Context } from "../../store/appContext";

export const UserDetailsForm = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [clicked, setClicked] = useState("");
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: store.user,
    //validationSchema: postDealSchema,
    onSubmit: (values) => {
      actions.updateUserDetails(values);
      setClicked("");
      // onValuesChange(values);
      console.log("Saved successufully", store.user);
      resetForm({
        values: store.user,
      });
    },
  });

  if (store.loggedIn === false) {
    navigate("/login");
  }

  if (store.user == {}) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/*---------------------------------------Image---------------------------------*/}
        <div className="d-flex flex-row align-items-center justify-content-start">
          <div className="col-6 ms-5">
            <div className="d-flex flex-row align-items-center">
              {/*---------------------------------image----------------------------*/}
              <img
                style={{ maxWidth: "500px", maxHeight: "500px" }}
                className="rounded-circle img-fluid p-5 image-container me-5"
                src={
                  store.user.image_url ||
                  "https://static.vecteezy.com/system/resources/previews/007/698/902/non_2x/geek-gamer-avatar-profile-icon-free-vector.jpg"
                }
              />
              {/*---------------------------------edit image button----------------------*/}
              {clicked == !"image" && (
                <button
                  className="btn btn-effect border-0 py-0 h-25"
                  onClick={(e) => {
                    e.preventDefault();
                    setClicked("image");
                  }}
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
              )}
            </div>
            <div className="row">
              <div className="col-3">
                {clicked == "image" && (
                  <div className="d-flex flex-column">
                    <label
                      htmlFor="user_image_url"
                      className="form-label"
                      style={{ color: "#992899" }}
                    >
                      Image URL
                    </label>
                    <div className="d-flex justify-content-center flex-row">
                      <input
                        type="text"
                        className="form-control rounded-5 text-white bg-transparent"
                        value={values.image_url}
                        onChange={(e) =>
                          setFieldValue("image_url", e.target.value)
                        }
                        onBlur={handleBlur}
                        id="user_image_url"
                      />
                      {/*---------------------------------save image button---------------------------------*/}
                      <button type="submit" className="btn btn-effect py-0">
                        <i className="fa-solid fa-circle-check"></i>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-5 me-5">
            {/*---------------------------------------Username-------------------------*/}

            <div className="col-6">
              <div className="d-flex flex-column">
                <label
                  htmlFor="user_username"
                  className="form-label"
                  style={{ color: "#992899" }}
                >
                  Username
                </label>
                <div /*className="d-flex flex-row align-items-center"*/>
                  <i
                    id="username-addon"
                    className="fas fa-at me-2"
                    style={{ color: "#992899" }}
                  ></i>

                  {clicked == "username" ? (
                    <div className="d-flex flex-row text-white">
                      <input
                        value={values.username}
                        type="text"
                        className="form-control rounded-5 text-white bg-transparent"
                        aria-label="Username"
                        aria-describedby="username-addon"
                        onChange={(e) =>
                          setFieldValue("username", e.target.value)
                        }
                        onBlur={handleBlur}
                        id="username"
                        required
                      />
                      {/*---------------------------------save username button----------------------*/}
                      <button type="submit" className="btn btn-effect py-0">
                        <i className="fa-solid fa-circle-check"></i>
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex flex-row text-white align">
                      <p className="form-control rounded-5 text-white bg-transparent">
                        {store.user.username}
                      </p>
                      {/*---------------------------------edit username button----------------------*/}
                      <button
                        className="btn btn-effect border-0 py-0"
                        onClick={(e) => {
                          e.preventDefault();
                          setClicked("username");
                        }}
                      >
                        <i className="fa-solid fa-pencil"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/*---------------------------------------Email---------------------------------*/}
            <div className="col-6">
              <div className="d-flex flex-column">
                <label
                  htmlFor="user_email"
                  className="form-label"
                  style={{ color: "#992899" }}
                >
                  Email
                </label>{" "}
                <div className="d-flex flex-row text-white align">
                  <p
                    className="form-control rounded-5 text-white bg-transparent"
                    id="user_email"
                  >
                    {store.user.email}
                  </p>
                </div>{" "}
              </div>
            </div>
            {/*---------------------------------------Password---------------------------------*/}
            <div className="col-6">
              <div className="d-flex flex-row align-items-center">
                <div className="d-flex flex-column">
                  <label
                    htmlFor="user_password"
                    className="form-label"
                    style={{ color: "#992899" }}
                  >
                    Password
                  </label>{" "}
                  <div className="d-flex flex-row text-white align">
                    <p
                      className="form-control rounded-5 text-white bg-transparent"
                      id="user_password"
                    >
                      ***********
                    </p>
                    {/*---------------------------reset password button-----------------------*/}
                    <Link to={`/password_recovery/${store.user.username}`}>
                      <button className="btn btn-effect ms-3">Change</button>
                    </Link>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="col-6">
              {/*---------------------------------------Links---------------------------------*/}
              <label
                htmlFor="user_links"
                className="form-label"
                style={{ color: "#992899" }}
              >
                Links
              </label>
              <li className="list-group-item border-0 my-2 text-white bg-transparent d-flex flex-row">
                {/*---------------------------------------Steam---------------------------------*/}
                <p className="me-2">
                  <a
                    className="btn btn-effect-blue rounded-5 border-0 p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSteam"
                    aria-expanded="false"
                    aria-controls="collapseSteam"
                  >
                    <i className="fa-brands fa-steam text-white fs-3 "></i>
                  </a>
                </p>
                {/*---------------------------------------edit steam username---------------------------------*/}
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
                        value={values.steam_username}
                        onChange={(e) =>
                          setFieldValue("steam_username", e.target.value)
                        }
                        onBlur={handleBlur}
                        id="user_steam_username"
                      />
                      {/*--------------------------------save steam button---------------------------*/}
                      <button
                        className="btn btn-effect border-0 py-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSteam"
                        aria-expanded="false"
                        aria-controls="collapseSteam"
                        type="submit"
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
                    className="btn btn-effect border-0 p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwitch"
                    aria-expanded="false"
                    aria-controls="collapseTwitch"
                  >
                    <i className="fa-brands fa-twitch text-white fs-3"></i>
                  </button>
                </p>
                {/*---------------------------------------edit twitch username---------------------------------*/}
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
                        value={values.twitch_username}
                        onChange={(e) =>
                          setFieldValue("twitch_username", e.target.value)
                        }
                        onBlur={handleBlur}
                        id="user_twitch_username"
                      />
                      {/*--------------------------------save twitch button---------------------------*/}
                      <button
                        type="submit"
                        className="btn btn-effect py-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwitch"
                        aria-expanded="false"
                        aria-controls="collapseTwitch"
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
            </div>
          </div>
        </div>
        {/*-------------------------------Interests--------------------------*/}
        <div className="row ms-5">
          <div className="d-flex align-items-center">
            <label
              htmlFor="user_links"
              className="form-label"
              style={{ color: "#992899" }}
            >
              My interests
            </label>
            {/*-------------------modify interests modal trigger button-----------------*/}

            <button
              type="button"
              className="btn btn-effect border-0 ms-2"
              data-bs-toggle="modal"
              data-bs-target="#modifyInterestsModal"
            >
              <i
                className="fa-solid fa-pencil"
                style={{ color: "#992899" }}
              ></i>
            </button>
          </div>
          <div
            className="col-5 d-flex flex-wrap text-white"
          >
            {!store.user ||
            !store.user.interests ||
            store.user.interests.length === 0 ? (
              <p className="bg-transparent p-2">No Interests Added</p>
            ) : (
              store.user.interests.map((interest, index) => (
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
        </div>
      </form>
      <AddInterestForm />
    </>
  );
};
