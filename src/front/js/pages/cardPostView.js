import React from "react";

export const CardPostView = () => {
  return (
    <div className="container-fluid">
      {/* --------------------Game details section----------------------- */}
      <div className="d-flex justify-content-center w-100 mt-3">
        <div className="text-white row">
          {/* ------------------Column for the game image------------*/}
          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src="https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/mYn2ETBKFct26V9mJnZi4aSS.png?w=440&thumb=false"
              alt="Game Image"
            />
          </div>
          {/* ---------------------Game titles and information-------------------------*/}
          <div className="d-flex flex-column justify-content-between p-5 col-8 col-md-4">
            <div>
              <h3 className="pb-3">GTA -ONLINE (title)</h3>
              <h5 className="pb-3">type</h5>
              <h5 className="pb-3">Digital/CD</h5>
              <h5 className="pb-3">$ 000,00(original price)</h5>
              <h5 className="pb-3">$ 000,00(offer price)</h5>
              <h5 className="pb-3">publisher username</h5>
            </div>
            {/* ----------------------------------button offer link---------------------------------*/}
            <button type="button" className="btn text-white rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ background: "#992899", alignSelf: 'start' }}>
              Offer link
            </button>
          </div>
          {/* ----------------------------------coluna rating---------------------------------------*/}
          <div className="p-5 col-4 col-md-2 d-flex align-items-end">
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/430191131_778202110347260_8379671903752576551_n.png?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_ohc=TMwhnf6h3AMAX_EeK10&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTXZPdjkqkaonHvjvFe7qVT26bJjHsQaPHiBNcvP47d3Q&oe=660B0CA7"
              className="img-fluid" alt="Rating Image" />
          </div>
        </div>
      </div>

      {/*---------------------- description (data from 3rd party API) --------------------*/}
      <div className="d-flex justify-content-center w-100">
        <div className="row">
          <div className="col-10 bg-light rounded-3 p-3 m-auto my-3">
            {/* -------------------Detailed profile description---------------------------*/}
            <p>Grand Theft Auto Online
              Explore GTA Online, um universo online dinâmico em constante evolução para até 30 jogadores incluindo todas as atualizações de jogo, expansões e conteúdo adicionados desde o lançamento do GTA Online prontos para jogar a sós ou com amigos.</p>
          </div>
        </div>
      </div>

      {/* ----------------------Modal for offer details-------------------------------- */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* -------------------------------Modal Body -------------------------*/}
            <div className="modal-body p-0">
              {/* Background Image */}
              <div
                className="position-relative"
                style={{
                  backgroundImage: 'url("https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/mYn2ETBKFct26V9mJnZi4aSS.png?w=440&thumb=false")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '300px'
                }}
              >
                {/* Gradiente preto sólido na parte inferior */}
                <div
                  className="position-absolute w-100 bottom-0"
                  style={{
                    height: '70%',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), transparent)'
                  }}
                ></div>
                {/* Gradiente transparente na parte superior */}
                <div
                  className="position-absolute w-100 top-0"
                  style={{
                    height: '30%',
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), transparent)'
                  }}
                ></div>
                <div className="position-absolute top-50 start-0 translate-middle-y text-white">
                  <h1 className="text-white ms-3">Modal title</h1>
                  <p className="text-white ms-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id feugiat eros, non porttitor magna. Sed non lacus auctor, fringilla nisi nec, consequat nisi.</p>
                </div>
                {/* Botão de fechar */}
                <button type="button" className="btn btn-close position-absolute top-0 end-0 text-white" aria-label="Close" data-bs-dismiss="modal"></button>
              </div>
              {/* ----------------------------Content ----------------------------------*/}
              <div className="container text-white">
                {/* Your content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
