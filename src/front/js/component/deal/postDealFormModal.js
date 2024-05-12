import React, { useState, useEffect, useContext } from "react";
import { Formik } from 'formik';
import { Link } from "react-router-dom";

import { SchedulePostModal } from "./schedulePostModal";
import { PostDealForm } from "./postDealForm";

import { Context } from "../../store/appContext";

export const PostDealFormModal = (deal, setDeal, onInputChange) => {
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
  const [scheduledButton, setScheduledButton] = useState(false);
  const [scheduled, setScheduled] = useState(false);

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
        className="modal fade"
        id={`editDealModalToggle-${deal.id}`}
        aria-hidden="true"
        aria-labelledby={`editDealModalToggleLabel-${deal.id}`}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content text-white"
            style={{ background: "#020D19" }}
          >
            <div className="modal-header border-0">
              <h1
                className="modal-title fs-5"
                id={`editDealModalToggleLabel-${deal.id}`}
              >
                Create Post
              </h1>
              <div className="ms-auto" data-bs-theme="dark">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="modal-body">
              <PostDealForm />
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------Schedule Post Modal---------------------------------**/}
      <SchedulePostModal onInputChange={handleInputChange} deal={deal} />
    </>
  );
};
