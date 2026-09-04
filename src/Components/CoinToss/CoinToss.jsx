import React, { useState } from 'react';

const CoinToss = () => {
    const [random, setRandom] = useState("Head");
    const [isTossing, setIsTossing] = useState(false);
    const tossCoin = () => {
        if (isTossing) return;
        setIsTossing(true);
        const randomNum = Math.floor(Math.random() * 2) + 1;
        setTimeout(()=>{
            if (randomNum === 1) {
                setRandom("Head");
            }
            else {
                setRandom("Tail");
            }
            setIsTossing(false);
        }, 800)
    };
    return (
        <div className="bw_wrap_sec">
            <div className="bw_container">
                <h1>Coin Toss</h1>
                <div className="bw_coin_toss">
                    <div className={`bw_coin ${isTossing ? "tossing" : ""}`}>
                        {random}
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={tossCoin} disabled={isTossing}>{isTossing ? "Tossing..." : "Toss"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinToss;