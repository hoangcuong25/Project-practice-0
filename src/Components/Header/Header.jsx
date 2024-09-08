import React from "react";
import './Header.css';
import track_order from '../Assets/track_oder_icon.png';
import whish_list_icon from '../Assets/whishlist_icon.jpg'
import logo_icon from '../Assets/logo_icon.png'
import signin_register_icon from '../Assets/avata_icon.jpg'
import cart_icon from '../Assets/cart_icon.jpg'
import { Link } from "react-router-dom";

const Header = (params) => {
    return (
        <div>
            <div className="header">
                <div className="header-left">
                    <div className="track-order">
                        <Link to="/track-oder"> <img src={track_order} alt="" /></Link>
                        <p>TRACK ORDER</p>
                    </div>
                    <div className="whish-list">
                        <Link to="/wish-list"><img src={whish_list_icon} alt="" /></Link>
                        <p>WHISH LIST</p>
                    </div>
                </div>
                <div className="logo">
                    <Link to="/"><img src={logo_icon} alt="" /></Link>
                </div>
                <div className="header-right">
                    <div className="signin-register">
                        <Link to="/sigin-register"><img src={signin_register_icon} alt="" /></Link>
                        <p>SIGN IN/ REGISTER</p>
                    </div>
                    <div className="cart">
                        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                        <div className="cart-count">0</div>
                    </div>
                </div>
            </div>
            <hr className="hr-header"/>
        </div>
    )
}

export default Header;