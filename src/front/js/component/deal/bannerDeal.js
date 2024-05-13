import React from "react";

import bn1 from "../../../img/bn1.png";
import "../../../styles/styles.css";


export const BannerDeal = () => (

<div className="wrapper">
        <div className="containerBanner">
            <input type="radio" name="slide" id="c1" checked/>
            <label for="c1" className="cardBanner card-effect" style={{ backgroundImage: `url(${bn1})` }}>
                <div class="row ">
                    <div className="icon">1</div>
                    <div className="description">
                        <h4>1</h4>
                        <p>lorem</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c2" />
            <label for="c2" className="cardBanner card-effect" style={{ backgroundImage: `url(${bn1})` }}>
                <div className="row">
                    <div className="icon">2</div>
                    <div className="description">
                        <h4>2</h4>
                        <p>Lorem</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c3" />
            <label for="c3" className="cardBanner card-effect" style={{ backgroundImage: `url(${bn1})` }}>
                <div className="row">
                    <div className="icon">3</div>
                    <div className="description">
                        <h4>3</h4>
                        <p>lorem</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c4"/>
            <label for="c4" className="cardBanner card-effect" style={{ backgroundImage: `url(${bn1})` }}>
                <div className="row">
                    <div className="icon">4</div>
                    <div className="description">
                        <h4>4</h4>
                        <p>lorem</p>
                    </div>
                </div>
            </label>
        </div>
        </div>
        );
