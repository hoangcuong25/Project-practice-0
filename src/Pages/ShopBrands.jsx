import React, { useContext } from "react";
import Item from "../Components/Items/Items";
import { ShopContext } from "../Context/ShopContext";
import banner from '../Components/Assets/banner_men.png'
import './css/ShopBrands.css'

const ShopBrands = (props) => {
    const { all_item } = useContext(ShopContext)
    return (
        <div className="shop-brands">
            <img src={banner} alt="" />
            <div className="shop-brands-items">
                {all_item.map((item, i) => {
                    if (props.brands === item.brands) {
                        return <Item key={i} id={item.id} name={item.name} brands={item.brands} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                    }
                    else {
                        return null
                    }
                })}
            </div>
        </div>
    )
}

export default ShopBrands