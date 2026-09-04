import React, { useState } from 'react';
import starFixed from "../../images/icons/star-fixed.png";
import starOutline from "../../images/icons/star-outline.png";

const StarRating = () => {
    const [star, setStar] = useState([false, false, false, false, false]); 

    const toggleStar = (index) => {
        setStar((prev) =>
            prev.map((item, i) => i <= index)
        );
    };
    return (
    <div className="bw_wrap_sec">
        <h1>Star Rating</h1>
        <div className="bw_star_rating">
            <div className="bw_star_wrap">
                {star.map((item, index) => (
                <button key={index} type="button" className={`bw_star_btn ${
                                item ? "bw_star_toggle" : ""
                            }`} onClick={() => toggleStar(index)}>
                    <img src={starFixed} alt="star fixed icon" className="bw_star_fixed"/>
                    <img src={starOutline} alt="star outline icon" className="bw_star_outline"/>
                </button>
                ))}
            </div> 
        </div>
    </div>
  )
}

export default StarRating;