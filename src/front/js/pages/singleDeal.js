import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const SingleDeal = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  const [deal, setDeal] = useState({});
  const [publisher, setPublisher] = useState({});

  useEffect(() => {
    actions.openItem(id, ([fetchedDeal]) => setDeal(fetchedDeal), "deal");
  }, []);

  useEffect(() => {
    actions.openItem(id, ([fetchedDeal]) => setDeal(fetchedDeal), "deal");
  }, [id]);

  useEffect(() => {
    actions.openItem(
      deal.user_id,
      ([fetchedPublisher]) => setPublisher(fetchedPublisher),
      "user"
    );
  }, [deal]);

  console.log(publisher);

  return (

    <div className="container-fluid">
      <div className="d-flex justify-content-center mt-3">
        <div className="row">
          <div className="col-8 m-auto pb-5">
            {/*------------------------------------IMAGE---------------------------------*/}
            <div className="row position-relative">
              <div className="col-12 image-fluid m-auto">
                <img
                  className="img-fluid rounded-2 sombra"
                  src={deal.image_url}
                  alt="Game Image"
                />
                {/*------------------------------------RATING---------------------------------*/}
                <img
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/430191131_778202110347260_8379671903752576551_n.png?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_ohc=TMwhnf6h3AMAX_EeK10&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTXZPdjkqkaonHvjvFe7qVT26bJjHsQaPHiBNcvP47d3Q&oe=660B0CA7"
                  className="img-fluid position-absolute bottom-0 end-1"
                  alt="Rating Image"
                  style={{ width: "60px" }} // Ajuste o tamanho da imagem de classificação conforme necessário
                />
              </div>
            </div>
            {/*------------------------------------DEAL DETAILS---------------------------------*/}
            <div className="row text-white text-center justify-content-center">
              <h3 className="pb-3 text-center mt-4">{deal.game_title}</h3>
              <div className="d-flex flex-column text-white justify-content-between p-2 ps-2 col-12 col-md-4">
                <h5 className="pb-3">{deal.platform}</h5>
                <h5 className="pb-3">{deal.item_type}</h5>
                <h5 className="pb-3">{deal.format}</h5>
                <h5 className="pb-3 text-decoration-line-through">
                  {deal.original_price} €
                </h5>
                <h5 className="pb-3">{deal.offer_price} €</h5>
                <p className="pb-3">{deal.expiration_date}</p>
                <Link to={`/profile/${deal.user_id}`}>
                  {publisher && (
                    <h5 className="pb-2">@{publisher.username}</h5>
                  )}
                </Link>
              </div>
              <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">


                {/*------------------------------------PROMO CODE---------------------------------*/}
                <div className="text-white ">
                <p>PROMOTIONAL CODE:</p>
                <h2>{deal.promo_code}</h2>
                </div>
                {/*------------------------------------TAG---------------------------------*/}
                <div className="text-white text-center">
                  {deal.game_tags &&
                    deal.game_tags.map((tag, index) => (
                      <li
                        className="list-group-item bg-transparent text-white rounded-5 border-white border m-2 p-1 px-4 text-center"
                        key={index}
                      >
                        {tag}
                      </li>
                    ))}

                  {/*------------------------------------OFFER LINK---------------------------------*/}

                  <a
                    target="_blank"
                    role="button"
                    className="btn btn-effect text-white rounded-2 px-5 mt-4"
                    taget="_blank"
                    style={{ alignSelf: "start" }}
                    href={deal.offer_link}
                  >
                    DEAL
                  </a>
                </div>
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
