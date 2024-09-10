import React from "react";
import "./Items.css"
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <div className="item">
            <div className="item-img">
                <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
            </div>
            <div className="item-brands">
                <h2>{props.brands}</h2>
            </div>
            <div className="item-name">
                <p>{props.name}</p>
            </div>
            <div className="item-new-price">
                <p>New Price: ${props.new_price} </p>
            </div>
            <div className="item-old-price">
                <p>Old Price: ${props.old_price}</p>
            </div>
        </div>
    )
}

export default Item