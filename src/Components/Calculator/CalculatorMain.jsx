import React, { useState } from "react";

const CalculatorMain = () => {
    const [display, setDisplay] = useState("");
    const [isResult, setIsResult] = useState(false);
    const clearDisplay = () => {
        setDisplay("");
    };
    const backspace = () => {
        setDisplay((prev)=>prev.slice(0, -1));
    };
    const handleClick = (value) => { 
        if (
            isResult &&
            (/[0-9.]/.test(value))
        ) {
            setDisplay(value);
            setIsResult(false);
            return;
        }
        if (isResult && /[+\-*/]/.test(value)) {
            setDisplay((prev) => prev + value);
            setIsResult(false);
            return;
        }
        setDisplay((prev) => prev + value);
    };
    const calculateResult = () => {
        try {
            const result = eval(display);
            setDisplay(result.toString());
            setIsResult(true);
        } catch {
            setDisplay("Error");
            setIsResult(true);
        }
    };
    return (
        <div className="bw_wrap_sec">
            <div className="bw_container">
                <h1>Calculator App</h1>
                <div className="bw_calculator">
                    <div className="bw_calculator_wrap">
                        <input type="text" placeholder="0" className="bw_input bw_calculator_display" readOnly value={display}/>
                        <div className="bw_calculator_buttons">
                            <button type="button" className="bw_btn_clear" onClick={clearDisplay}>C</button>
                            <button type="button" className="bw_btn_back" onClick={backspace}>⌫</button>
                            <button type="button" className="bw_btn_operator" onClick={()=> handleClick("/")}>/</button>
                            <button type="button" className="bw_btn_operator" onClick={()=> handleClick("*")}>*</button>
                            <button type="button" onClick={()=> handleClick("7")}>7</button>
                            <button type="button" onClick={()=> handleClick("8")}>8</button>
                            <button type="button" onClick={()=> handleClick("9")}>9</button>
                            <button type="button" className="bw_btn_operator" onClick={()=> handleClick("-")}>-</button>
                            <button type="button" onClick={()=> handleClick("4")}>4</button>
                            <button type="button" onClick={()=> handleClick("5")}>5</button>
                            <button type="button" onClick={()=> handleClick("6")}>6</button>
                            <button type="button" className="bw_btn_operator" onClick={()=> handleClick("+")}>+</button>
                            <button type="button" onClick={()=> handleClick("1")}>1</button>
                            <button type="button" onClick={()=> handleClick("2")}>2</button>
                            <button type="button" onClick={()=> handleClick("3")}>3</button>
                            <button type="button" className="bw_btn_equal" rowSpan="2" onClick={calculateResult}>=</button>
                            <button type="button" className="bw_btn_zero" onClick={()=> handleClick("0")}>0</button>
                            <button type="button" onClick={()=> handleClick(".")}>.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculatorMain;