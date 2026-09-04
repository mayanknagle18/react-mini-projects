import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(false);
    const [password, setPassword] = useState("");

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+{}[]<>?/|";

    const generatePassword = () => {
        let chars = "";
        if (uppercase) {
            chars = chars + upper;
        }
        if (lowercase) {
            chars = chars + lower;
        }
        if (numbers) {
            chars = chars + number;
        }
        if (symbols) {
            chars = chars + symbol;
        }
        if (! chars) {
            alert("Select at least one option");
            return;
        }
        let pass = "";
        for(let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            pass = pass + chars[randomIndex];
        }
        setPassword(pass);
    };
    const copyPassword = () => {
        if (!password) {
            alert("Generate a password first!");
            return;
        }
        navigator.clipboard.writeText(password);
        alert("Password Copied!");
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Password Generator</h1>
            <div className="bw_container">
                <div className="bw_password_generator">
                    <div className="bw_input_btn_wrap">
                        <input type="text" className="bw_input" placeholder="Copy Password" readOnly value={password}/>
                        <button className="bw_btn bw_primary_btn" type="button" onClick={copyPassword}>Generate Copy</button>
                    </div>
                    <div className="bw_password_length">
                        <div className="bw_password_cont">
                            <h4>Password Length</h4>
                            <h4>{length}</h4>
                        </div>
                        <div className="bw_password_range">
                            <input type="range" className="bw_input bw_range_input" value={length} min={8} max={50} onChange={(e) => setLength(Number(e.target.value))}/>
                        </div>
                    </div>
                    <div className="bw_password_check">
                        <div className="bw_check_wrap">
                            <label className="bw_check_container">Include Uppercase
                                <input type="checkbox" checked={uppercase}  onChange={(e) => setUppercase(e.target.checked)}/>
                                <span className="bw_checkmark"></span>
                            </label>
                            <label className="bw_check_container">Include Lowercase
                                <input type="checkbox" checked={lowercase}  onChange={(e) => setLowercase(e.target.checked)}/>
                                <span className="bw_checkmark"></span>
                            </label>
                            <label className="bw_check_container">Include Numbers
                                <input type="checkbox" checked={numbers}  onChange={(e) => setNumbers(e.target.checked)}/>
                                <span className="bw_checkmark"></span>
                            </label>
                            <label className="bw_check_container">Include Symbols
                                <input type="checkbox" checked={symbols}  onChange={(e) => setSymbols(e.target.checked)}/>
                                <span className="bw_checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className="bw_btn_wrap">
                        <button className="bw_btn bw_primary_btn" type="button" onClick={generatePassword}>Generate Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator;