import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSuggestions(actions.getSuggestions(e.target.value));
  };

  return (
    <div className="position-relative">
      <nav className="navbar bg-dark bg-gradient justify-content-evenly flex-row">
        <div className="container-fluid ">
          <div className="d-flex flex-row w-50">
            {/*---------------------------------------MENU ICON---------------------------------*/}
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-menu"
              aria-expanded="false"
              aria-controls="navbar-menu"
              data-bs-auto-close="outside"
            >
              <i className="fa-solid fa-bars" style={{ color: "#992899" }}></i>
            </button>
            {/*---------------------------------------LOGO---------------------------------*/}
            <Link to={"/"} className="navbar-brand mx-3">
              <img
                src="https://cdn.discordapp.com/attachments/1200818313421398017/1208775421672292382/allanrogerhaze_Create_an_impactful_and_memorable_logo_for_a_gam_4523fdda-cff8-4f99-8771-dca36d9acbfc.png?ex=65edbd56&is=65db4856&hm=240bb1292bef08ee14f51727418fd731fb104e9bbf8e759aa3b8d7ac273f81c5&"
                alt="Bootstrap"
                width="40"
                height="34"
                className="rounded-circle"
              />
            </Link>
            {/*---------------------------------------SEARCH BAR---------------------------------*/}
            {/*Añadir display de sugerencias, search handle con enter, centrar la barra de búsqueda
            (el problema está en bottom margin de <p>, pero a sobreescribirlo el campo de input se descuadra)*/}
            <div className="d-flex flex-row">
              <p className="mx-2">
                <button
                  className="btn p-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSearch"
                  aria-expanded="false"
                  aria-controls="collapseSearch"
                >
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: "#992899" }}
                  ></i>
                </button>
              </p>
              <div style={{ minHeight: "50px" }}>
                <div
                  className="collapse collapse-horizontal"
                  id="collapseSearch"
                >
                  <form>
                    <input
                      type="search"
                      className="form-control rounded-5 w-auto text-white bg-transparent"
                      style={{ maxHeight: "30px" }}
                      aria-label="Búsqueda"
                      value={searchTerm}
                      onChange={handleInputChange}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/*---------------------------------------SIGNUP MODAL TRIGGER BUTTON---------------------------------*/}
          {!loggedIn && (
            <button
              type="button"
              className="mx-3 btn"
              data-bs-toggle="modal"
              data-bs-target="#signupModalToggle"
            >
              <i
                className="fa-solid fa-user-plus"
                style={{ color: "#992899" }}
              ></i>
            </button>
          )}
        </div>
        {/*---------------------------------------SIGNUP MODAL---------------------------------*/}
        <div
          className="modal fade"
          id="signupModalToggle"
          aria-hidden="true"
          aria-labelledby="signupModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-0">
                <h1 className="modal-title fs-5" id="signupModalToggleLabel">
                  Signup
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
                <div className="d-flex flex-row">
                  <div className="mb-3 col-6 m-4">
                    <img
                      src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429797990_692838776259943_2699987145303885142_n.png?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_ohc=Iix4AjxwuowAX_ymY-K&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRvc8PN5m7QmLQ2f17JEk-r2EHOT5ZqyQ-zxl7jvWq1bg&oe=660AF85C"
                      className="img-fluid rounded-circle"
                      alt="Logo"
                    />
                    {/*---------------------------------------Signup modal 3rd party buttons---------------------------------*/}
                    <div className="text-center mt-4">
                      <button className="mt-2 rounded-circle mx-2">
                        <i className="fa-brands fa-steam text-dark fs-3"></i>
                      </button>
                      <button className="mt-2 rounded-circle mx-2">
                        <i className="fa-brands fa-twitch text-dark fs-3"></i>
                      </button>
                      <button className="mt-2 rounded-circle mx-2">
                        <i className="fa-brands fa-google text-dark fs-3"></i>
                      </button>
                    </div>
                  </div>
                  {/*---------------------------------------Signup modal registration form---------------------------------*/}
                  <form className="col-5 m-3">
                    <div className="mb-1">
                      <label
                        htmlFor="signupUsernameInput"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="email"
                        className="form-control text-white bg-transparent"
                        id="signupUsernameInput"
                        placeholder=""
                      />
                    </div>

                    <div className="mb-1">
                      <label htmlFor="signupEmailInput" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control text-white bg-transparent"
                        id="signupEmailInput"
                        placeholder=""
                      />
                    </div>

                    <div className="mb-1">
                      <label
                        htmlFor="signupPasswordInput"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="signupPasswordInput"
                        className="form-control text-white bg-transparent"
                        aria-describedby="passwordHelpBlock"
                      />
                    </div>

                    <div
                      id="passwordHelpBlock"
                      className="form-text text-white"
                    >
                      Your password must be 8-20 characters long, contain
                      letters and numbers, and must not contain spaces, special
                      characters, or emoji.
                    </div>

                    <div className="mb-3 form-check m-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="newsletterCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="newsletterCheck"
                        style={{ fontSize: "10px" }}
                      >
                        I agree to receive commercial communications and offers
                        by loGGon
                      </label>
                    </div>

                    <div className="mb-3 form-check m-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="privacyCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="privacyCheck"
                        style={{ fontSize: "10px" }}
                      >
                        I have read and accept the{" "}
                        <Link
                          to="/privacy_policy"
                          target="_blank"
                          className="form-check-label btn btn-link"
                        >
                          Terms & Conditions of Use and Privacy Policy
                        </Link>
                      </label>
                    </div>
                    {/*---------------------------------------Signup modal buttons---------------------------------*/}
                    <div className="modal-footer flex-column border-0">
                      <button
                        className="btn text-white"
                        style={{ background: "#992899" }}
                      >
                        Signup
                      </button>
                      <button
                        className="btn btn-sm btn-link"
                        data-bs-target="#loginModalToggle"
                        data-bs-toggle="modal"
                        onClick={(e) => e.preventDefault()}
                      >
                        Already registered?
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*---------------------------------------LOGIN MODAL---------------------------------*/}
        <div
          className="modal fade"
          id="loginModalToggle"
          aria-hidden="true"
          aria-labelledby="loginModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-0">
                <h1 className="modal-title fs-5" id="loginModalToggleLabel">
                  Login
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
                {/*---------------------------------------Login modal 3rd party buttons---------------------------------*/}

                <div className="text-center mt-4 p-3">
                  <button className="mt-2 rounded-circle mx-2">
                    <i className="fa-brands fa-steam text-dark fs-3"></i>
                  </button>

                  <button className="mt-2 rounded-circle mx-2">
                    <i className="fa-brands fa-twitch text-dark fs-3"></i>
                  </button>

                  <button className="mt-2 rounded-circle mx-2">
                    <i className="fa-brands fa-google text-dark fs-3"></i>
                  </button>
                </div>

                <div className="text-center mt-3">
                  <h1>oR</h1>
                </div>
                {/*---------------------------------------Login modal form---------------------------------*/}
                <form>
                  <div className="mb-3">
                    <label htmlFor="loginEmailInput" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control text-white bg-transparent"
                      id="loginEmailInput"
                      placeholder=""
                    />
                  </div>
                  <label htmlFor="loginPasswordInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="loginPasswordInput"
                    className="form-control text-white bg-transparent"
                    aria-describedby="passwordHelpBlock"
                  />
                  <div
                    id="passwordHelpBlock"
                    className="form-text text-white"
                  ></div>
                  <div className="mb-3 form-check m-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMeCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="rememberMeCheck"
                      style={{ fontSize: "15px" }}
                    >
                      Remember me
                    </label>
                  </div>

                  {/*------------------------Forgot Password Modal Trigger Button------------------------*/}
                  <div className="text-center">
                    <button
                      className="btn btn-sm btn-link "
                      data-bs-target="#forgotPasswordModalToggle"
                      data-bs-toggle="modal"
                      onClick={(e) => e.preventDefault()}
                    >
                      Forgot my password
                    </button>
                  </div>
                  {/*---------------------------------------Login Modal buttons---------------------------------*/}
                  <div className="modal-footer border-0 flex-column">
                    <button
                      className="btn text-white"
                      style={{ background: "#992899" }}
                    >
                      Login
                    </button>
                    <button
                      className="btn btn-sm btn-link"
                      data-bs-target="#signupModalToggle"
                      data-bs-toggle="modal"
                      onClick={(e) => e.preventDefault()}
                    >
                      Not registered yet?
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*---------------------------------------Forgot Password Modal---------------------------------*/}
        <div
          className="modal fade"
          id="forgotPasswordModalToggle"
          aria-hidden="true"
          aria-labelledby="forgotPasswordModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-0">
                <h1
                  className="modal-title fs-5"
                  id="forgotPasswordModalToggleLabel"
                >
                  Recover password
                </h1>
              </div>
              <div className="modal-body">
                <input
                  type="email"
                  className="form-control rounded-5 text-white bg-transparent h-100 mb-3"
                  placeholder="Email"
                />
                <input
                  type="email"
                  className="form-control rounded-5 text-white bg-transparent h-100"
                  placeholder="Confirm your email"
                />
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-primary"
                  data-bs-target="#loginModalToggle"
                  data-bs-toggle="modal"
                >
                  Back
                </button>
                <button
                  className="btn text-white"
                  style={{ background: "#992899" }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*---------------------------------------MENU CONTENTS---------------------------------*/}
      {/*Cuando haces click fuera del menu tiene que cerrar, ahora no lo hace y no se abre por encima de todo lo demas*/}
      <div
        className="collapse bg-dark bg-gradient text-white position-absolute"
        id="navbar-menu"
        style={{ width: "140px", height: "100%" }}
      >
        <div className="d-flex flex-column ms-4 my-3">
          <Link
            className="text-white text-decoration-none mb-2"
            to={"/myprofile/:username"}
          >
            My profile
          </Link>
          <Link
            className="text-white text-decoration-none mb-2"
            to={"/postdeal/:username"}
          >
            Post deal
          </Link>
          <Link className="text-white text-decoration-none mb-2" to={"/games"}>
            Games
          </Link>
          <Link className="text-white text-decoration-none mb-2" to={"/"}>
            Deals
          </Link>
        </div>
        {/*---------------------------------------LOGIN/LOGOUT MODAL TRIGGER BUTTON---------------------------------*/}
        <div className="ms-4 mb-3">
          {!loggedIn ? (
            <button
              type="button"
              className="btn text-white"
              style={{ background: "#992899" }}
              data-bs-toggle="modal"
              data-bs-target="#loginModalToggle"
            >
              Login
            </button>
          ) : (
            <button
              type="button"
              className="btn text-white"
              style={{ background: "#992899" }}
              data-bs-toggle="modal"
              data-bs-target="#logoutModal"
            >
              Logout
            </button>
          )}
          {/*---------------------------------------LOGOUT MODAL---------------------------------*/}
          <div
            className="modal fade"
            id="logoutModal"
            aria-hidden="true"
            aria-labelledby="logoutModalLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-sm modal-dialog-centered">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header border-0">
                  <h1 className="modal-title fs-5" id="logoutModalLabel">
                    Are you sure?
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
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <Link to="/">
                    {" "}
                    <button
                      className="btn text-white"
                      data-bs-dismiss="modal"
                      style={{ background: "#992899" }}
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
