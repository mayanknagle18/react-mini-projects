import React, { useState } from 'react';

const DiceRoller = () => {
    const [roll, setRoll] = useState(1);
    const [isRolling, setIsRolling] = useState(false);
    const rollChange = () => {
        setIsRolling(true);
        const rollNumber = Math.floor(Math.random()*6)+1;
        setTimeout(()=>{
            setRoll(rollNumber);
            setIsRolling(false);
        }, 600)
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Dice Roller</h1>
            <div className="bw_container">
                <div className="bw_dice_roll_wrap">
                    <div className={`bw_dice_card ${isRolling ? "bw_dice_rolling" : ""}`}>
                        <h3>{roll}</h3>
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={rollChange} disabled={isRolling}> {isRolling ? "Rolling..." : "Dice Roll"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiceRoller;