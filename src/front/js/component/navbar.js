import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="position-relative">
      <nav className="navbar bg-dark bg-gradient justify-content-evenly flex-row">
        <div className="container-fluid ">
          <div className="d-flex flex-row w-50">
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-menu"
              aria-expanded="false"
              aria-controls="navbar-menu"
            >
              <i className="fa-solid fa-bars" style={{color: "#992899"}}></i>
            </button>

            <Link to={"/"} className="navbar-brand mx-3">
              <img
                src="https://cdn.discordapp.com/attachments/1200818313421398017/1208775421672292382/allanrogerhaze_Create_an_impactful_and_memorable_logo_for_a_gam_4523fdda-cff8-4f99-8771-dca36d9acbfc.png?ex=65edbd56&is=65db4856&hm=240bb1292bef08ee14f51727418fd731fb104e9bbf8e759aa3b8d7ac273f81c5&"
                alt="Bootstrap"
                width="40"
                height="34"
              />
            </Link>

            <form className="input-group mx-3 w-25">
              <span className="input-group-text rounded-start-5" id="search-icon">
                <i className="fa-solid fa-magnifying-glass" style={{color: "#992899"}}></i>
              </span>
              <input
                type="text"
                className="form-control rounded-end-5"
                placeholder="Búsqueda"
                aria-label="Búsqueda"
                aria-describedby="search-icon"
              ></input>
            </form>
          </div>
          <button className="mx-3 btn">
            <i className="fa-solid fa-user-plus" style={{color: "#992899"}}></i>
          </button>
        </div>
      </nav>
      <div
        className="collapse bg-dark bg-gradient text-white position-absolute"
        id="navbar-menu"
        style={{ width: "140px", height: "100%" }}
      >
        <div className="d-flex flex-column ms-4 my-3">
          <Link className="text-white text-decoration-none mb-2" to={"/"}>Mi perfil</Link>
          <Link className="text-white text-decoration-none mb-2" to={"/"}>Publicar oferta</Link>
          <Link className="text-white text-decoration-none mb-2" to={"/"}>Juegos</Link>
          <Link className="text-white text-decoration-none mb-2" to={"/"}>Ofertas</Link>
        </div>
        <div className="ms-4 mb-3">
          <button className="btn text-white" style={{background: "#992899"}}>Login</button>
        </div>
      </div>
    </div>
  );
};
