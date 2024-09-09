import React from "react";
import Hero from "../Components/Hero/Hero";
import Offer from '../Components/Offer/Offer'
import Recommend from "../Components/Recommend/Recommend";
import LastestBlogs from "../Components/LastestBlogs/LastestBlogs";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import About from "../Components/About/About";


const Shop = () => {
    return (
        <div>
            <Hero/>
            <Offer/>
            <Recommend/>
            <LastestBlogs/>
            <NewsLetter/>
            <About/>
        </div>
    )
    
}

export default Shop