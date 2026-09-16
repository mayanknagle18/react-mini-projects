import React from 'react';
import cartIcon from "../../images/icons/cart-icon.png";
const ShoppingCart = () => {
  return (
    <>
        <header className="bw_header">
            <a href="/" className="bw_header_logo">
                <span>Shopping Cart</span>
            </a>
            <div className="bw_header_menus">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="bw_header_cart">
                <button type="button" className="bw_cart_btn">
                    <img src={cartIcon} alt="cart icon" />
                </button>
            </div>
        </header>
        <div className="bw_wrap_sec">
            <div className="bw_container">
                <div className="bw_shopping_cart">

                </div>
            </div>
        </div>   
    </>
  )
}

export default ShoppingCart;