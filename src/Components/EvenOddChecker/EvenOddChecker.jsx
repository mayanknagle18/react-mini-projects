import React, { useState } from 'react';

const EvenOddChecker = () => {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");
    const checkerFunction = () => {
        if (number === "") {
            setResult("Please enter a number.");
            return;
        }
        if (number % 2 === 0) {
            setResult("Number is even.");
        } else {
            setResult("Number is odd.");
        }
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Even Odd Checker</h1>
            <div className="bw_container">
                <div className="bw_even_odd_checker">
                    <h3>{result}</h3>
                    <div className="bw_input_btn_wrap">
                        <input
                            type="number"
                            className="bw_input"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <button
                            type="button"
                            className="bw_btn bw_primary_btn"
                            onClick={checkerFunction}
                        >
                            Check
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvenOddChecker;