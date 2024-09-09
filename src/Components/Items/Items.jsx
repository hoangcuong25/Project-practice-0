import React from "react";
import "./Items.css"

const Item = (props) => {
    return (
        <div className="item">
            <div className="item-img">
                <img src={props.image} alt="" />
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