import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
              />
            </Link>
            {/*---------------------------------------SEARCH BAR---------------------------------*/}
            {/*Añadir display de sugerencias, search handle con enter, centrar la barra de búsqueda
            (el problema está en bottom padding de <p>, pero a sobreescribirlo el campo de input se descuadra)*/}
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
                  Registrarse
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
                {/*---------------------------------------Diego---------------------------------*/}
                {/*Notas: 
                          *Acomodar modal para que sea responsive con el formulario
                          *Cambiar el place holder a blanco y poner ejemplos dentro
                                                                                  --------------*/}
                <div className="d-flex flex-row">
                  <div className="mb-3 col-6 m-4">
                    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429797990_692838776259943_2699987145303885142_n.png?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_ohc=Iix4AjxwuowAX_ymY-K&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRvc8PN5m7QmLQ2f17JEk-r2EHOT5ZqyQ-zxl7jvWq1bg&oe=660AF85C" className="img-fluid rounded-circle" alt="Logo" />

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

                  <div className="col-9 m-3">
                    <div className="mb-1">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                      <input type="email" className="form-control text-white bg-transparent" id="exampleFormControlInput1" placeholder="" />
                    </div>

                    <div className="mb-1">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                      <input type="email" className="form-control text-white bg-transparent" id="exampleFormControlInput1" placeholder="" />
                    </div>

                    <div className="mb-1">
                      <label htmlFor="inputPassword5" className="form-label">Password</label>
                      <input type="password" id="inputPassword5" className="form-control text-white bg-transparent" aria-describedby="passwordHelpBlock" />
                    </div>

                    <div id="passwordHelpBlock" className="form-text text-white">
                      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>

                    <div class="mb-3 form-check m-3">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" for="exampleCheck1" style={{ fontSize: "10px" }}>
                        Acepto recibir comunicaciones comerciales u ofertas por parte de LoGGon
                      </label>
                    </div>

                    <div class="mb-3 form-check m-3">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" for="exampleCheck1" style={{ fontSize: "10px" }}>
                        He leido y acepto las condiciones de uso y la politica de privacidad
                      </label>
                    </div>


                  </div>



                </div>




                {/*---------------------------------------Diego---------------------------------*/}
              </div>
              <div className="modal-footer flex-column border-0">
                <button
                  className="btn text-white"
                  style={{ background: "#992899" }}
                >
                  Registrarse
                </button>
                <button
                  className="btn btn-sm btn-link"
                  data-bs-target="#loginModalToggle"
                  data-bs-toggle="modal"
                >
                  Ya tienes una cuenta?
                </button>
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
                  Iniciar sesión
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
                {/*---------------------------------------Diego---------------------------------*/}

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

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email</label>
                  <input type="email" className="form-control text-white bg-transparent" id="exampleFormControlInput1" placeholder="" />
                </div>
                <label for="inputPassword5" className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control text-white bg-transparent" aria-describedby="passwordHelpBlock" />
                <div id="passwordHelpBlock" className="form-text text-white">

                </div>

                <div class="mb-3 form-check m-3">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1" style={{ fontSize: "15px" }}>
                    Recordar
                  </label>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-sm btn-link "
                    data-bs-target="#loginModalToggle"
                    data-bs-toggle="modal"
                  >
                    Recuperar Contraseña
                  </button>
                </div>
                {/*---------------------------------------Diego---------------------------------*/}
              </div>
              <div className="modal-footer border-0 flex-column">
                <button
                  className="btn text-white"
                  style={{ background: "#992899" }}
                >
                  Iniciar sesión
                </button>
                <button
                  className="btn btn-sm btn-link"
                  data-bs-target="#signupModalToggle"
                  data-bs-toggle="modal"
                >
                  No tengo cuenta
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*---------------------------------------MENU CONTENTS---------------------------------*/}
      {/*Cuando haces click fuera del menu tiene que cerrar, ahora no lo hace*/}
      <div
        className="collapse bg-dark bg-gradient text-white position-absolute"
        id="navbar-menu"
        style={{ width: "140px", height: "100%" }}
      >
        <div className="d-flex flex-column ms-4 my-3">
          <Link
            className="text-white text-decoration-none mb-2"
            to={"/profile/:username"}
          >
            Mi perfil
          </Link>
          <Link className="text-white text-decoration-none mb-2" to={"/postdeal/:username"}>
            Publicar oferta
          </Link>
          <Link className="text-white text-decoration-none mb-2" to={"/games"}>
            Juegos
          </Link>
          <Link className="text-white text-decoration-none mb-2" to={"/"}>
            Ofertas
          </Link>
        </div>
        {/*---------------------------------------LOGIN MODAL TRIGGER BUTTON---------------------------------*/}
        <div className="ms-4 mb-3">
          <button
            type="button"
            className="btn text-white"
            style={{ background: "#992899" }}
            data-bs-toggle="modal"
            data-bs-target="#loginModalToggle"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
