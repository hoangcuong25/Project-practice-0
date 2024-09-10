import React, { useContext } from "react";
import './css/Product.css'
import { useParams } from "react-router-dom";
import { ShopContext } from '../Context/ShopContext'
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
    const { all_item } = useContext(ShopContext)
    const { productId } = useParams()
    const product = all_item.find((e) => e.id === Number(productId))

    return (
        <div className="product">
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
        </div>
    )
}

export default Product