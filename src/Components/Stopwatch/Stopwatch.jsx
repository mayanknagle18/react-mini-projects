import React, { useRef, useState } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

     const startFunct = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
    };
    const stopFunct = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };
    const resetFunct = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    };
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return (
        <div className="bw_wrap_sec">
            <h1>Stopwatch</h1>
            <div className="bw_container">
                <div className="bw_stopwatch">
                    <h2>
                        {String(hours).padStart(2, "0")}:
                        {String(minutes).padStart(2, "0")}:
                        {String(seconds).padStart(2, "0")}
                    </h2>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={startFunct}>Start</button>
                        <button type="button" className="bw_btn bw_danger_btn" onClick={stopFunct}>Stop</button>
                        <button type="button" className="bw_btn bw_btn_success" onClick={resetFunct}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch;