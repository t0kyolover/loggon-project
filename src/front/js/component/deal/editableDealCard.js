import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { PostDealFormModal } from "./postDealFormModal";

import { Context } from "../../store/appContext";

import defaultDeal from "../../../img/defaultDeal.png";

export const EditableDealCard = (deal, setDeal, deleteDeal, isAdditional) => {
  const { store, actions } = useContext(Context);

  // const [deal, setDeal] = useState({
  //   id: props.id,
  //   user_id: props.userId,
  //   game_title: props.gameTitle,
  //   item_type: props.itemType,
  //   format: props.format,
  //   rating: props.rating,
  //   image_url: props.imageUrl,
  //   offer_link: props.offerLink,
  //   offer_price: props.offerPrice,
  //   expiration_date: props.expirationDate,
  //   promo_code: props.promoCode,
  //   scheduled_date: props.scheduledDate,
  //   scheduled_time: props.scheduledTime,
  // });
  const [newPostData, setNewPostData] = useState({
    imageUrl: "",
    offerPrice: "",
    expirationDate: "",
    promoCode: "",
    scheduledDate: "",
    scheduledTime: "",
  });

  useEffect(() => {
    setNewPostData({
      imageUrl: deal.image_url,
      offerPrice: deal.offer_price,
      expirationDate: deal.expiration_date,
      promoCode: deal.promo_code,
      scheduledDate: deal.scheduled_date,
      scheduledTime: deal.scheduled_time,
    });
  }, []);

  // useEffect(() => {
  //   setDeal({
  //     id: props.id,
  //     user_id: props.userId,
  //     game_title: props.gameTitle,
  //     item_type: props.itemType,
  //     format: props.format,
  //     rating: props.rating,
  //     image_url: props.imageUrl,
  //     offer_link: props.offerLink,
  //     original_price: props.originalPrice,
  //     offer_price: props.offerPrice,
  //     expiration_date: props.expirationDate,
  //     promo_code: props.promoCode,
  //     scheduled_date: props.scheduledDate,
  //     scheduled_time: props.scheduledTime,
  //   });
  // }, [store.user, props.user]);

  function handleInputChange(e, item) {
    e.persist();
    setNewPostData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  }

  function modifyPostHandler(e) {
    e.preventDefault();
    actions.modifyPost(
      newPostData.imageUrl,
      newPostData.offerPrice,
      newPostData.expirationDate,
      newPostData.promoCode,
      newPostData.scheduledDate,
      newPostData.scheduledTime,
      newPostData.scheduled
    );
    console.log(newPostData);
    setDeal((prevState) => ({
      ...prevState,
      image_url: newPostData.imageUrl,
      offer_price: newPostData.offerPrice,
      expiration_date: newPostData.expirationDate,
      promo_code: newPostData.promoCode,
      scheduled_date: newPostData.scheduledDate,
      scheduled_time: newPostData.scheduledTime,
    }));
  }
  /*No actualiza los datos al modificar en la card, pero si que los modifica a nivel de datos */
  return (
    <>
      <div
        className="card card-effect sombra text-white"
        style={{ width: "18rem" }}
      >
        <img
          src={deal.image_url || defaultDeal}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body bg-color text-white rounded-bottom-2 shadow-lg">
          <div className="row">
            <div className="d-flex flex-row">
              <div className="col-6">
                <h5 className="card-title">
                  {deal.game_title || "Game Title"}
                </h5>
              </div>
              <div className="col-3">
                {deal.expiration_date && (
                  <p
                    className="card-text text-white"
                    style={{ fontSize: "x-small" }}
                  >
                    {deal.expiration_date} ⌛
                  </p>
                )}
              </div>
              <div className="col-1">
                {/*--------------------------MODIFY DEAL MODAL TRIGGER BUTTON----------------------**/}
                <button
                  className="btn btn-effect border-0 py-0"
                  data-bs-target={`#editDealModalToggle-${deal.id}`}
                  data-bs-toggle="modal"
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
              </div>
              <div className="col-1">
                {/*---------------------------------------DELETE BUTTON---------------------------------*/}
                {isAdditional && (
                    <button
                      className="btn btn-effect-blue py-0 ms-3"
                      onClick={(e) => deleteDeal(index, e)}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  )}
              </div>
            </div>

            <div className="col-6">
              <p className="card-text">{deal.format || "CD"}</p>
              <p className="card-text" style={{ fontSize: "small" }}>
                {deal.item_type || "DLC"}
              </p>
            </div>
            <div className="col-6">
              <h4 className="card-text ms-2">
                {deal.offer_price || "price"} €
              </h4>
              <p className="card-text text-decoration-line-through">
                {deal.original_price || "price"} €
              </p>
            </div>
            {/*<p>Rating {deal.rating}</p>*/}

            <div className="d-flex flex-row grid gap-2">
              <div className="col-6">
                <Link
                  className="btn btn-link btn-effect rounded-2 mt-3 px-2 w-100"
                  to={`/post/${deal.id}`}
                  style={{ textDecoration: "none" }}
                >
                  DETAILS
                </Link>
              </div>
              <div className="col-6">
                <button className="btn rounded-2 mt-3 btn-effect-blue w-100">
                  <a
                    href={deal.offer_link || "#"}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    DEAL
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostDealFormModal
        deal={deal}
        setDeal={setDeal}
        onInputChange={handleInputChange}
      />
    </>
  );
};
