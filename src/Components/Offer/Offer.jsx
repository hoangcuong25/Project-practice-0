import React from "react";
import './Offer.css';
import banner_offer from '../Assets/banner_offer.png';

const Offer = () => {
    return (
        <div className="offer">
            <div className="offer-left">
                <h1>Exclusive</h1> 
                <h1>Offers For You</h1>
                <button>Check Now</button>
            </div>
            <div className="offer-right">
                <img src={banner_offer} alt="" />
            </div>
        </div>
    )
}

export default Offer;