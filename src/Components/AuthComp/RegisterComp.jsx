import React, { useState } from 'react';
import { Link } from 'react-router'; 
import eyeOpenWhiteIcon from "../../images/icons/eye-open-white-icon.png";
import eyeCloseWhiteIcon from "../../images/icons/eye-close-white-icon.png";
const RegisterComp = ({onSwitch}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        setpassword: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ""
        });
    };
    const handlePasswordShow = () => {
        setShowPassword(!showPassword);
    };
    const handleConfirmPasswordShow = () => {
        setShowConfirmPassword(!showConfirmPassword)
    };
    
    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        if (!formData.setpassword) {
            newErrors.setpassword = "Confirm password is required";
        } else if (formData.setpassword.length < 6) {
            newErrors.setpassword = "Password must be at least 6 characters";
        } else if (formData.password !== formData.setpassword) {
            newErrors.setpassword = "Passwords do not match";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            return;
        }
        console.log("Login Data:", formData);
    };
    return (
        <div className="bw_auth_wrap">
            <h2>Register</h2>
            <form action=""onSubmit={handleSubmit}>
                <div className="bw_auth_container">
                    <div className="bw_label_input">
                        <label htmlFor="email" className="bw_label">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bw_input"/>
                        {errors.email && (
                            <span className="bw_error">
                                {errors.email}
                            </span>
                        )}
                    </div>
                    <div className="bw_pass_wrap">
                        <label htmlFor="password" className="bw_label">Password</label>
                        <div className="bw_input_pass_wrap">
                            <input type={`${showPassword ? "text" : "password"}`} id="password" name="password" onChange={handleChange} value={formData.password} className="bw_input"/>
                            <button type="button" className={`${showPassword? "bw_pass_btn bw_pass_btn_close": "bw_pass_btn"}`} onClick={handlePasswordShow}>
                                <img src={eyeOpenWhiteIcon} alt="eye open icon" className="bw_eye_open"/>
                                <img src={eyeCloseWhiteIcon} alt="eye close icon" className="bw_eye_close"/>
                            </button>
                        </div>
                        {errors.password && (
                            <span className="bw_error">
                                {errors.password}
                            </span>
                        )}
                    </div>
                    <div className="bw_pass_wrap">
                        <label htmlFor="setpassword" className="bw_label">Password</label>
                        <div className="bw_input_pass_wrap">
                            <input type={`${showConfirmPassword ? "text" : "password"}`} id="setpassword" name="setpassword" onChange={handleChange} value={formData.setpassword} className="bw_input"/>
                            <button type="button" className={`${showConfirmPassword? "bw_pass_btn bw_pass_btn_close": "bw_pass_btn"}`} onClick={handleConfirmPasswordShow}  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}>
                                <img src={eyeOpenWhiteIcon} alt="eye open icon" className="bw_eye_open"/>
                                <img src={eyeCloseWhiteIcon} alt="eye close icon" className="bw_eye_close"/>
                            </button>
                        </div>
                        {errors.setpassword && (
                            <span className="bw_error">
                                {errors.setpassword}
                            </span>
                        )}
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="submit" className="bw_btn bw_primary_btn">Register</button>
                    </div>
                    <div className="bw_dont_have_acc">
                        <h5>Back to Login?</h5>
                        <Link to={"#"} className="bw_back_to_login" onClick={(e)=>{e.preventDefault(); onSwitch()}}>Login</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterComp;