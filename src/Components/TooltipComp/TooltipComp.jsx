import React, { useState } from 'react';

const TooltipComp = () => {
    const [tooltip, setTooltip] = useState(true);
    const [tooltipHover, setTooltipHover] = useState(true);
    const handleTooltip = () => {
        setTooltip(!tooltip);
    };
    const handleMouseEnter = () => {
        setTooltipHover(false);
    };
    const handleMouseLeave = () => {
        setTooltipHover(true);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Tooltip</h1>
            <div className="bw_container">
                <div className="bw_tooltip_main">
                    <div className="bw_tooltip_wrap">
                        <button className="bw_btn bw_primary_btn" onClick={handleTooltip}>Tooltip Button</button>
                        <div className={`${tooltip ? "bw_tooltip bw_tooltip_none" : "bw_tooltip"}`}>
                            <span className="bw_tooltip_text">Tooltip Text</span>
                        </div>
                    </div>
                    <div className="bw_tooltip_wrap">
                        <button className="bw_btn bw_primary_btn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Tooltip Hover</button>
                        <div className={`${tooltipHover ? "bw_tooltip bw_tooltip_none" : "bw_tooltip"}`}>
                            <span className="bw_tooltip_text">Tooltip Hover Text</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TooltipComp;