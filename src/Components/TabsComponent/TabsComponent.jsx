import React, { useState } from 'react';

const TabsComponent = () => {
    const [click, setClick] = useState("tab1");
    return (
        <div className="bw_wrap_sec">
            <h1>Tabs Component</h1>
            <div className="bw_container">
                <div className="bw_tabs_wrap">
                    <div className="bw_tabs">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={()=> setClick("tab1")}>Tab 1</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={()=> setClick("tab2")}>Tab 2</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={()=> setClick("tab3")}>Tab 3</button>
                    </div>
                    <div className="bw_tab_content_wrap">
                        {
                            click === "tab1" && <div className={`bw_tab_content ${click === "tab1" ? "bw_tab_active" : ""}`}>
                                Tab 1 content
                            </div>
                        }
                        {
                            click === "tab2" && <div className={`bw_tab_content ${click === "tab2" ? "bw_tab_active" : ""}`}>
                                Tab 2 content
                            </div>
                        }
                        {
                            click === "tab3" && <div className={`bw_tab_content ${click === "tab3" ? "bw_tab_active" : ""}`}>
                                Tab 3 content
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TabsComponent;