import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const SingleDeal = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [ gameTitle, setGameTitle ] = useState("GTA -ONLINE");
  const [ type, setType ] = useState("DLC");
  const [ format, setFormat ] = useState("Digital");
  const [ originalPrice, setOriginalPrice ] = useState(100);
  const [ offerPrice, setOfferPrice ] = useState(65);
  const [ dealPublisher, setDealPublisher ] = useState("@pere");
  const [ offerLink, setOfferLink ] = useState("https://store.steampowered.com/app/397540/Borderlands_3/")
  const [ rating, setRating ] = useState(10);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center w-100 mt-3">
        <div className="text-white row">
          {/*------------------------------------IMAGE---------------------------------*/}
          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src="https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/mYn2ETBKFct26V9mJnZi4aSS.png?w=440&thumb=false"
              alt="Game Image"
            />
          </div>
          {/*------------------------------------DEAL DETAILS---------------------------------*/}
          <div className="d-flex flex-column justify-content-between p-5 col-8 col-md-4">
            <div>
              <h3 className="pb-3">{gameTitle}</h3>
              <h5 className="pb-3">{type}</h5>
              <h5 className="pb-3">{format}</h5>
              <h5 className="pb-3 text-decoration-line-through">{originalPrice} €</h5>
              <h5 className="pb-3">{offerPrice} €</h5>
              <h5 className="pb-3">{dealPublisher}</h5>
            </div>
            {/*------------------------------------OFFER LINK---------------------------------*/}
            <a
             role="button"
              className="btn text-white rounded-5"
              style={{ background: "#992899", alignSelf: "start" }}
              href={offerLink}
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
      </div>
      {/*------------------------------------INFO API---------------------------------*/}
      <div className="d-flex justify-content-center w-100">
        <div className="row">
          <div className="col-10 bg-light rounded-3 p-3 m-auto my-3">
            <p>
              Grand Theft Auto Online Explore GTA Online, um universo online
              dinâmico em constante evolução para até 30 jogadores incluindo
              todas as atualizações de jogo, expansões e conteúdo adicionados
              desde o lançamento do GTA Online prontos para jogar a sós ou com
              amigos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
