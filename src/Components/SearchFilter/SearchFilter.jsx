import React, { useState } from 'react';

const SearchFilter = () => { 
    const [valProduct, setValProduct] = useState("");
    const [filterProducts, setFilterProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const data = [
        {
            id: 1,
            title: "Wireless Headphones",
            price: 59,
            description: "High-quality wireless headphones with clear sound."
        },
        {
            id: 2,
            title: "Smart Watch",
            price: 89,
            description: "A stylish smartwatch with fitness tracking features."
        },
        {
            id: 3,
            title: "Bluetooth Speaker",
            price: 45,
            description: "Portable speaker with powerful sound and long battery life."
        },
        {
            id: 4,
            title: "Gaming Mouse",
            price: 35,
            description: "Ergonomic gaming mouse with adjustable DPI."
        },
        {
            id: 5,
            title: "Mechanical Keyboard",
            price: 75,
            description: "RGB mechanical keyboard designed for gaming and typing."
        },
        {
            id: 6,
            title: "Laptop Stand",
            price: 29,
            description: "Adjustable laptop stand for a comfortable working position."
        },
        {
            id: 7,
            title: "USB-C Hub",
            price: 39,
            description: "Multi-port USB-C hub with HDMI and USB ports."
        },
        {
            id: 8,
            title: "Power Bank",
            price: 49,
            description: "Fast-charging power bank with high battery capacity."
        },
        {
            id: 9,
            title: "Webcam",
            price: 69,
            description: "Full HD webcam suitable for meetings and streaming."
        },
        {
            id: 10,
            title: "Wireless Charger",
            price: 25,
            description: "Fast wireless charger compatible with supported smartphones."
        }
    ];
    const handleChange = (e) => {
        setValProduct(e.target.value);
    };
    const searchChange = () => {
        const filteredData = data.filter((item) =>
            item.title.toLowerCase().includes(valProduct.toLowerCase())
        );
        setFilterProducts(filteredData);
    };
    const handleSort = (e) => {
        setSortOrder(e.target.value);
    };
    const products = filterProducts.length > 0
    ? filterProducts
    : data;
    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === "az") {
            return a.title.localeCompare(b.title);
        }
        if (sortOrder === "za") {
            return b.title.localeCompare(a.title);
        }
        return 0;
    });
    return (
        <div className="bw_wrap_sec">
            <h1>Search Filter</h1>
            <div className="bw_container">
                {/* Product list
                Search products
                Filter by name */}
                <div className="bw_search_filter">
                    <div className="bw_search_wrap">
                        <div className="bw_search_input_wrap">
                            <input type="text" className="bw_input" placeholder="Search products..." value={valProduct} onChange={handleChange} />
                            <button type="button" className="bw_btn bw_primary_btn" onClick={searchChange}>Search</button>
                        </div>
                        <div className="bw_filter_wrap">
                            <select name="" id="" className="bw_input bw_select" value={sortOrder} onChange={handleSort}>
                                <option value="az">A-Z</option>
                                <option value="za">Z-A</option>
                            </select>
                        </div>
                    </div>
                    <div className="bw_product_list">
                        {
                            sortedProducts.map((item) => (
                                <div className="bw_product_card" key={item.id}>
                                    <h4>{item.title}</h4>
                                    <h5>${item.price}</h5>
                                    <p>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFilter;