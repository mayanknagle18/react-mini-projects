import React, { useState } from 'react';

const AgeCalculator = () => {
    const [age, setAge] = useState("");
    const [dob, setDob] = useState(null);
    const ageCalculate = () => {
        if(!dob) return;
        const dateofbirth = new Date(dob);
        const today = new Date();
        let years = today.getFullYear() - dateofbirth.getFullYear();
        let months = today.getMonth() - dateofbirth.getMonth();
        let days = today.getDate() - dateofbirth.getDate();
        if(days<0){
            months--;
            const prevMonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            )
            days = days+prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }
        setAge({
            years,
            months,
            days
        });
    };
    return (
        <div className="bw_wrap_sec">
            <div className="bw_container">
                <h1>Age Calculator</h1>
                <div className="bw_age_calculator"> 
                    {
                        age && (
                            <div className="">
                                <h4>Your Age</h4> 
                                <p>{age.years} Years {age.months} Months {age.days} Days</p>
                            </div>
                        )
                    }
                    <input type="date" name="" id="" className="bw_input" value={dob} onChange={(e)=>setDob(e.target.value)}/>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={ageCalculate}>Calculate Age</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgeCalculator;