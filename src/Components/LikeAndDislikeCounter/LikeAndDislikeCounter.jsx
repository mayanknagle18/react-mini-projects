import React, { useState } from 'react';
import likeBtnIcon from "../../images/icons/like.png";
import likedBtnIcon from "../../images/icons/liked.png";
import dislikeBtnIcon from "../../images/icons/dislike.png";
import dislikedBtnIcon from "../../images/icons/disliked.png";

const LikeAndDislikeCounter = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDisLikeCount] = useState(0);
    const likeHandleClick = () => { 
        setLikeCount(likeCount+1);
    }
    const dislikeHandleClick = () => { 
        setDisLikeCount(dislikeCount+1);
    }
  return (
    <div className="bw_wrap_sec">
        <h1>Like And Dislike Counter</h1>
        <div className="bw_container">
            <div className="bw_like_dislike_count">
                <div className="bw_likedislike_counter">
                    <h3>Likes: {likeCount}</h3>
                    <h3>Disikes: {dislikeCount}</h3>
                </div>
                <div className="bw_btn_wrap">
                    <button type="button" className={`${likeCount ? "bw_like_btn bw_liked_btn" : "bw_like_btn"}`} onClick={likeHandleClick}>
                        <img src={likeBtnIcon} alt="like icon" className="bw_like_btn_img"/>
                        <img src={likedBtnIcon} alt="like icon" className="bw_liked_btn_img"/>
                    </button>
                    <button type="button" className={`${dislikeCount ? "bw_dislike_btn bw_disliked_btn" : "bw_dislike_btn"}`} onClick={dislikeHandleClick}>
                        <img src={dislikeBtnIcon} alt="like icon" className="bw_dislike_btn_img"/>
                        <img src={dislikedBtnIcon} alt="like icon" className="bw_disliked_btn_img"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LikeAndDislikeCounter;