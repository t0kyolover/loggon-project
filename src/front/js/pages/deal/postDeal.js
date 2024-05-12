import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { EditableDealCard } from "../../component/deal/editableDealCard";

import { Context } from "../../store/appContext";

export const PostDeal = () => {
  const { store, actions } = useContext(Context);
  const { username } = useParams();
  const navigate = useNavigate();

  const [deal, setDeal] = useState(store.newDealDefault || {});
  const [additionalDeals, setAdditionalDeals] = useState([]);

  useEffect(() => {
    if (store.newDeals && store.newDeals.length > 0) {
      setDeal(store.newDeals[0]);
    }
  }, [store.newDeals]);


  function addDeal() {
    setAdditionalDeals([...additionalDeals, {}]);
  }

  function deleteDeal(index, e) {
    e.preventDefault();
    const updatedDeals = additionalDeals.filter((_, i) => i !== index);
    setAdditionalDeals(updatedDeals);
  }

  function handlePostDeal(e, deal) {
    e.preventDefault();
    if (
      deal.game_title == "" ||
      deal.platform == "" ||
      deal.type == "" ||
      deal.format == "" ||
      deal.original_price == "" ||
      deal.offer_price == "" ||
      deal.offer_link == ""
    ) {
      alert("Please fill out all required fields");
      return;
    } else {
      actions.postDeal(deal);
      alert("Deal posted successfully");
      navigate(`/`);
      console.log(store.deals);
    }
  }

  if (store.loggedIn === false) {
    navigate("/login");
  }

  return (
    <div className="container my-4">
      <div className="row">
        {/*--------------------------------Title----------------------------*/}
        <div className="col-3">
          <h1 className="my-3 text-white">Post Deal</h1>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center flex-wrap">
          <div className="col-3">
            <EditableDealCard deal={deal} setDeal={setDeal} isAdditional={false}/>
          </div>
          {/*----------------------Additional Deal Form------------------------*/}
          {additionalDeals.map((deal, index) => (
            <div className="col-3">
              <EditableDealCard
                deal={deal}
                setDeal={setDeal}
                key={index}
                deleteDeal={deleteDeal}
                isAdditional={true}
              />
            </div>
            // <div className="row">
            //   <div className="col-4">
            //     <DealCard key={index} deal={deal} />
            //   </div>
            //   <div className="col-8">
            //     <PostDealForm
            //       key={index}
            //       onClick={(e) => deleteDeal(index, e)}
            //       isAdditional={true}
            //     />
            //   </div>
            // </div>
          ))}
          <div className="col-3">
            {/*----------------------Button Add Additional Deal Form-----------------*/}
            <button
              type="button"
              className="btn btn-effect-blue"
              onClick={addDeal}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          {/*-------------------------Button Add Post---------------------*/}
          <button
            type="button"
            className="btn btn-effect w-25 my-5"
            onClick={(e) => handlePostDeal(e, deal)}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
