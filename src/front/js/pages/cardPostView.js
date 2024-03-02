import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

export const CardPostView = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("@Pere");
    const [email, setEmail] = useState("pereayats@email.com");
    const [steamUsername, setSteamUsername] = useState("");
    const [twitchUsername, setTwitchUsername] = useState("");

    /*Habilitar lapiz de editar y conectar useStates con sus useEffects*/
    return (
        <div className="container-fluid">
            ---------------------------------------PROFILE DETAILS---------------------------------
            <div className="d-flex justify-content-center w-100 mt-3">
                <div className="text-white row ">
                    <div className="col-6">
                        <img
                            className="img-fluid m-5"
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/mYn2ETBKFct26V9mJnZi4aSS.png?w=440&thumb=false"
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-between p-5 col-4" style={{ height: '100%' }}>
                        <div>
                            <h3 className="pb-3">title</h3>
                            <h3 className="pb-3">Digital/CD</h3>
                            <h3 className="pb-3">$ 000,00</h3>
                        </div>
                        <button
                            className="btn text-white rounded-5"
                            style={{ background: "#992899", alignSelf: 'start' }}
                        >
                            Cambiar
                        </button>
                    </div>
                    <div className="p-5 col-2 d-flex align-items-end">
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/430191131_778202110347260_8379671903752576551_n.png?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_ohc=TMwhnf6h3AMAX_EeK10&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTXZPdjkqkaonHvjvFe7qVT26bJjHsQaPHiBNcvP47d3Q&oe=660B0CA7"
                            className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center w-100 m-auto">
                <div className="row">
                    <div className="col-12 bg-light rounded-3 p-3">
                        <p>Aqui vai outra descrição. Este espaço também ocupa todas as 12 colunas disponíveis no sistema de grid do Bootstrap, mas está com um fundo cinza claro e o texto está centralizado.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

{/* <form>
  <ul className="list-group my-5">
    ---------------------------------------Username---------------------------------
    <div style={{ fontSize: "12px", color: "#992899" }}>
      Usuario
    </div>
    <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
      <div className="me-auto">
        <p className="fw-bold mb-0">{username}</p>
      </div>
      <div className="ms-3">
        <button className="btn py-0">
          <i
            className="fa-solid fa-pencil"
            style={{ color: "#992899" }}
          ></i>
        </button>
      </div>
    </li>
    ---------------------------------------Email---------------------------------
    <div style={{ fontSize: "12px", color: "#992899" }}>Correo</div>
    <li className="list-group-item rounded-5 my-2 text-white bg-transparent d-flex flex-row">
      <div className="me-auto">
        <p className="fw-bold mb-0">{email}</p>
      </div>
      <div className="ms-3">
        <button className="btn py-0">
          <i
            className="fa-solid fa-pencil"
            style={{ color: "#992899" }}
          ></i>
        </button>
      </div>
    </li>
    ---------------------------------------Password---------------------------------
    Cuadrar el boton. Onclick el boton redirige al mismo workflow de "Forgot password"
    <div style={{ fontSize: "12px", color: "#992899" }}>
      Contraseña
    </div>
    <div className="d-flex flex-row">
      <li className="list-group-item rounded-5 my-2 text-white bg-transparent">
        <div className="me-auto">
          <p className="fw-bold mb-0">*********</p>
        </div>
      </li>
      <button
        className="btn text-white rounded-5 ms-3"
        style={{ background: "#992899" }}
      >
        Cambiar
      </button>
    </div>
    ---------------------------------------Platforms usernames---------------------------------
    <div style={{ fontSize: "12px", color: "#992899" }}>
      Vincular
    </div>
    <li className="list-group-item border-0 my-2 text-white bg-transparent d-flex flex-row">
      ---------------------------------------Steam---------------------------------
      <p className="me-2">
        <button
          className="btn p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSteam"
          aria-expanded="false"
          aria-controls="collapseSteam"
        >
          <i className="fa-brands fa-steam text-white fs-3"></i>
        </button>
      </p>
      <div style={{ minHeight: "50px" }}>
        <div
          className="collapse collapse-horizontal"
          id="collapseSteam"
        >
          <input
            type="text"
            className="form-control rounded-5 text-black w-auto"
            style={{ maxHeight: "30px" }}
            onChange={(e) => setSteamUsername(e.target.value)}
          />
        </div>
      </div>
      ---------------------------------------Twitch---------------------------------
      <p className="mx-2">
        <button
          className="btn p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwitch"
          aria-expanded="false"
          aria-controls="collapseTwitch"
        >
          <i className="fa-brands fa-twitch text-white fs-3"></i>
        </button>
      </p>
      <div style={{ minHeight: "50px" }}>
        <div
          className="collapse collapse-horizontal"
          id="collapseTwitch"
        >
          <input
            type="text"
            className="form-control rounded-5 text-black w-auto"
            style={{ maxHeight: "30px" }}
            onChange={(e) => setTwitchUsername(e.target.value)}
          />
        </div>
      </div>
    </li>
    ---------------------------------------Interests---------------------------------
    

  </ul>
</form> */}