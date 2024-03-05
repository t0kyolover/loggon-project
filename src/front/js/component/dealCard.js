import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DealCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
            <div className="card-body flex-row d-flex">
                <div>
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">Digital/CD</p>
                    <p className="card-text">00000</p>
                    <Link className="btn btn-link" to="/post/:id">Details</Link>
                </div>
                <div className="ms-auto">
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};
