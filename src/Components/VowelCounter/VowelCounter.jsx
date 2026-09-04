import React, { useState } from 'react';

const VowelCounter = () => {
    const [val, setVal] = useState("");
    const [vowels, setVowels] = useState(0);
    // vowels - a e i o u

    const vowelCount = () => {
        let count = 0; 
        for(const char of val){
            if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
                count++;
            } 
        }
        return setVowels(count);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Vowel Counter</h1>
            <div className="bw_container">
                <div className="bw_vowel_counter">
                    <h3>Vowel Count: {vowels}</h3>
                    <input type="text" className="bw_input" value={val} onChange={(e)=>setVal(e.target.value)}/>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={vowelCount}>Count Vowel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VowelCounter;