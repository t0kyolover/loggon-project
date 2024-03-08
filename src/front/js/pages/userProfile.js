import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { DealCard } from "../component/dealCard";

import { Context } from "../store/appContext";

export const UserProfile = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [username, setUsername] = useState("Pere");
  const [steamUsername, setSteamUsername] = useState("DomBobomb");
  const [twitchUsername, setTwitchUsername] = useState("illojuan");

  return (
    <div className="container-fluid m-auto">
      {/*---------------------------------------PROFILE DETAILS---------------------------------*/}
      <div className="row">
        <div className="d-flex">
          <div className="d-inline-flex w-50 mx-5 align-items-center">
            <img
              style={{ maxWidth: "500px", maxHeight: "500px" }}
              className="rounded-circle img-fluid m-5 mb-0"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429857093_437082848988064_3333411511087179117_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=oB8UaK6zJUcAX8DG7Pj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRI6WYkb2BOpkY2dEyd2AVYZqf9FUYaKcFlToeIgOBLiQ&oe=66087116"
            />
            <ul className="list-group">
              {/*---------------------------------------Username---------------------------------*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Username</div>
              <li className="list-group-item border-0 p-0 my-2 text-white bg-transparent d-flex flex-row">
                <div className="w-100">
                  <p className="fw-bold mb-0">@{username}</p>
                </div>
              </li>
              {/*---------------------------------------Platforms usernames---------------------------------*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Link</div>
              <li className="list-group-item border-0 p-0 my-2 text-white bg-transparent">
                <div className="d-grid d-md-flex">
                  <div className="p-2 g-col-6">
                    <a
                      href={`https://steamcommunity.com/id/${steamUsername}`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-steam text-white fs-3"></i>
                    </a>
                  </div>
                  <div className="p-2 g-col-6">
                    <a href={`https://www.twitch.tv/${twitchUsername}`} target="_blank">
                      <i className="fa-brands fa-twitch text-white fs-3"></i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*---------------------------------------POSTS---------------------------------*/}
      <div className="row m-3">
        <div className="container text-center">
          <h3 className="text-white">{username}'s deals</h3>
          <div className="row row-cols-auto">
            <div className="col mx-2 my-4">
              <DealCard />
            </div>
            <div className="col mx-2 my-4">
              <DealCard />
            </div>
            <div className="col mx-2 my-4">
              <DealCard />
            </div>
            <div className="col mx-2 my-4">
              <DealCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
