import React, { useState } from 'react';

const TemperatureConverter = () => {
    const [celcius, setCelcius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");
    const celciusToFahrenheit = () => {
        const result = (Number(celcius) * 9 / 5) + 32;
        setFahrenheit(result);
    };
    const fahrenheitToCelcius = () => {
        const result = (Number(fahrenheit) - 32) * 5 / 9;
        setCelcius(result);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Temperature Converter</h1>
            <div className="bw_container">
                <div className="bw_temp_conv_card">
                    <div className="bw_title_input">
                        <h3>Celsius</h3>
                        <input type="text" className="bw_input" value={celcius} onChange={(e)=>setCelcius(e.target.value)}/>
                    </div>
                    <div className="bw_title_input">
                        <h3>Fahrenheit</h3>
                        <input type="text" className="bw_input" value={fahrenheit} onChange={(e)=>setFahrenheit(e.target.value)}/>
                    </div>
                    <div className="bw_title_value">
                        <h4>Celsius: <span>{celcius}</span></h4>
                        <h4>Fahrenheit: <span>{fahrenheit}</span></h4>
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={celciusToFahrenheit}>Celsius → Fahrenheit</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={fahrenheitToCelcius}>Fahrenheit → Celsius</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemperatureConverter;