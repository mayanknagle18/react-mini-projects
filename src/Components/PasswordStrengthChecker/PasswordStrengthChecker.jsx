import { useState } from 'react';
import eyeOpenIcon from "../../images/icons/eye-open-icon.png";
import eyeCloseIcon from "../../images/icons/eye-close-icon.png";

const PasswordStrengthChecker = () => {
    const [value, setValue] = useState("");
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [passCheck, setPassCheck] = useState("");
    const inputHandle = (e) => {
        const password = e.target.value;
        setValue(password);
        let score = 0;
        if (password.length >= 8) {
            score++;
        }
        if (/[A-Z]/.test(password)) {
            score++;
        }
        if (/[a-z]/.test(password)) {
            score++;
        }
        if (/[0-9]/.test(password)) {
            score++;
        }
        if (/[^A-Za-z0-9]/.test(password)) {
            score++;
        }
        if (password.length === 0) {
            setPassCheck("");
        } 
        else if (score <= 2) {
            setPassCheck("This Password Is Weak.");
        } 
        else if (score <= 4) {
            setPassCheck("This Password Is Average.");
        }
        else {
            setPassCheck("This Password Is Strong.");
        }
    };
    const passBtnHandle = () => {
        setIsEyeOpen(!isEyeOpen);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Password Strength Checker</h1>
            <div className="bw_container">
                <div className="bw_password_strength_checker">
                    <div className="bw_pass_wrap">
                        <label htmlFor="password" className="bw_label">Password</label>
                        <div className="bw_input_pass_wrap">
                            <input type={`${isEyeOpen ? "text" : "password"}`} name="" value={value} id="password" placeholder="Enter Your Password" className="bw_input" onChange={inputHandle}/>
                            <button type="button" className={`${isEyeOpen ? "bw_pass_btn bw_pass_btn_close" : "bw_pass_btn"}`} onClick={passBtnHandle}>
                                <img src={eyeOpenIcon} alt="eye open icon" className="bw_eye_open"/>
                                <img src={eyeCloseIcon} alt="eye close icon" className="bw_eye_close"/>
                            </button>
                        </div> 
                        {passCheck && (
                            <p className={passCheck.includes("Weak") ? "bw_weak_password" : passCheck.includes("Average") ? "bw_average_password" : "bw_strong_password"}>{passCheck}</p>
                        )}
                    </div>
                    <button type="button" className="bw_btn bw_primary_btn">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default PasswordStrengthChecker;