import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "/workspaces/loggon-dak-final-project-v2/src/front/styles/cardEffect.css"

import { Context } from "../store/appContext";

export const DealCard = (props) => {
  const { store, actions } = useContext(Context);

  const [gameTitle, setGameTitle] = useState("Game Title");
  const [format, setFormat] = useState("Digital");
  const [offerPrice, setOfferPrice] = useState(100);
  const [rating, setRating] = useState(10);

  return (
  <div className="card card-effect sombra text-white rounded-4" style={{ width: "18rem", height:"18rem", position: 'relative' }}>
  <img src="https://wallpaper.dog/large/20382633.jpg" className="card-img-top rounded-4" alt="..." />
  <div className="card-body flex-row d-flex rounded-bottom-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', bottom: '0%', width:'100%' }}>
    <div>
      <h5 className="card-title">{gameTitle}</h5>
      <p className="card-text">{format}</p>
      <p className="card-text">{offerPrice} €</p>
      <Link className="btn btn-link" to="/post/:id">
        Details
      </Link>
    </div>
    <div className="ms-auto">
      <p>Rating {rating}</p>
    </div>
  </div>
</div>

    
    // <div className="card card-effect sombra text-white" style={{ width: "18rem" }}>
    //   <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
    //   <div className="card-body flex-row d-flex">
    //     <div>
    //       <h5 className="card-title">{gameTitle}</h5>
    //       <p className="card-text">{format}</p>
    //       <p className="card-text">{offerPrice} €</p>
    //       <Link className="btn btn-link" to="/post/:id">
    //         Details
    //       </Link>
    //     </div>
    //     <div className="ms-auto">
    //       <p>Rating {rating}</p>
    //     </div>
    //   </div>
    // </div>
  );
};
