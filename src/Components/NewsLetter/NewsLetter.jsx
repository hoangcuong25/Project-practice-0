import React from "react";
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="newletter">
            <h1>Get Exclusive Offers On Your Email ?</h1>
            <p>Subcirbe to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your Email Address" />
                <button>Subcribe</button>
            </div>

        </div>
    )
    
}

export default NewsLetter