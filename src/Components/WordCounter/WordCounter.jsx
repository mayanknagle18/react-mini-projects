import React, { useState } from 'react';

const WordCounter = () => {
    const MAX_LIMIT = 200;
    const [text, setText] = useState("");
    const handleChange = (e) => {
        const value = e.target.value;
        if(value.length<=MAX_LIMIT){
            setText(value);
        }
    };
    const clearCounter = () => {
        setText("")
    };
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s/).length; 
    return (
        <div className="bw_wrap_sec">
            <h1>Word Counter</h1>
            <div className="bw_container">
                <div className="bw_word_counter">
                    <div className="bw_word_wrap">
                        <textarea name="" id="" className="bw_input bw_textarea bw_scrollbar" rows={5} value={text} onChange={handleChange}></textarea>
                    </div>
                    <div className="bw_word_text">
                        <h4>Characters: {text.length}/{MAX_LIMIT}</h4>
                        <h4>Words: {wordCount}</h4>
                        <h4>Remaining: {MAX_LIMIT-text.length}</h4>
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={clearCounter}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordCounter;