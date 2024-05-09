import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { LoadingSpinner } from "../../component/utils/loadingSpinner";
import { DealCard } from "../../component/deal/dealCard";

import { Context } from "../../store/appContext";

export const UserProfile = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    // fetch with id user data from the API
    setUser(store.users[0]);
  }, []);

  if (!user) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container-fluid m-auto">
      {/*---------------------------------------PROFILE DETAILS---------------------------------*/}
      <div className="row row-cols-auto ms-sm-5 ms-0 ">
        <div className="d-flex m-auto">
          <div className="d-inline-flex mx-5 align-items-center flex-md-row flex-column">
            <img
              style={{ maxWidth: "500px", maxHeight: "500px" }}
              className="rounded-circle img-fluid m-5 mb-0"
              src={user.image_url}
            />
            <ul className="list-group mt-4">
              {/*---------------------------------------Username---------------------------------*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Username</div>
              <li className="list-group-item border-0 p-0 my-2 text-white bg-transparent d-flex flex-row">
                <div className="w-100">
                  {user.username && (
                    <p className="fw-bold mb-0">@{user.username}</p>
                  )}
                </div>
              </li>
              {/*---------------------------------------Platforms usernames---------------------------------*/}
              <div style={{ fontSize: "12px", color: "#992899" }}>Link</div>
              <li className="list-group-item border-0 p-0 my-2 bg-transparent">
                <div className="d-flex align-items-center">
                  <button className="rounded-circle mx-2 btn-effect-blue">
                    <a
                      href={`https://steamcommunity.com/id/${user.steam_username}`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-steam fs-3"></i>
                    </a>
                  </button>
                  <button className="rounded-circle btn-effect">
                    <a
                      href={`https://www.twitch.tv/${user.twitch_username}`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-twitch fs-3"></i>
                    </a>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*---------------------------------------POSTS---------------------------------*/}
      <div className="container text-center my-5">
        <h3 className="text-white">{user.username}'s deals</h3>
        <div className="row row-cols-auto">
          {user.posts &&
            user.posts.map((deal, index) => {
              return (
                <div className="col m-auto my-4" key={index}>
                  <DealCard
                    id={deal.id}
                    gameTitle={deal.game_title}
                    imageUrl={deal.image_url}
                    itemType={deal.item_type}
                    platform={deal.platform}
                    format={deal.format}
                    originalPrice={deal.original_price}
                    offerPrice={deal.offer_price}
                    expirationDate={deal.expiration_date}
                    promoCode={deal.promo_code}
                    offerLink={deal.offer_link}
                    gameTags={deal.game_tags}
                    rating={deal.rating}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
