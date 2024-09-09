import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Items";

const ShopCategory = (props) => {
    const { all_item } = useContext(ShopContext)
    return (
        <div className="shop-category">
            <div className="shop-category-items">
                {all_item.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} brands={item.brands} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                    }
                    else{
                        return null
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCategory