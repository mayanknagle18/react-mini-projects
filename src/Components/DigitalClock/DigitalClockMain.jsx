import React, { useEffect, useState } from "react";

const DigitalClockMain = () => {
    const [currentData, setCurrentData] = useState(new Date());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentData(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="bw_wrap_sec">
            <h1>Digital Clock</h1>
            <div className="bw_container">
                <div className="bw_cont_wrap">
                    <div className="bw_clock_list">
                        <h4>Live Time:</h4>
                        <h5>{currentData.toLocaleTimeString()}</h5>
                    </div>
                    <div className="bw_clock_list">
                        <h4>Date:</h4>
                        <h5>{currentData.toLocaleDateString()}</h5>
                    </div>
                    <div className="bw_clock_list">
                        <h4>12 Hour Format</h4>
                        <h5>{currentData.toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true})}</h5>
                    </div>
                    <div className="bw_clock_list">
                        <h4>24 Hour Format</h4>
                        <h5>{currentData.getHours()}:{String(currentData.getMinutes()).padStart(2, "0")}:{String(currentData.getSeconds()).padStart(2, "0")}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalClockMain;