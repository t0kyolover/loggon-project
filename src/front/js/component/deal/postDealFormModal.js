import React, { useState, useEffect, useContext } from "react";
import { Formik } from 'formik';
import { Link } from "react-router-dom";

import { PostDealForm } from "./postDealForm";

import { Context } from "../../store/appContext";

export const PostDealFormModal = () => {
  const { store, actions } = useContext(Context);
  const [deal, setDeal] = useState(store.newDealDefault || {});

  useEffect(() => {
    if (store.newDeals && store.newDeals.length > 0) {
      setDeal(store.newDeals[0]);
    }
  }, [store.newDeals]);

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
              <PostDealForm  onValuesChange={(values) => {actions.savePostDealForm(values)}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
