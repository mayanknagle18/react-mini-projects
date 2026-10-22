import React, { useState } from 'react';
import { Link } from 'react-router';
import eyeOpenWhiteIcon from "../../images/icons/eye-open-white-icon.png";
import eyeCloseWhiteIcon from "../../images/icons/eye-close-white-icon.png";
const LoginComp = ({onSwitch}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handlePasswordShow = () => {
        setShowPassword(!showPassword);
    };
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
    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
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
            <h2>Login</h2>
            <form action=""onSubmit={handleSubmit}>
                <div className="bw_auth_container">
                    <div className="bw_label_input">
                        <label htmlFor="email" className="bw_label">Email</label>
                         <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bw_input"
                    />
                        {errors.email && (
                            <span className="bw_error">
                                {errors.email}
                            </span>
                        )}
                    </div>
                    <div className="bw_pass_wrap">
                        <label htmlFor="password" className="bw_label">Password</label>
                        <div className="bw_input_pass_wrap">
                           <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="bw_input"
                        />
                            <button type="button" className={`${showPassword ? "bw_pass_btn bw_pass_btn_close" : "bw_pass_btn"}`} onClick={handlePasswordShow}>
                                <img src={eyeOpenWhiteIcon} alt="eye open icon" className="bw_eye_open" />
                                <img src={eyeCloseWhiteIcon} alt="eye close icon" className="bw_eye_close" />
                            </button>
                        </div>
                         {errors.password && (
                            <span className="bw_error">
                                {errors.password}
                            </span>
                        )}
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="submit" className="bw_btn bw_primary_btn">Login</button>
                    </div>
                    <div className="bw_dont_have_acc">
                        <h5>Don't have an account?</h5>
                        <Link to={"#"} className="bw_back_to_login" onClick={(e)=>{e.preventDefault(); onSwitch()}}>Register</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginComp;