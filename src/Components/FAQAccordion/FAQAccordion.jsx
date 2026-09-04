import React, { useState } from 'react';
import dropdownArrowIcon from "../../images/icons/downdrop_arrow_icon.svg";

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const faqData = [
        {
            title: "Item 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, autem?",
        },
        {
            title: "Item 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, autem?",
        },
        {
            title: "Item 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, autem?",
        },
    ];

    return (
        <div className="bw_wrap_sec">
            <h1>FAQ Accordion</h1>
            <div className="bw_container">
                <div className="bw_faq_wrap">
                    <div className="bw_faq_accordion">
                       {
                            faqData.map((item, index)=>(
                                <div className="bw_faq_acc_item" key={index}>
                                    <div className="bw_faq_acc_head">
                                        <button className="bw_faq_acc_btn" type="button" onClick={()=>handleAccordion(index)}>
                                            {item.title}
                                            <img src={dropdownArrowIcon} alt="arrow icon" width={16} height={16} className={activeIndex === index ? "rotate" : ""}/>
                                        </button>
                                    </div>
                                    <div className={`bw_faq_acc_body ${activeIndex === index ? "" : "bw_faq_acc_body_open"}`}>
                                        <p>{item.content}</p>
                                    </div>
                                </div>  
                            ))
                       }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQAccordion;