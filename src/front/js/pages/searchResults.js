import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { DealCard } from "../component/dealCard";



export const SearchResults = () => {
    const [activeTab, setActiveTab] = useState("grid1");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="text-center text-white m-5">
                <h1 style={{ fontSize: "50px" }}>Games</h1>
            </div>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
                    <div className="col"><DealCard /></div>
                    <div className="col"><DealCard /></div>
                    <div className="col"><DealCard /></div>
                    <div className="col"><DealCard /></div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
                    <div className="col"><DealCard /></div>
                    <div className="col"><DealCard /></div>
                    <div className="col"><DealCard /></div>
                    <div className="col"><DealCard /></div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
                    <div className="col"><DealCard /></div>
                    <div className="col"><DealCard /></div>
                    <div className="col"><DealCard /></div>
                    <div className="col"><DealCard /></div>
                </div>
            </div>

        </>
    );
};