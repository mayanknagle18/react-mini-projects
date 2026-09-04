import { useState } from 'react';

const TextCaseConverter = () => {
    const [val, setVal] = useState();
    const sentenceChange = (e) => {
        setVal(e.target.value);
    };
    const lowercaseLetter = () => {
        let lowerVal = val.toLowerCase();
        setVal(lowerVal);
    }
    const uppercaseLetter = () => {
        let upperVal = val.toUpperCase();
        setVal(upperVal);
    };
    const capitalizeLetter = () => {
        let capitalizeVal = val.charAt(0).toUpperCase() + val.slice(1);
        setVal(capitalizeVal);
    };
    const sentencecaseLetter = () => {
        let sentenceCaseVal = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        setVal(sentenceCaseVal);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Text Case Converter</h1>
            <div className="bw_container">
                <div className="bw_text_case_converter">
                    <h3>{val}</h3>
                    <div className="bw_text_area_wrap">
                        <textarea name="" id="" rows={4} className="bw_input bw_textarea" placeholder="Write Your Sentence..." onChange={sentenceChange} value={val}></textarea>
                    </div>
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={lowercaseLetter}>Lowercase</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={uppercaseLetter}>Uppercase</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={capitalizeLetter}>Capitalize</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={sentencecaseLetter}>Sentence Case</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextCaseConverter;