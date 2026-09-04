import React, { useState } from 'react';

const ColorPaletteGenerator = () => {
    const [random, setRandom] = useState(null);
    const generateFunc = () => {
        const colorName = "0123456789ABCDEF"; 
        let colorPossible = "";
        for(let i= 0; i< 6; i++){
            colorPossible = colorPossible + colorName[Math.floor(Math.random() * colorName.length)];
        } 
        setRandom(`#${colorPossible}`);
    };
    const copyColor = () => {
        if(random){
            navigator.clipboard.writeText(random);
        }
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Color Palette Generator</h1>
            <div className="bw_container">
                <div className="bw_color_palette_generator">
                    <div className="bw_color_palette_wrap">
                        <h4>{random || "#ABC123"}</h4>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={copyColor}>Copy</button>
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={generateFunc}>Generate Color</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPaletteGenerator;