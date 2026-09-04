import React, { useState } from 'react';

const CounterMain = () => {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const disableFunc = () => {
    if (count <= 0) {
      return;
    }
    const newCount = count - 1;
    setCount(newCount);
    if (newCount <= 0) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }
  };
  const countReset = () => {
    const resetVal = 0;
    setCount(resetVal);
  };  
  return (
    <div className="bw_wrap_sec">
      <div className="bw_container">
        <h1>Counter App</h1>
        <div className="bw_card">
          <h2>Counter: {count}</h2>
          <div className="bw_btn_wrap">
            <button type="button" className="bw_btn bw_primary_btn" onClick={()=>{setCount(count + 1)}}>Increment</button>
            <button type="button" className="bw_btn bw_primary_btn" onClick={()=>{setCount(count + 5)}}>Increment By 5</button>
            <button type="button" className="bw_btn bw_danger_btn" onClick={countReset}>Reset</button>
            <button type="button" className={disabled ? "bw_btn bw_btn_success" : "bw_btn bw_btn_success bw_btn_disabled"} onClick={disableFunc}>Decrement</button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterMain;