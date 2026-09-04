import React, { useState } from 'react';

const BmiCalculator = () => {
    const [bmiValue, setBmiValue] = useState(0);
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const calculateValue = (e) => {
        e.preventDefault();
        const bmi = (weight*10000)/(height*height);
        setBmiValue(bmi);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>BMI Calculator</h1>
            <div className="bw_container">
                <div className="bw_bmi_card">
                    <h2>BMI: {bmiValue.toFixed(1)} Kg/m<sup>2</sup></h2>
                    <div className="bw_title_input">
                        <h3>Height</h3>
                        <input type="number" className="bw_input" value={height} onChange={(e)=>setHeight(e.target.value)}/>
                    </div>
                    <div className="bw_title_input">
                        <h3>Weight</h3>
                        <input type="number" className="bw_input" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                    </div> 
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={calculateValue}>Calculate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BmiCalculator;