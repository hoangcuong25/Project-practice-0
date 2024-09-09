import React from "react";
import './Blogs.css'

const Blogs = (props) => {
    return (
        <div className="blogs">
            <div className="blogs-img">
                <img src={props.image} alt="" />
            </div>
            <div className="blogs-title">
                <h2>{props.title}</h2>
            </div>
            <div className="blogs-intro">
                <p>{props.intro}</p>
            </div>
        </div>
    )
}

export default Blogs