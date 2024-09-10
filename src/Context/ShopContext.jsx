import React, { createContext, useState } from "react";
import all_item from "../Components/Assets/all_item";

export const ShopContext = createContext(null);

const getCartDefault = () => {
    let cart = {}
    for (let index =0; index < all_item.length +1; index++){
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getCartDefault())

    const addToCart = (itemdId) => {
        setCartItems((prev) => ({...prev, [itemdId]: prev[itemdId] + 1}))
    }

    const removeFromCart = (itemdId) => {
        setCartItems((prev) => ({...prev, [itemdId]: prev[itemdId] - 1}))
    }
    
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(let items in cartItems){
            if(cartItems[items] > 0) {
                totalItem += cartItems[items]
            }
        }
        return totalItem
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_item.find((product) => product.id ===Number(item))
                totalAmount += itemInfo.new_price *cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {all_item, addToCart, removeFromCart, cartItems, getTotalCartItems, getTotalCartAmount};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider