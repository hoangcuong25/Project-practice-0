import React from "react";
import './Hero.css';
import main_banner from '../Assets/main-banner.png'
import dolce_gabbana_logo from '../Assets/dolce_gabbana_logo.png'
import carolina_herrera_logo from '../Assets/Carolina_Herrera_Brand_Logo.png'
import gucci_logo from '../Assets/Gucci_Brand_Logo.png'
import marc_jacobs_logo from '../Assets/Marc_Jacobs_Logo.png'
import tom_ford_logo from '../Assets/Tom_Ford_logo.png'
import versace_logo from '../Assets/Versace_logo.png'
import for_her from '../Assets/for_her.png'
import for_him from '../Assets/for_him.png'
import new_in from '../Assets/new_in.png'
import sale from '../Assets/sale.png'
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-banner">
                <img src={main_banner} alt="" />
            </div>
            <div className="hero-brands">
                <p>OUR FRAGRANCE BRANDS</p>
                <Link to='/dolce'><img onClick={window.scrollTo(0, 0)} src={dolce_gabbana_logo} alt="" /></Link>
                <Link to='/carolina'><img onClick={window.scrollTo(0, 0)} src={carolina_herrera_logo} alt="" /></Link>
                <Link to='/gucci'><img onClick={window.scrollTo(0, 0)} src={gucci_logo} alt="" /></Link>
                <Link to='/marc'><img onClick={window.scrollTo(0, 0)} src={marc_jacobs_logo} alt="" /></Link>
                <Link to='/tomford'><img onClick={window.scrollTo(0, 0)} src={tom_ford_logo} alt="" /></Link>
                <Link to='/versace'><img onClick={window.scrollTo(0, 0)} src={versace_logo} alt="" /></Link>
            </div>
            <div className="hero-img">
                <div className="hero-img-for-her">
                    <Link to='/women'><img onClick={window.scrollTo(0, 0)} src={for_her} alt="" /></Link>
                    <p>For Her</p>
                </div>
                <div className="hero-img-for-him">
                    <Link to='/men'><img onClick={window.scrollTo(0, 0)} src={for_him} alt="" /></Link>
                    <p>For Him</p>
                </div>
                <div className="hero-img-new-in">
                    <img src={new_in} alt="" />
                    <p>New In</p>
                </div>
                <div className="hero-img-in">
                    <img src={sale} alt="" />
                    <p>Sale</p>
                </div>

            </div>
        </div>
    )
}

export default Hero