

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "/workspaces/loggon-dak-final-project-v2/src/front/styles/cardOuterGLowEffect.css";

import { Context } from "../store/appContext";

export const GameCard = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <h3></h3>
            <i className=""></i>
         
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
              repudiandae, explicabo voluptate et hic cum ratione a. Officia
              delectus illum perferendis maiores quia molestias vitae fugiat
              aspernatur alias corporis?
            </p>
            {/*---------------------------------------DETAILS MODAL TRIGGER BUTTON---------------------------------*/}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#detailsModal"
            >
              Details
            </button>

          </div>
        </div>
      </div>
      {/*---------------------------------------DETAILS MODAL---------------------------------*/}
      <div
        className="modal fade"
        id="detailsModal"
        tabIndex="-1"
        aria-labelledby="detailsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="detailsModalLabel">
                Game Details
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
            <div className="modal-body p-0">
              <div
                className="position-relative"
                style={{
                  backgroundImage:
                    'url("https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/mYn2ETBKFct26V9mJnZi4aSS.png?w=440&thumb=false")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "300px",
                }}
              >
                {/* Gradiente preto sólido na parte inferior */}
                <div
                  className="position-absolute w-100 bottom-0"
                  style={{
                    height: "70%",
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
                  }}
                ></div>
                {/* Gradiente transparente na parte superior */}
                <div
                  className="position-absolute w-100 top-0"
                  style={{
                    height: "30%",
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0), transparent)",
                  }}
                ></div>
                <div className="position-absolute top-50 start-0 translate-middle-y text-white">
                  <h1 className="text-white ms-3">Modal title</h1>
                  <p className="text-white ms-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla id feugiat eros, non porttitor magna. Sed non lacus
                    auctor, fringilla nisi nec, consequat nisi.
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-close position-absolute top-0 end-0 text-white"
                  aria-label="Close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              {/*-----------------------------Game Information from API----------------------------------*/}
              <div className="container text-white">
                {/* Your content here */}
              </div>
            </div>
            <div className="modal-footer border-0">
              <p style={{ color: "#992899" }}>
                Made by DKA <i className="fa-solid fa-skull-crossbones"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";

// import "/workspaces/loggon-dak-final-project-v2/src/front/styles/cardOuterGLowEffect.css";

// import { Context } from "../store/appContext";

// export const GameCard = () => {
//   const { store, actions } = useContext(Context);

//   return (
//     <div className="card face face1" style={{ width: "18rem" }}>
//       <img
//         src="https://picsum.photos/id/1/200"
//         className="card-img-top"
//         alt="..."
//       />
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//         {/*---------------------------------------DETAILS MODAL TRIGGER BUTTON---------------------------------*/}
//         <button
//           type="button"
//           className="btn btn-primary"
//           data-bs-toggle="modal"
//           data-bs-target="#detailsModal"
//         >
//           Details
//         </button>
//         {/*---------------------------------------DETAILS MODAL---------------------------------*/}
//         <div
//           className="modal fade"
//           id="detailsModal"
//           tabIndex="-1"
//           aria-labelledby="detailsModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content bg-dark text-white">
//               <div className="modal-header border-0">
//                 <h1 className="modal-title fs-5" id="detailsModalLabel">
//                   Game Details
//                 </h1>
//                 <div className="ms-auto" data-bs-theme="dark">
//                   <button
//                     type="button"
//                     className="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//               </div>
//               <div className="modal-body p-0">
//                 <div
//                   className="position-relative"
//                   style={{
//                     backgroundImage:
//                       'url("https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/mYn2ETBKFct26V9mJnZi4aSS.png?w=440&thumb=false")',
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     minHeight: "300px",
//                   }}
//                 >
//                   {/* Gradiente preto sólido na parte inferior */}
//                   <div
//                     className="position-absolute w-100 bottom-0"
//                     style={{
//                       height: "70%",
//                       background:
//                         "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
//                     }}
//                   ></div>
//                   {/* Gradiente transparente na parte superior */}
//                   <div
//                     className="position-absolute w-100 top-0"
//                     style={{
//                       height: "30%",
//                       background:
//                         "linear-gradient(to bottom, rgba(0, 0, 0, 0), transparent)",
//                     }}
//                   ></div>
//                   <div className="position-absolute top-50 start-0 translate-middle-y text-white">
//                     <h1 className="text-white ms-3">Modal title</h1>
//                     <p className="text-white ms-3">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Nulla id feugiat eros, non porttitor magna. Sed non lacus
//                       auctor, fringilla nisi nec, consequat nisi.
//                     </p>
//                   </div>
//                   <button
//                     type="button"
//                     className="btn btn-close position-absolute top-0 end-0 text-white"
//                     aria-label="Close"
//                     data-bs-dismiss="modal"
//                   ></button>
//                 </div>
//                 {/*-----------------------------Game Information from API----------------------------------*/}
//                 <div className="container text-white">
//                   {/* Your content here */}
//                 </div>
//               </div>
//               <div className="modal-footer border-0">
//                 <p style={{ color: "#992899" }}>
//                   Made by DKA <i className="fa-solid fa-skull-crossbones"></i>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
