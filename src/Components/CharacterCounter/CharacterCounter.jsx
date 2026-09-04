import React, { useState } from 'react';

const CharacterCounter = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const counterGenerator = () => {
        setCount(text.length);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Character Counter</h1>
            <div className="bw_container">
                <div className="bw_character_counter">
                    <div className="bw_input_btn_wrap">
                        <input type="text" className="bw_input" value={text} onChange={(e)=>setText(e.target.value)}/>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={counterGenerator}>Counter</button>
                    </div>
                    <div className="bw_count_wrap">
                        <h4>{count}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCounter;