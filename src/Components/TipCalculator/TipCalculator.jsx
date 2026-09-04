import React, { useState } from 'react';

const TipCalculator = () => {
    const [price, setPrice] = useState();
    const [tip, setTip] = useState();
    const [numberOfPeople, setNumberOfPeople] = useState();
    const [tipAmount, setTipAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);
    const calculateTip = () => {
        const priceVal = Number(price);
        const tipVal = Number(tip);
        const peopleVal = Number(numberOfPeople);
        if (priceVal <= 0 || tipVal < 0 || peopleVal <= 0) {
            return;
        }
        const tipAmountVal = (priceVal * tipVal) / 100;
        const totalAmountVal = priceVal + tipAmountVal;
        const tipPerPersonVal = tipAmountVal / peopleVal;
        const totalPerPersonVal = totalAmountVal / peopleVal;
        setTipAmount(tipAmountVal);
        setTotalAmount(totalAmountVal);
        setTipPerPerson(tipPerPersonVal);
        setTotalPerPerson(totalPerPersonVal);
    };
    const clearTip = () => {
        setPrice("");
        setTip("");
        setNumberOfPeople("");
        setTipAmount(0);
        setTotalAmount(0);
        setTipPerPerson(0);
        setTotalPerPerson(0);
    };
    return (
        <div className="bw_wrap_sec">
            <div className="bw_container">
                <h1>Tip Calculator</h1>
                <div className="bw_tip_calculator">
                    <table className="bw_tip_data">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Tip:
                                </td>
                                <td>
                                    {tipAmount.toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Total Amount:
                                </td>
                                <td>
                                    {totalAmount.toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Tip Per Person:
                                </td>
                                <td>
                                    {tipPerPerson.toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Total Per Person:
                                </td>
                                <td>
                                    {totalPerPerson.toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="bw_tip_content">
                        <div className="bw_tip_cont_wrap">
                            <h5>Price</h5>
                            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} className="bw_input"/>
                        </div>
                        <div className="bw_tip_cont_wrap">
                            <h5>Tip %</h5>
                            <input type="text" value={tip} onChange={(e)=>setTip(e.target.value)} className="bw_input"/>
                        </div>
                        <div className="bw_tip_cont_wrap">
                            <h5>Number of People</h5>
                            <input type="text" value={numberOfPeople} onChange={(e)=>setNumberOfPeople(e.target.value)} className="bw_input"/>
                        </div>
                        <div className="bw_btn_wrap">
                            <button className="bw_btn bw_primary_btn" type="button" onClick={calculateTip}>Calculate</button>
                            <button className="bw_btn bw_danger_btn" type="button" onClick={clearTip}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TipCalculator;