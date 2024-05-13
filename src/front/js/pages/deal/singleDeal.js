import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../../store/appContext";

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
    // actions.openItem(
    //   deal.user_id,
    //   ([fetchedPublisher]) => setPublisher(fetchedPublisher),
    //   "user"
    // );
    if (deal.platform === "PC") {
      setDeal({
        ...deal,
        platform: "https://img.icons8.com/ios-glyphs/50/FD7E14/windows-10.png",
      });
    } else if (deal.platform === "PS5") {
      setDeal({
        ...deal,
        platform:
          "https://img.icons8.com/ios-glyphs/50/228BE6/play-station.png",
      });
    } else if (deal.platform === "Xbox") {
      setDeal({
        ...deal,
        platform: "https://img.icons8.com/ios/50/40C057/xbox.png",
      });
    } else if (deal.platform === "Nintendo") {
      setDeal({
        ...deal,
        platform:
          "https://img.icons8.com/ios-filled/50/FA5252/nintendo-switch-logo.png",
      });
    }
  }, [deal]);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center my-3">
        <div
          className="card text-bg-light border-0"
          style={{ maxWidth: "70rem" }}
        >
          <img src={deal.image_url} className="card-img opacity-25" alt="..." />
          <div className="card-img-overlay">
            {/*------------------------------------DEAL DETAILS---------------------------------*/}
            <div className="row m-4">
              <div className="col-8 d-flex flex-column">
                <div className="d-flex flex-row align-item-center">
                  {/*------------------------------------Title---------------------------------*/}
                  <h1 className="pb-3 text-center">{deal.game_title}</h1>{" "}
                  {/*------------------------------------Platform---------------------------------*/}
                  <div className="col-md-4 mb-3 ">
                    <img src={deal.platform} className="ms-2" />
                  </div>
                </div>{" "}
                {/*------------------------------------Publisher---------------------------------*/}
                <Link to={`/profile/${deal.user_id}`}>
                  {publisher && <h6 className="pb-2">@{publisher.username}</h6>}
                </Link>{" "}
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex flex-row">
                    {/*------------------------------------Type---------------------------------*/}
                    <div className="d-flex flex-row mt-3">
                      <i className="fa-solid fa-gamepad fs-4"></i>
                      <h5 className="ms-2">{deal.item_type}</h5>
                    </div>
                    {/*------------------------------------Format---------------------------------*/}
                    <div className="d-flex flex-row mt-3 ms-4">
                      <i className="fa-solid fa-eject fs-4"></i>
                      <h5 className="ms-2">{deal.format}</h5>
                    </div>
                  </div>
                  {/*------------------------------------Tags---------------------------------*/}
                  <div className="d-flex flex-wrap col-6">
                    {deal.game_tags &&
                      deal.game_tags.map((tag, index) => (
                        <li
                          className="list-group-item bg-transparent rounded-5 border border-black m-2 p-1 px-4 text-center"
                          key={index}
                        >
                          {tag}
                        </li>
                      ))}
                  </div>
                </div>
              </div>

              <div className="col-4 d-flex flex-column">
                {/*------------------------------------Expiration Date---------------------------------*/}
                <small>{deal.expiration_date} ⌛</small>

                {/*------------------------------------Prices---------------------------------*/}
                <div className="d-flex flex-column mt-3">
                  <h1>{deal.offer_price} €</h1>
                  <h5 className="text-decoration-line-through">
                    {deal.original_price} €
                  </h5>{" "}
                  {/*------------------------------------Promocode---------------------------------*/}
                  <div className="d-flex flex-row align-items-center">
                    <i className="fa-solid fa-barcode fs-4"></i>
                    <h2 className="ms-2">{deal.promo_code}</h2>
                  </div>
                  {/*------------------------------------Offer Link---------------------------------*/}
                  <a
                    target="_blank"
                    role="button"
                    className="btn btn-effect rounded-2 px-5 mt-4"
                    taget="_blank"
                    style={{ alignSelf: "start" }}
                    href={deal.offer_link}
                  >
                    DEAL
                  </a>
                </div>
              </div>
            </div>
            {/*---------------------- Description (data from 3rd party API) --------------------*/}
            <div className="row">
              <div className="col-9 rounded-3 p-3 m-auto text-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, eu per
                  nibh congue duis arcu ridiculus ornare, lacus ad placerat odio
                  varius lacinia. Arcu praesent purus tellus nulla aptent urna
                  porta posuere nullam facilisis sodales rutrum hendrerit
                  ligula, gravida penatibus taciti interdum fames aenean libero
                  placerat aliquet lectus quisque enim. Mattis accumsan risus
                  eros imperdiet lectus curae sem, in per viverra vivamus
                  condimentum tellus at ad, aliquam massa suscipit sed duis
                  fames. Vestibulum tempus mi accumsan enim class porta netus,
                  senectus massa lacinia odio varius sollicitudin congue dictum,
                  cubilia habitant torquent lectus nostra mattis. Placerat augue
                  id ut lobortis pretium tempus dictumst, laoreet ante justo
                  lacus sociis vestibulum, platea quis iaculis vivamus fusce
                  donec. Dapibus scelerisque dis massa class mus, duis vulputate
                  sodales tellus libero aliquet, felis cursus magna dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
