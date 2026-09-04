import React, { useState } from 'react';
import closeIcon from "../../images/icons/close.png";

const ModalPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const openModal = () => {
        setIsClosing(false);
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300);
    };
    return (
        <>
            <div className="bw_wrap_sec">
                <h1>Modal Popup</h1>
                <div className="bw_container">
                    <div className="bw_modal_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={openModal}>Open Modal</button>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className={`bw_modal_wrap ${isClosing ? "closing" : ""}`}>
                        <div className="bw_modal_overlay" onClick={closeModal}></div>
                        <div className="bw_modal">
                            <div className="bw_modal_header">
                                <h3>Title</h3>
                                <button type="button" className={`${isOpen ? "bw_close_btn bw_close_modal" : "bw_close_btn"}`} onClick={closeModal}>
                                    <img src={closeIcon} alt="close icon" />
                                </button>
                            </div>
                            <div className="bw_modal_body">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aperiam maiores neque suscipit dolorem, nisi laboriosam ad earum autem perspiciatis, ducimus reiciendis,</p>
                            </div>
                            <div className="bw_modal_footer">
                                <button type="button" className="bw_btn bw_btn_link_primary">Back</button>
                                <button type="button" className="bw_btn bw_primary_btn">Next</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ModalPopup;