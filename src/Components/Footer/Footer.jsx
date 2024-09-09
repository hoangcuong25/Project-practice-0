import React from "react";
import './Footer.css'
import logo_icon from '../Assets/logo_icon.png'
import ins_logo from '../Assets/instagram_icon.png'
import pin_logo from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo_icon} alt="" />
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social">
                <div className="footer-social-ccontainer">
                    <img src={ins_logo} alt="" />
                    <img src={pin_logo} alt="" />
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <hr className="hr-footer" />
            <div className="footer-copyright">
                <p>COPYRIGHT @ 2024 -ALL RIGHT RESERVED.</p>
            </div>
        </div>
    )
}

export default Footer