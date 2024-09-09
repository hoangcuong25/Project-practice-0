import React, { createContext } from "react";
import all_item from "../Components/Assets/all_item";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_item};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider