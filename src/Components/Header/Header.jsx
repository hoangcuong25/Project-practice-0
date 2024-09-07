import React from "react";
import './Header.css';
import track_order from '../Assets/track_oder_icon.png';
import whish_list_icon from '../Assets/whishlist_icon.jpg'
import logo_icon from '../Assets/logo_icon.png'
import signin_register_icon from '../Assets/avata_icon.jpg'
import cart_icon from '../Assets/cart_icon.jpg'

const Header = (params) => {
    return (
        <div className="header">
            <div className="track-order">
                <img src={track_order} alt="" />
                <p>TRACK ORDER</p>
            </div>
            <div className="whish-list">
                <img src={whish_list_icon} alt="" />
                <p>WHISH LIST</p>
            </div>
            <div className="logo">
                <img src={logo_icon} alt="" />
            </div>
            <div className="signin-register">
                <img src={signin_register_icon} alt="" />
                <p>SIGN IN/ REGISTER</p>
            </div>
            <div className="cart">
                <img src={cart_icon} alt="" />
                <p>(0)</p>
            </div>
        </div>
    )
}

export default Header;