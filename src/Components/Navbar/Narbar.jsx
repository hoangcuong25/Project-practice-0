import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import search_icon from '../Assets/search_icon.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div>
            <div className="narbar">
                <ul className="narbar-menu">
                    <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to="/">SHOP</Link>{menu === "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none' }} to="/men">MEN</Link>{menu === "men" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none' }} to="/women">WOMEN</Link>{menu === "women" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("best-seller") }}><Link style={{ textDecoration: 'none' }} to="/best-seller">BEST SELLERS</Link>{menu === "best-seller" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("offers") }}><Link style={{ textDecoration: 'none' }} to="/offers">OFFERS</Link>{menu === "offers" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("gifting") }}><Link style={{ textDecoration: 'none' }} to="/gifting">GIFTING</Link>{menu === "gifting" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("blogs") }}><Link style={{ textDecoration: 'none' }} to="/blogs">BLOGS</Link>{menu === "blogs" ? <hr /> : <></>}</li>
                </ul>
                <div className="search">
                    <img src={search_icon} alt="" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <hr className="hr-navbar"/>
        </div>
    )
}

export default Navbar;