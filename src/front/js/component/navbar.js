import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { LoginModal } from "./loginModal";
import { SignupModal } from "./signupModal";
import { LogoutModal } from "./logoutModal";

import { Context } from "../store/appContext";

import "../../styles/button.css";

import logoImg from "../../img/loggon1.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const closeSignUpButton = useRef(null);
  const closeLoginButton = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
    remember_me: false,
  });
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    privacy: false,
    newsletter: false,
  });
  const [forgotPassword, setForgotPassword] = useState({
    email: "",
    email2: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  /* useEffect(() => {
     if (!searchTerm) {
       setSuggestions([]);
     }
   }, [searchTerm]);*/

  useEffect(() => {
    if (location.pathname === "/login") {
      const loginModal = document.getElementById("loginModalToggle");
      if (loginModal) {
        const modal = new bootstrap.Modal(loginModal);
        modal.show();
      }
    }
  }, [location.pathname]);

  function handleSignup(e) {
    e.preventDefault();
    if (signup.password !== signup.password2) {
      alert("Passwords do not match!");
      return;
    } else if (!signup.username || !signup.password || !signup.password2) {
      alert("Missing fields!");
      return;
    } else if (!signup.privacy) {
      alert("You must accept the privacy policy!");
      return;
    } else {
      closeSignUpButton.current.click();
      actions.signup(
        signup.email,
        signup.password,

        signup.username
      );
      alert("Successfully registered!");
      navigate("/login");
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    actions.login(login.email, login.password, login.remember_me);
    actions.rememberMe(login.remember_me);
    closeLoginButton.current.click();
    navigate("/");
  }

  // Somehow the input doesn't restrict to email format
  function sendRecoveryEmail(e) {
    if (
      forgotPassword.email.trim() &&
      forgotPassword.email2.trim() &&
      forgotPassword.email === forgotPassword.email2
    ) {
      actions.forgotPassword(forgotPassword.email);
      alert("Password recovery email sent successfully!");
    } else if (!forgotPassword.email || !forgotPassword.email2) {
      e.preventDefault();
      alert("Missing fields!");
    } else if (forgotPassword.email !== forgotPassword.email2) {
      e.preventDefault();
      alert("Emails do not match!");
    }
  }

  function performSearch(e) {
    e.preventDefault();
    actions.searchInNavbar(searchTerm);
    setSearchTerm("");
    navigate(`/search_results/${searchTerm}`);
  }

  /*const handleInputChange = (e) => {
     setSearchTerm(e.target.value);
     setSuggestions(actions.getSuggestions(e.target.value));
   };*/

  return (
    <div className="position-relative">
      {/*Me gusta opacity-75 y fixed-top pero todo lo de mas se pone con opacidad y disabled no se puede tocar*/}
      <nav
        className="navbar bg-gradient justify-content-evenly flex-row"
        style={{ background: "#020D19" }}
      >
        <div className="container-fluid">
          <div className="d-flex flex-row w-50">
            {/*---------------------------------------MENU ICON---------------------------------*/}
            <button
              className="btn btn-effect"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#menuOffcanvas"
              aria-controls="menuOffcanvas"
            >
              <i className="fa-solid fa-bars" style={{ color: "#992899" }}></i>
            </button>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="menuOffcanvas"
              aria-labelledby="menuOffcanvasLabel"
              style={{ width: "15%", background: "#020D19" }}
            >
              {/*---------------------------------------MENU CONTENTS---------------------------------*/}
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title text-white"
                  id="menuOffcanvasLabel"
                >
                  Menu
                </h5>
              </div>
              <div className="offcanvas-body">
                <div className="d-flex flex-column ms-4 my-3">
                  {store.loggedIn && store.user && (
                    <div>
                      <Link
                        className="text-white text-decoration-none mb-2"
                        to={`/myprofile/${store.user.username}`}
                      >
                        <div className="mb-2" data-bs-dismiss="offcanvas">
                          My profile
                        </div>
                      </Link>
                      <Link
                        className="text-white text-decoration-none mb-2"
                        to={`/postdeal/user/${store.user.username}`}
                      >
                        <div className="mb-2" data-bs-dismiss="offcanvas">
                          Post deal
                        </div>
                      </Link>{" "}
                    </div>
                  )}
                  <Link
                    className="text-white text-decoration-none mb-2"
                    to={"/games"}
                  >
                    <div data-bs-dismiss="offcanvas">Games</div>
                  </Link>
                  <Link
                    className="text-white text-decoration-none mb-2"
                    to={"/"}
                  >
                    <div className="mb-2" data-bs-dismiss="offcanvas">
                      Deals
                    </div>
                  </Link>

                  {/*---------------------------------------LOGIN/LOGOUT MODAL TRIGGER BUTTON---------------------------------*/}
                  <div className="ms-4 mb-3">
                    {!store.loggedIn ? (
                      <button
                        type="button"
                        className="btn text-white btn-effect m-auto mt-4"
                        // style={{ background: "#992899" }}
                        data-bs-toggle="modal"
                        data-bs-target="#loginModalToggle"
                      >
                        <div data-bs-dismiss="offcanvas">Login</div>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn text-white btn-effect"
                        // style={{ background: "#992899" }}
                        data-bs-toggle="modal"
                        data-bs-target="#logoutModal"
                      >
                        <div data-bs-dismiss="offcanvas">Logout</div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/*---------------------------------------LOGIN MODAL---------------------------------*/}

            <LoginModal
              login={login}
              setLogin={setLogin}
              forgotPassword={forgotPassword}
              setForgotPassword={setForgotPassword}
              sendRecoveryEmail={sendRecoveryEmail}
              handleLogin={handleLogin}
              closeLoginButton={closeLoginButton}
            />
            <div className="ms-4 mb-3">
              {/*---------------------------------------LOGOUT MODAL---------------------------------*/}
              <LogoutModal />
            </div>
            {/*---------------------------------------LOGO---------------------------------*/}
            <Link to={"/"} className="navbar-brand mx-3">
              <img
                src={logoImg}
                alt="loGGon"
                width="auto"
                height="34"
                className="mt-2 me-2 "
              />
            </Link>
            {/*---------------------------------------SEARCH BAR---------------------------------*/}

            <div className="d-flex flex-row">
              <p className="mx-2">
                <button
                  className="btn mt-3 btn-effect border-0 rounded-circle"
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
                  <form onSubmit={performSearch}>
                    <input
                      type="search"
                      className="form-control rounded-5 w-auto text-white bg-transparent mt-2"
                      style={{ maxHeight: "30px" }}
                      aria-label="Búsqueda"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/*---------------------------------------SIGNUP MODAL TRIGGER BUTTON---------------------------------*/}
          {!store.loggedIn && (
            <button
              type="button"
              className="mx-3 btn btn-effect border-0"
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
        <SignupModal
          signup={signup}
          setSignup={setSignup}
          handleSignup={handleSignup}
          closeSignUpButton={closeSignUpButton}
        />
      </nav>
    </div>
  );
};
