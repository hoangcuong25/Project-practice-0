import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Items";
import './css/ShopCategory.css'
import new_item from "../Components/Assets/new_item"

const ShopCategory = (props) => {
    const { all_item } = useContext(ShopContext)
    return (
        <div className="shop-category">
            <img src={props.banner} alt="" />
            <div className="shop-category-items">
                {all_item.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} brands={item.brands} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                    }
                    else {
                        return null
                    }
                })}
            </div>
            <div className="new-item">
                <img src={props.banner1} alt="" />
                <h2 className="new-item-text">Discovery New Fragrances</h2>
                <div className="new-item-items">
                    {new_item.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} brands={item.brands} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                        }
                        else {
                            return null
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShopCategory