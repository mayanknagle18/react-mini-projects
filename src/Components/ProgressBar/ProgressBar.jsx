import React, { useState } from 'react';

const ProgressBar = () => {
    const [progressVal, setProgressVal] = useState(0);
    const addProgress = () => {
        setProgressVal(prev => Math.min(100, prev + 1));
    };
    const subtractProgress = () => {
        setProgressVal(prev => Math.max(0, prev - 1));
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Progress Bar</h1>
            <div className="bw_container">
                <div className="bw_progress_card">
                    <div className="bw_progress_wrap">
                        <div className="bw_progress_bar">
                            <span className="bw_progress_fill" style={{width: `${progressVal}%`}}></span>
                        </div>
                        <span className="bw_progress_text">{progressVal}%</span>
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_danger_btn" onClick={subtractProgress}>Subtract</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={addProgress}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;