import React from "react";
import './Footer.css'
import logo_icon from '../Assets/logo_icon.png'
import ins_logo from '../Assets/instagram_icon.png'
import pin_logo from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <h1>About The Perfume Shop</h1>
                <p>For 30 years we have been selling the widest range of women's perfumes and men's aftershaves at affordable prices. We stock the fragrances of nearly 130 brands including Hugo Boss, Paco Rabanne, Gucci, Ariana Grande, Mugler and Marc Jacobs both online and across our network of over 215 nationwide stores. We also stock the luxury perfume brands Dior, Tom Ford, Viktor & Rolf, Hermès and Maison Margiela.</p>
                <p>Not only do we have the experience of selling perfumes, we also have the expertise to match. Our staff are trained and developed so that they are the most knowledgeable sales advisors within the perfume industry, we have the largest number of Fragrance Foundation fragrance graduates nationwide and a fragrance finder to guide your online shopping.</p>
                <p>We have been voted the Fragrance Foundation Online Retailer of the Year for the past 5 years. Online we offer FREE standard delivery on all orders for our VIP members, click and collect in 30 minutes and we've even introduced a “Try Me” option on some of our most popular products where you'll receive a free sample, so if you're choosing a new perfume or aftershave you can smell that before you open your order. Our VIP members can select a sample at checkout and have the opportunity to earn rewards while they shop. You can checkout straight away using our card payment options, or choose to buy now pay later using Klarna</p>
                <p>We offer gift wrap, bottle engraving and personalised ribbon services online and across selected stores, plus you can recycle any bottle of fragrance with us instore and receive 15% off your next shop and choose from a range of refillable and vegan fragrances.</p>
            </div>
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