import { useState } from 'react'

const KeyboardEventTracker = () => {
    const [keyEvent, setKeyEvent] = useState("");
    const eventHandle = (e) => {
        setKeyEvent(e.key);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Keyboard Event Tracker</h1>
            <div className="bw_container">
                <div className="bw_keyboard_wrap">
                    <h3>{keyEvent}</h3>
                    <div className="bw_keyboard_presskey">
                        <textarea name="" id="" rows={5} className="bw_input bw_textarea bw_scrollbar" placeholder="Press any key..." onKeyDown={eventHandle}></textarea>
                        <div className="bw_btn_wrap">
                            <button type="button" className="bw_btn bw_primary_btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyboardEventTracker;