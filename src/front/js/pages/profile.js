import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="row justify-content-center mt-3">
        <div className="d-flex flex-column text-white col-8">
          <h3>Mi perfil</h3>
          <div className="d-flex flex-row">
            <img
              className="rounded-circle img-fluid m-5"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429857093_437082848988064_3333411511087179117_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=oB8UaK6zJUcAX8DG7Pj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRI6WYkb2BOpkY2dEyd2AVYZqf9FUYaKcFlToeIgOBLiQ&oe=66087116"
            />
            <ul className="list-group my-5">
              <div style={{ fontSize: "12px", color: "#992899" }}>Username</div>
              <li className="list-group-item rounded-5 my-2 text-white bg-transparent">
                <div className="me-auto">
                  <p className="fw-bold mb-0">@Pere</p>
                </div>
              </li>
              <div style={{ fontSize: "12px", color: "#992899" }}>Email</div>
              <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
                <div className="me-auto">
                  <p className="fw-bold mb-0">pereayats@email.com</p>
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
              <div style={{ fontSize: "12px", color: "#992899" }}>Password</div>
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
          </div>
        </div>
      </div>
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
        <div className="tab-content text-white" id="nav-tabContent">
          <div
            className="tab-pane fade show active d-flex justify-content-center"
            id="nav-my-posts"
            role="tabpanel"
            aria-labelledby="nav-my-posts-tab"
            tabindex="0"
          >
            Grid with deal cards
          </div>
          <div
            className="tab-pane fade d-flex justify-content-center"
            id="nav-saved"
            role="tabpanel"
            aria-labelledby="nav-saved-tab"
            tabindex="0"
          >
            Grid with saved deals
          </div>
          <div
            className="tab-pane fade d-flex justify-content-center"
            id="nav-alerts"
            role="tabpanel"
            aria-labelledby="nav-alerts-tab"
            tabindex="0"
          >
            Grid with deal cards based on interests
          </div>
        </div>
      </div>
    </div>
  );
};
