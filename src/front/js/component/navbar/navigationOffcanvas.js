import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { Context } from "../../store/appContext";

import "../../../styles/button.css";

export const NavigationOffcanvas = () => {
  const { store, actions } = useContext(Context);

  return (
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="menuOffcanvas"
          aria-labelledby="menuOffcanvasLabel"
          style={{ width: "15%", background: "#020D19" }}
        >
          {/*---------------------------------------MENU CONTENTS---------------------------------*/}
          <div className="offcanvas-header">
            <h3 className="offcanvas-title text-white" id="menuOffcanvasLabel">
              {!store.loggedIn ? ("Navigation") : (`Hi, ${store.user.username}`)}
              
            </h3>
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
                      <h6 className="btn-effect-blue border-0">My profile</h6>
                    </div>
                  </Link>
                  <Link
                    className="text-white text-decoration-none mb-2"
                    to={`/postdeal/user/${store.user.username}`}
                  >
                    <div className="mb-2" data-bs-dismiss="offcanvas">
                      <h6 className="btn-effect-blue border-0">Post deal</h6>
                    </div>
                  </Link>{" "}
                </div>
              )}
              <Link
                className="text-white text-decoration-none mb-2"
                to={"/games"}
              >
                <div data-bs-dismiss="offcanvas">
                  <h6 className="btn-effect-blue border-0">Games</h6>
                </div>
              </Link>
              <Link className="text-white text-decoration-none mb-2" to={"/"}>
                <div className="mb-2" data-bs-dismiss="offcanvas">
                  <h6 className="btn-effect-blue border-0">Deals</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
  );
};
