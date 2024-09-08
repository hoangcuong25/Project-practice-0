import React from "react";
import './Hero.css';
import banner_main from '../Assets/banner_main.jpg'
import dolce_gabbana_logo from '../Assets/dolce_gabbana_logo.png'
import carolina_herrera_logo from '../Assets/Carolina_Herrera_Brand_Logo.png'
import gucci_logo from '../Assets/Gucci_Brand_Logo.png'
import marc_jacobs_logo from '../Assets/Marc_Jacobs_Logo.png'
import tom_ford_logo from '../Assets/Tom_Ford_logo.png'
import versace_logo from '../Assets/Versace_logo.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="banner">
                <img src={banner_main} alt="" />
            </div>
            <div className="brands">
                <p>OUR FRAGRANCE BRANDS</p>
                <img src={dolce_gabbana_logo} alt="" />
                <img src={carolina_herrera_logo} alt="" />
                <img src={gucci_logo} alt="" />
                <img src={marc_jacobs_logo} alt="" />
                <img src={tom_ford_logo} alt="" />
                <img src={versace_logo} alt="" />
            </div>
        </div>
    )
}

export default Hero