import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { DealCard } from "../component/dealCard";

import { Context } from "../store/appContext";

export const UserProfile = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    // fetch with id user data from the API
    setUser({
      id: 1,
      username: "pere",
      steam_username: "pereayats",
      twitch_username: "pereayats",
      posts: [
        {
          id: 3,
          user_id: 1,
          date_of_creation: "",
          game_title: "Overwatch 2",
          image_url:
            "https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/10/OW2-be9287b234afbe7898ac.jpg",
          item_type: "In-Game Purchase",
          platform: "PS4",
          format: "Digital",
          rating: 10,
          original_price: 15,
          offer_price: 9.99,
          expiration_date: "2024-03-26",
          promo_code: "DFJISOP",
          offer_link:
            "https://store.steampowered.com/app/397540/Borderlands_3/",
          scheduled_date: "",
          sheduled_time: "",
          game_tags: ["multiplayer", "action", "shooter"],
        },
      ],
    });
  }, []);

  console.log(user);

  return (
    <div className="container-fluid m-auto">
      {/*---------------------------------------PROFILE DETAILS---------------------------------*/}
      <div className="row row-cols-auto ms-sm-5 ms-0 ">
        <div className="d-flex m-auto">
          <div className="d-inline-flex mx-5 align-items-center flex-md-row flex-column">
            <img
              style={{ maxWidth: "500px", maxHeight: "500px" }}
              className="rounded-circle img-fluid m-5 mb-0"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429857093_437082848988064_3333411511087179117_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=oB8UaK6zJUcAX8DG7Pj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRI6WYkb2BOpkY2dEyd2AVYZqf9FUYaKcFlToeIgOBLiQ&oe=66087116"
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
              <li className="list-group-item border-0 p-0 my-2 text-white bg-transparent">
                <div className="d-flex align-items-center">
                  <a
                    href={`https://steamcommunity.com/id/${user.steam_username}`}
                    target="_blank"
                  >
                    <i className="fa-brands fa-steam text-white fs-3 me-2"></i>
                  </a>
                  <a
                    href={`https://www.twitch.tv/${user.twitch_username}`}
                    target="_blank"
                  >
                    <i className="fa-brands fa-twitch text-white fs-3"></i>
                  </a>
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
                <div className="col m-auto my-4">
                  <DealCard
                    key={deal.id}
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
