import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)
    return (
        <div className="product-display">
            <div className="product-display-left">
                <img src={product.image} alt="" />
            </div>
            <div className="product-display-right">
                <div className="product-display-brands">
                    <h2>{product.brands}</h2>
                </div>
                <div className="product-display-name">
                    {product.name}
                </div>
                <div className="product-display-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(69)</p>
                </div>
                <div className="product-display-description">
                    <p>This is description bla bla bla
                        This is description bla bla bla
                        This is description bla bla bla
                        This is description bla bla bla
                        This is description bla bla bla
                        This is description bla bla bla
                        This is description bla bla bla
                        This is description bla bla bla
                        This is description bla bla bla
                        This is description bla bla bla
                        This is description bla bla bla</p>
                </div>
                <div className="product-display-price">
                    <div className="product-display-new-price">
                        ${product.new_price}
                    </div>
                    <div className="product-display-old-price">
                        ${product.old_price}
                    </div>
                </div>
                <div className="product-display-btn">
                    <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay