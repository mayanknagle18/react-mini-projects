import { useState } from 'react';
import cartIcon from "../../images/icons/cart-icon.png";
import crossIcon from "../../images/icons/cross-icon.png";  
import products from "./product.json";
const ShoppingCart = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const menuOpenHandle = () => {
        setMenuOpen(!menuOpen);
    };
    const cartBtnOpen = () => {
        setSidebarOpen(true);
        document.body.classList.add("bw_sidebar_open");
    };
    const cartBtnClose = () => {
        setSidebarOpen(false);
        document.body.classList.remove("bw_sidebar_open");
    };
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find(
                (item) => item.id === product.id
            );
            if (existingProduct) {
                return prevItems.map((item) =>
                    item.id === product.id ? {
                        ...item,
                        quantity: item.quantity + 1,
                    } : item
                );
            }
            return [
                ...prevItems,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };
    const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
            )
        );
    };
    const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id ? {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                    : item
                )
            .filter((item) => item.quantity > 0)
        );
    };
    const removeFromCart = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    return (
        <>
            <div className={`${sidebarOpen ? "bw_cart_sidebar" : "bw_cart_sidebar bw_cart_sidebar_active"}`}>
                <div className="bw_cart_header">
                    <h4>Cart</h4>
                    <button type="button" className="bw_cart_close" onClick={cartBtnClose}>
                        <img src={crossIcon} alt="cross icon" />
                    </button>
                </div>
                <div className="bw_cart_body">
                    {cartItems.length === 0 ? (
                        <p className="bw_empty_cart">
                            Your cart is empty.
                        </p>
                        ) : (
                            <>
                            <ul className="bw_cart_prod_list_wrap bw_scrollbar">
                                    {cartItems.map((item) => (
                                    <li key={item.id}>
                                        <div className="bw_cart_prod_list">
                                            <div className="bw_cart_prod_imgwrap">
                                                <img src={item.images[0]} alt="cart prod img" />
                                            </div>
                                            <div className="bw_cart_prod_right">
                                                <h4>{item.title}</h4>
                                                <div className="bw_cart_prod_shopping">
                                                    <h4>$ {( item.price * item.quantity ).toFixed(2)}</h4>
                                                    <div className="bw_cart_prod_btn_wrap">
                                                        <button type="button" className="bw_cart_prod_btn" onClick={()=>decreaseQuantity(item.id)}>-</button>
                                                        <span className="bw_cart_prod_num">{item.quantity}</span>
                                                        <button type="button" className="bw_cart_prod_btn" onClick={()=>increaseQuantity(item.id)}>+</button>
                                                    </div>
                                                    <button type="button" className="bw_cart_prod_remove" onClick={() =>removeFromCart(item.id)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    ))}
                            </ul>
                            <div className="bw_cart_total">
                                <h4>Total</h4>
                                <h4>${cartTotal.toFixed(2)}</h4>
                            </div>
                            </>
                        )
                    }
                </div>
            </div> 
            <header className="bw_header">
                <a href="/" className="bw_header_logo">
                    <span>Order Bag</span>
                </a>
                <div className={`${menuOpen ? "bw_header_menus" : "bw_header_menus bw_header_menus_active"}`}>
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
                    <button type="button" className="bw_cart_btn" onClick={cartBtnOpen}>
                        <img src={cartIcon} alt="cart icon" />
                        <span className="bw_cart_count">{cartCount}</span>
                    </button>
                    <div className="bw_header_hamburger" onClick={menuOpenHandle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> 
                </div> 
            </header>
            <div className="bw_wrap_sec bw_shopping_cart_sec">
                <h1>Shopping Cart</h1>
                <div className="bw_container">
                    <div className="bw_shopping_cart">
                        {
                            products.products.map((product)=>(         
                                <div className="bw_shopping_card" key={product.id}>
                                    <div className="bw_shopping_left">
                                        <div className="bw_shopping_img">
                                            <img src={product.images[0]} alt="shopping img" />
                                        </div>
                                        <div className="bw_shopping_top">
                                            <h4>{product.title}</h4>
                                            <h4>${product.price}</h4>
                                        </div>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="bw_btn_wrap_right">
                                        <button type="button" className="bw_btn bw_primary_btn" onClick={()=>addToCart(product)}>Add to Cart</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>    
            <div className="bw_backdrop"></div>
        </>
    )
}

export default ShoppingCart;