import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { NavigationOffcanvas } from "./navigationOffcanvas";
import { LoginModal } from "./loginModal";
import { SignupModal } from "./signupModal";
import { LogoutModal } from "./logoutModal";
import { SearchBar } from "../utils/searchBar";

import { Context } from "../../store/appContext";

import "../../../styles/button.css";

import logoImg from "../../../img/loggon1.png";

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
        className="navbar bg-gradient justify-content-evenly flex-row py-0"
        style={{ background: "#020D19" }}
      >
        <div className="container-fluid">
          <div className="d-flex flex-row w-50 ms-4">
            {/*---------------------------LOGO----------------------------*/}
            <Link to={"/"} className="navbar-brand mx-3">
              <img
                src={logoImg}
                alt="loGGon"
                width="auto"
                height="34"
                className="mt-3 mx-4 btn-effect-blue border-0 rounded"
              />
            </Link>
            {store.loggedIn && store.user && (
              <>
                {/*-------------------------MENU ICON------------------------*/}
                <button
                  className="btn border-0 p-0 me-3"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#menuOffcanvas"
                  aria-controls="menuOffcanvas"
                >
                  <i
                    className="fa-solid fa-bars icon-effect-purple"
                    style={{ color: "#992899", fontSize: "20px" }}
                  ></i>
                </button>
                {/*---------------------------MENU CONTENTS-------------------------*/}
                <NavigationOffcanvas />
                {/*------------------------------SEARCH BAR----------------------------*/}
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  performSearch={performSearch}
                />
              </>
            )}
          </div>
          <div>
            {/*-------------------------LOGIN/LOGOUT MODAL TRIGGER BUTTON------------------*/}
            {!store.loggedIn ? (
              <button
                type="button"
                className="btn btn-effect border-0"
                data-bs-toggle="modal"
                data-bs-target="#loginModalToggle"
              >
                <i className="fa-solid fa-right-to-bracket"></i>
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-effect-blue border-0"
                data-bs-toggle="modal"
                data-bs-target="#logoutModal"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            )}

            {/*------------------------SIGNUP MODAL TRIGGER BUTTON------------------------*/}

            {!store.loggedIn && (
              <button
                type="button"
                className="mx-3 btn btn-effect border-0"
                data-bs-toggle="modal"
                data-bs-target="#signupModalToggle"
              >
                <i className="fa-solid fa-user-plus"></i>
              </button>
            )}
          </div>
        </div>
        {/*-----------------------LOGIN MODAL----------------------*/}

        <LoginModal
          login={login}
          setLogin={setLogin}
          forgotPassword={forgotPassword}
          setForgotPassword={setForgotPassword}
          sendRecoveryEmail={sendRecoveryEmail}
          handleLogin={handleLogin}
          closeLoginButton={closeLoginButton}
        />

        {/*----------------------LOGOUT MODAL------------------------*/}
        <LogoutModal />

        {/*----------------------SIGNUP MODAL-----------------------*/}
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
