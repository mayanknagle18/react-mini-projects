import React, { useState } from 'react';

const MousePositionTrackers = () => {
  const [xaxis, setXaxis] = useState(0);
  const [yaxis, setYaxis] = useState(0); 
  const mouseHandle = (e) => {
    setXaxis(e.clientX);
    setYaxis(e.clientY);
  };
  return (
    <div className="bw_wrap_sec">
        <h1>Mouse Position Tracker</h1>
        <div className="bw_container">
            <div className="bw_mouse_position_track"> 
              <div className="bw_mousepointer" onMouseMove={mouseHandle}>
                <h4 className="bw_xaxis">X-axis: {xaxis}</h4>
                <h4 className="bw_yaxis">Y-axis: {yaxis}</h4>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default MousePositionTrackers;