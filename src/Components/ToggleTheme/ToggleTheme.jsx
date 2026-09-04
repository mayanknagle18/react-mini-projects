import React, { useState } from 'react';

const ToggleTheme = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        document.body.classList.toggle("bw_dark_theme");
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Toggle Theme</h1>
            <div className="bw_container">
                <div className="bw_toggle_theme">
                    <button type="button" className="bw_btn bw_primary_btn" onClick={toggleTheme}>Toggle Theme</button>
                </div>
            </div>
        </div>
    )
}

export default ToggleTheme;