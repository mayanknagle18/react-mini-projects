import { useState } from 'react'

const CharacterFrequencyCounter = () => {
    const [count, setCount] = useState({});
    const [val, setVal] = useState("");
    const frequencyCount = () => {
        let countNum = {}; 
        for (let i = 0; i< val.length; i++) {
            let char = val[i];
            countNum[char] = (countNum[char] || 0) + 1;
        }
        setCount(countNum);
    };
    const handleChange = (e) => {
        setVal(e.target.value);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Character Frequency Counter</h1> 
            <div className="bw_container">
                <div className="bw_character_frequency_counter">
                    <div className="bw_input_btn_wrap">
                        <input type="text" className="bw_input" placeholder="Enter Text" value={val} onChange={handleChange}/>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={frequencyCount}>Count</button>
                    </div>
                    <div>
                        {Object.entries(count).map(([char, frequency]) => (
                            <p key={char}>
                                {char}: {frequency}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterFrequencyCounter;