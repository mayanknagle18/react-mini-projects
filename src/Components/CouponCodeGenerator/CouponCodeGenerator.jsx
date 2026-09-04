import React, { useState } from 'react';

const CouponCodeGenerator = () => {
    const [random, setRandom] = useState(null);
    const generateFunc = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "123456789";
        let coupon = "";
        for(let i = 0; i < 5; i++){
            coupon = coupon + letters[Math.floor(Math.random() * letters.length)];
        }
        for(let i = 0; i < 5; i++){
            coupon = coupon + numbers[Math.floor(Math.random() * numbers.length)];
        }
        setRandom(coupon);
    };
    const copyCoupon = () => {
        if(random) {
            navigator.clipboard.writeText(random);
        }
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Coupon Code Generator</h1> 
            <div className="bw_container">
                <div className="bw_coupon_code_wrap">
                    <div className="bw_coupon_code">
                        <h4>{random || "ABCDE12345"}</h4>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={copyCoupon}>Copy</button>
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={generateFunc}>Generate Coupon</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CouponCodeGenerator;