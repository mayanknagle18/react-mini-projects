import React from "react";
import "../../App.css";

const ColorChangerMain = () => { 
    const changeColorFunOne = () => {
        const bgColorOne = document.getElementsByClassName("bw_color_changer_box_one")[0];
        bgColorOne.style.backgroundColor = "red";
    }
    const changeColorFunTwo = () => {
        const bgColorOne = document.getElementsByClassName("bw_color_changer_box_two")[0];
        bgColorOne.style.backgroundColor = "blue";
    }
    const changeColorFunThree = () => {
        const bgColorOne = document.getElementsByClassName("bw_color_changer_box_three")[0];
        bgColorOne.style.backgroundColor = "green";
    }
    const changeColorBlackFun = () => {
        const boxesLength = document.getElementsByClassName("bw_color_changer_box");
        for(let i = 0; i<boxesLength.length; i++){
            boxesLength[i].style.backgroundColor = "black";
        }
    };
    const changeColorResetFun = () => {
        const boxesLength = document.getElementsByClassName("bw_color_changer_box");
        for(let i = 0; i<boxesLength.length; i++){
            boxesLength[i].style.backgroundColor = "";
        }
    };
    return(
        <div className="bw_wrap_sec">
            <h1>Color Changer App</h1>
            <div className="bw_container">
                <div className="bw_card">
                    <div className="bw_color_changer_box_wrap">
                        <div className="bw_color_changer_box bw_color_changer_box_one" onClick={changeColorFunOne}></div>
                        <div className="bw_color_changer_box bw_color_changer_box_two" onClick={changeColorFunTwo}></div>
                        <div className="bw_color_changer_box bw_color_changer_box_three" onClick={changeColorFunThree}></div>
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_danger_btn" onClick={changeColorResetFun}>Reset</button>
                        <button type="button" className="bw_btn bw_dark_btn" onClick={changeColorBlackFun}>Black</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorChangerMain;