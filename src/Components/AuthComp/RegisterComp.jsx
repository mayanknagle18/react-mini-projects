import React, { useState } from 'react';
import { Link } from 'react-router'; 
import eyeOpenWhiteIcon from "../../images/icons/eye-open-white-icon.png";
import eyeCloseWhiteIcon from "../../images/icons/eye-close-white-icon.png";
const RegisterComp = ({onSwitch}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handlePasswordShow = () => {
        setShowPassword(!showPassword);
    };
    const handleConfirmPasswordShow = () => {
        setShowConfirmPassword(!showConfirmPassword)
    };
    return (
        <div className="bw_auth_wrap">
            <h2>Register</h2>
            <div className="bw_auth_container">
                <div className="bw_label_input">
                    <label htmlFor="email" className="bw_label">Email</label>
                    <input type="email" className="bw_input"/>
                </div>
                <div className="bw_pass_wrap">
                    <label htmlFor="password" className="bw_label">Password</label>
                    <div className="bw_input_pass_wrap">
                        <input type={`${showPassword ? "text" : "password"}`} className="bw_input"/>
                        <button type="button" className={`${showPassword? "bw_pass_btn bw_pass_btn_close": "bw_pass_btn"}`} onClick={handlePasswordShow}>
                            <img src={eyeOpenWhiteIcon} alt="eye open icon" className="bw_eye_open"/>
                            <img src={eyeCloseWhiteIcon} alt="eye close icon" className="bw_eye_close"/>
                        </button>
                    </div>
                </div>
                <div className="bw_pass_wrap">
                    <label htmlFor="password" className="bw_label">Password</label>
                    <div className="bw_input_pass_wrap">
                        <input type={`${showConfirmPassword ? "text" : "password"}`} className="bw_input"/>
                        <button type="button" className={`${showConfirmPassword? "bw_pass_btn bw_pass_btn_close": "bw_pass_btn"}`} onClick={handleConfirmPasswordShow}>
                            <img src={eyeOpenWhiteIcon} alt="eye open icon" className="bw_eye_open"/>
                            <img src={eyeCloseWhiteIcon} alt="eye close icon" className="bw_eye_close"/>
                        </button>
                    </div>
                </div>
                <div className="bw_btn_wrap">
                    <button type="submit" className="bw_btn bw_primary_btn">Register</button>
                </div>
                <div className="bw_dont_have_acc">
                    <h5>Back to Login?</h5>
                    <Link to={"#"} className="bw_back_to_login" onClick={(e)=>{e.preventDefault(); onSwitch()}}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterComp;