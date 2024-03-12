import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const SingleDeal = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [deal, setDeal] = useState({
    id: "",
    game_title: "",
    image_url: "",
    item_type: "",
    platform: "",
    format: "",
    original_price: "",
    offer_price: "",
    expiration_date: "",
    promo_code: "",
    offer_link: "",
    game_tags: "",
    rating: "",
    publisher: "",
  });

  useEffect(() => {
    actions.openItem(params.id, setDeal);
  }, [params.id, store.deals]);

  console.log(params.id)

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mt-3">
        <div className="row">
          <div className="col-8 m-auto pb-5">
            <div className="row ">
              {/*------------------------------------IMAGE---------------------------------*/}
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <img
                  className="img-fluid "
                  src="https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/mYn2ETBKFct26V9mJnZi4aSS.png?w=440&thumb=false"
                  alt="Game Image"
                />
              </div>
              {/*------------------------------------DEAL DETAILS---------------------------------*/}
              <div className="d-flex flex-column text-white justify-content-between p-2 col-8 col-md-4">
                <div>
                  <h3 className="pb-3">{deal.game_title}</h3>
                  <h5 className="pb-3">{deal.type}</h5>
                  <h5 className="pb-3">{deal.format}</h5>
                  <h5 className="pb-3 text-decoration-line-through">
                    {deal.original_price} €
                  </h5>
                  <h5 className="pb-3">{deal.offer_price} €</h5>
                  <Link to="/profile/:username">
                    <h5 className="pb-3">@{deal.publisher}</h5>
                  </Link>
                </div>
                {/*------------------------------------OFFER LINK---------------------------------*/}
                <a
                  target="_blank"
                  role="button"
                  className="btn text-white rounded-5"
                  taget="_blank"
                  style={{ background: "#992899", alignSelf: "start" }}
                  href={deal.offer_link}
                >
                  Deal
                </a>
              </div>
              {/*------------------------------------RATING---------------------------------*/}
              <div className="p-5 col-4 col-md-2 d-flex align-items-end">
                <img
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/430191131_778202110347260_8379671903752576551_n.png?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_ohc=TMwhnf6h3AMAX_EeK10&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTXZPdjkqkaonHvjvFe7qVT26bJjHsQaPHiBNcvP47d3Q&oe=660B0CA7"
                  className="img-fluid"
                  alt="Rating Image"
                />
              </div>
            </div>
            {/*---------------------- description (data from 3rd party API) --------------------*/}
            <div className="row">
              <div className="col-12 bg-light rounded-3 p-3 m-auto my-5">
                <p>
                  Grand Theft Auto Online Explore GTA Online, um universo online
                  dinâmico em constante evolução para até 30 jogadores incluindo
                  todas as atualizações de jogo, expansões e conteúdo
                  adicionados desde o lançamento do GTA Online prontos para
                  jogar a sós ou com amigos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleDeal.propTypes = {
	match: PropTypes.object
};