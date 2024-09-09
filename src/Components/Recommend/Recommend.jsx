import React from "react";
import './Recommend.css'
import Item from "../Items/Items";
import recommend_item from "../Assets/recommned_item";

const Recommend = () => {
    return (
        <div className="recommend">
            <h2>RECOMMEND FOR YOU</h2>
            <div className="recommend-item">
                {recommend_item.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} brands={item.brands} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}

export default Recommend