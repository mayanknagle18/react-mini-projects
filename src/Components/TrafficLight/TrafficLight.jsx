import React, { useEffect, useState } from 'react';

const TrafficLight = () => {
    const [light, setLight] = useState(false);
    const randomLight = Math.floor(Math.random()*3)+1;
    useEffect(() => {
        const interval = setInterval(() => {
            const randomLight = Math.floor(Math.random() * 3) + 1;
            setLight(randomLight);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bw_wrap_sec">
            <h1>Traffic Light</h1>
            <div className="bw_container">
                <div className="bw_traffic_light">
                    <div className="bw_traffic_stand">
                        <div className="bw_traffic_circle_out">
                            <div className={`bw_traffic_circle_in ${light ===1 ? "bw_traffic_circle_red" : ""}`}>Red</div>
                        </div>
                        <div className="bw_traffic_circle_out">
                            <div className={`bw_traffic_circle_in ${light ===2 ? "bw_traffic_circle_yellow" : ""}`}>Yellow</div>
                        </div>
                        <div className="bw_traffic_circle_out">
                            <div className={`bw_traffic_circle_in ${light ===3 ? "bw_traffic_circle_green" : ""}`}>Green</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrafficLight;