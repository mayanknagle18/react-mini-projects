import React, { useState } from 'react';

const FormValidation = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim()===""||email.trim()===""||password===""||confirmPassword==="") {
            setError("Please fill all required fields.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Password doesn't match.");
            return;
        }
        setError("");
        alert("Form submitted successfully.");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Form Validation</h1>
            <div className="bw_container">
                <div className="bw_form_valid_wrap">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="bw_label_input">
                            <label htmlFor="name" className="bw_label">Name</label>
                            <input type="text" className="bw_input" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="bw_label_input">
                            <label htmlFor="email" className="bw_label">Email</label>
                            <input type="email" className="bw_input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="bw_label_input">
                            <label htmlFor="password" className="bw_label">Password</label>
                            <input type="password" className="bw_input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="bw_label_input">
                            <label htmlFor="confirm-password" className="bw_label">Confirm Password</label>
                            <input type="password" className="bw_input" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        </div> 
                        {
                            error && <p className="bw_error">{error}</p>
                        }
                        <div className="bw_btn_wrap">
                            <button type="submit" className="bw_btn bw_primary_btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormValidation;