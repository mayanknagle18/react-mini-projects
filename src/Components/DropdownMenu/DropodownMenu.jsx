import React, { useState } from 'react';

const DropodownMenu = () => {
    const [dropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownFunc = () => {
        setIsDropdownOpen(!dropdownOpen);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Dropdown Menu</h1>
            <div className="bw_container">
                <div className={`${dropdownOpen ? "bw_dropdown_wrap active": "bw_dropdown_wrap"}`}>
                    <button type="button" className="bw_dropdown_btn" onClick={dropdownFunc}>Dropdown</button>
                    <div className="bw_dropdown_menu">
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropodownMenu;