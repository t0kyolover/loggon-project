import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { UserDetailsForm } from "../../component/user/userDetailsForm";
import { EditableDealCard } from "../../component/deal/editableDealCard";
import { DealCard } from "../../component/deal/dealCard";
import { LoadingSpinner } from "../../component/utils/loadingSpinner";

import { Context } from "../../store/appContext";

export const MyProfile = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(store.user);

  useEffect(() => {
    setUser(store.user);
  }, [store.user]);

  
  if (store.loggedIn === false) {
    navigate("/login");
  }

  if (user == {}) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container-fluid m-auto">
       <h1 className="ps-4 me-5 text-white">My Profile</h1>{" "}
      {/*------------------------PROFILE DETAILS---------------------------*/}
      <UserDetailsForm />
      {/*---------------------------------------TABS---------------------------------*/}
      <div className="row mt-3 m-auto">
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
              <h6>My deals</h6>
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
              <h6>Saved</h6>
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
              <h6>Alerts</h6>
            </button>
          </div>
        </nav>
        {/*---------------------------------------TABS CONTENT---------------------------------*/}
        <div className="tab-content text-white" id="nav-tabContent pb-4">
          {/*---------------------------------------My deals---------------------------------*/}
          <div
            className="tab-pane fade show active "
            id="nav-my-posts"
            role="tabpanel"
            aria-labelledby="nav-my-posts-tab"
            tabIndex="0"
          >
            <div className="container text-center ">
              <div className="row row-cols-auto justify-content-center">
                {!user || !user.posts || user.posts.length === 0 ? (
                  <p className="bg-transparent p-2">No posts</p>
                ) : (
                  user.posts.map((post, index) => (
                    <div className="col mx-2 my-4" key={index}>
                      <EditableDealCard
                        id={post.id}
                        gameTitle={post.game_title}
                        itemType={post.item_type}
                        format={post.format}
                        rating={post.rating}
                        imageUrl={post.image_url}
                        offerLink={post.offer_link}
                        originalPrice={post.original_price}
                        offerPrice={post.offer_price}
                        expirationDate={post.expiration_date}
                        promoCode={post.promo_code}
                        scheduledDate={post.sheduled_date}
                        scheduledTime={post.sheduled_time}
                        userId={post.user_id}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          {/*---------------------------------------Saved---------------------------------*/}
          <div
            className="tab-pane fade"
            id="nav-saved"
            role="tabpanel"
            aria-labelledby="nav-saved-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row row-cols-auto justify-content-center">
                {!user || !user.saved || user.saved.length === 0 ? (
                  <p className="bg-transparent p-2">No saved deals</p>
                ) : (
                  user.saved.map((deal, index) => (
                    <div className="col mx-2 my-4" key={index}>
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
                  ))
                )}
              </div>
            </div>
          </div>
          {/*---------------------------------------Alerts---------------------------------*/}
          <div
            className="tab-pane fade"
            id="nav-alerts"
            role="tabpanel"
            aria-labelledby="nav-alerts-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row row-cols-auto justify-content-center">
                {!user || !user.alerts || user.alerts.length === 0 ? (
                  <p className="bg-transparent p-2">No alerts</p>
                ) : (
                  user.alerts.map((alert, index) => (
                    <div className="col mx-2 my-4" key={index}>
                      <DealCard
                        id={alert.id}
                        gameTitle={alert.game_title}
                        imageUrl={alert.image_url}
                        itemType={alert.item_type}
                        platform={alert.platform}
                        format={alert.format}
                        originalPrice={alert.original_price}
                        offerPrice={alert.offer_price}
                        expirationDate={alert.expiration_date}
                        promoCode={alert.promo_code}
                        offerLink={alert.offer_link}
                        gameTags={alert.game_tags}
                        rating={alert.rating}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
