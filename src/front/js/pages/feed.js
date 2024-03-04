import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { DealCard } from "../component/dealCard";


export const Feed = () => {
    const [activeTab, setActiveTab] = useState("grid1");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>

            {/*------------------------------------Logo de a pagina---------------------------------*/}

            <div className="container mt-2 py-5 bg-light">
                <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            </div>

            {/*---------------------------------------nav de plataformas---------------------------------*/}

            <div className="container mt-5 ">
                <nav className="">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            className="nav-link active"
                            id="nav-ps5-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-ps5"
                            type="button"
                            role="tab"
                            aria-controls="nav-ps5"
                            aria-selected="true"
                        >
                            PS5
                        </button>
                        <button
                            className="nav-link"
                            id="nav-xbox-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-xbox"
                            type="button"
                            role="tab"
                            aria-controls="nav-xbox"
                            aria-selected="false"
                        >
                            XBOX
                        </button>
                        <button
                            className="nav-link"
                            id="nav-pc-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-pc"
                            type="button"
                            role="tab"
                            aria-controls="nav-pc"
                            aria-selected="false"
                        >
                            PC
                        </button>
                        <button
                            className="nav-link"
                            id="nav-nintendo-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-nintendo"
                            type="button"
                            role="tab"
                            aria-controls="nav-nintendo"
                            aria-selected="true"
                        >
                            Nintendo
                        </button>

                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-ps5"
                        role="tabpanel"
                        aria-labelledby="nav-ps5-tab"
                        tabindex="0"
                    >
                        <div class="container text-center">
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
                                <div class="col"><DealCard /></div>
                                <div class="col"><DealCard /></div>
                                <div class="col"><DealCard /></div>
                                <div class="col"><DealCard /></div>
                            </div>
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
                                <div class="col"><DealCard /></div>
                                <div class="col"><DealCard /></div>
                                <div class="col"><DealCard /></div>
                                <div class="col"><DealCard /></div>
                            </div>
                        </div>



                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-xbox"
                        role="tabpanel"
                        aria-labelledby="nav-xbox-tab"
                        tabindex="0"
                    >
                        <div className="mt-4">
                            <DealCard />
                        </div>

                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-pc"
                        role="tabpanel"
                        aria-labelledby="nav-pc-tab"
                        tabindex="0"
                    >
                        <div className="mt-4">
                            <DealCard />
                        </div>

                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-nintendo"
                        role="tabpanel"
                        aria-labelledby="nav-nintendo-tab"
                        tabindex="0"
                    >
                        <div className="mt-4">
                            <DealCard />
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};
