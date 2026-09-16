import React, { useEffect, useState } from 'react';

const OnlineOfflineDetector = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        const onlineHandle = () => setIsOnline(true);
        const offlineHandle = () => setIsOnline(false);
        window.addEventListener("online", onlineHandle);
        window.addEventListener("offline", offlineHandle);
        return () => {
            window.removeEventListener("online", onlineHandle);
            window.removeEventListener("offline", offlineHandle);
        };
    }, []);

    return (
        <div className="bw_wrap_sec">
            <h1>Online Offline Detector</h1>
            <div className="bw_container">
                <div className="bw_online_offline_detector">
                    <h4>{isOnline ? "Online" : "Offline"}</h4>
                </div>
            </div>
        </div>
    );
};

export default OnlineOfflineDetector;