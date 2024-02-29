import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row justify-content-center mt-3">
      <div className="d-flex flex-column text-white col-8">
        <h3 className="col-12">Mi perfil</h3>
        <div className="d-flex flex-row col-sm-12">
          <img
            className="rounded-circle m-5"
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429857093_437082848988064_3333411511087179117_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=oB8UaK6zJUcAX8DG7Pj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRI6WYkb2BOpkY2dEyd2AVYZqf9FUYaKcFlToeIgOBLiQ&oe=66087116"
          />
          <ul className="list-group my-5">
            <div style={{ fontSize: "12px" }}>Username</div>
            <li className="list-group-item rounded my-2 text-white bg-transparent">
              <div class="me-auto">
                <p className="fw-bold mb-0">@Pere</p>
              </div>
            </li>
            <div style={{ fontSize: "12px" }}>Email</div>
            <li className="list-group-item rounded my-2 text-white bg-transparent">
              <div class="me-auto">
                <p className="fw-bold mb-0">pereayats@email.com</p>
              </div>
            </li>
            <div style={{ fontSize: "12px" }}>Password</div>
            <li className="list-group-item rounded my-2 text-white bg-transparent">
              <div class="me-auto">
                <p className="fw-bold mb-0">*********</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
