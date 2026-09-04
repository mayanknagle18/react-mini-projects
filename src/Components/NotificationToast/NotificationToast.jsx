import {useState} from 'react';
import successIcon from "../../images/icons/success-icon.png";
import errorIcon from "../../images/icons/error-icon.png";
import warningIcon from "../../images/icons/warning-icon.png";
import infoIcon from "../../images/icons/info-icon.png";
import closeIcon from "../../images/icons/close-icon.png";

const NotificationToast = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [warning, setWarning] = useState(false);
    const [info, setInfo] = useState(false);

    const successHandle = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };
    const errorHandle = () => {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 3000);
    };
    const warningHandle = () => {
        setWarning(true);
        setTimeout(() => {
            setWarning(false);
        }, 3000);
    };
    const infoHandle = () => {
        setInfo(true);
        setTimeout(() => {
            setInfo(false);
        }, 3000);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Notification Toast</h1>
            <div className="bw_container">
                <div className="bw_notification_toast">
                    {
                        success && (
                            <div className="bw_notify bw_notify_success">
                                <div className="bw_notify_left">
                                    <div className="bw_notify_img_wrap">
                                        <img src={successIcon} className="bw_notify_img" alt="icon"/>
                                    </div>
                                    <h4>Success: This is a success toast.</h4>
                                </div>
                                <button type="button" className="bw_tostify_close" onClick={()=>setSuccess(false)}>
                                    <img src={closeIcon} className="bw_notify_close_img" alt="icon"/>
                                </button>
                            </div>
                        )
                    }
                    {
                        error && (
                            <div className="bw_notify bw_notify_error">
                                <div className="bw_notify_left">
                                    <div className="bw_notify_img_wrap">
                                        <img src={errorIcon} className="bw_notify_img" alt="icon"/>
                                    </div>
                                    <h4>Error: This is a error toast.</h4>
                                </div>
                                <button type="button" className="bw_tostify_close" onClick={()=>setError(false)}>
                                    <img src={closeIcon} className="bw_notify_close_img" alt="icon"/>
                                </button>
                            </div>
                        )
                    }
                    {
                        warning && (
                            <div className="bw_notify bw_notify_warning">
                                <div className="bw_notify_left">
                                    <div className="bw_notify_img_wrap">
                                        <img src={warningIcon} className="bw_notify_img" alt="icon"/>
                                    </div>
                                    <h4>Warning: This is a warning toast.</h4>
                                </div>
                                <button type="button" className="bw_tostify_close" onClick={()=>setWarning(false)}>
                                    <img src={closeIcon} className="bw_notify_close_img" alt="icon"/>
                                </button>
                            </div>
                        )
                    }
                    {
                        info && (
                            <div className="bw_notify bw_notify_info">
                                <div className="bw_notify_left">
                                    <div className="bw_notify_img_wrap">
                                        <img src={infoIcon} className="bw_notify_img" alt="icon"/>
                                    </div>
                                    <h4>Info: This is a info toast.</h4>
                                </div>
                                <button type="button" className="bw_tostify_close" onClick={()=>setInfo(false)}>
                                    <img src={closeIcon} className="bw_notify_close_img" alt="icon"/>
                                </button>
                            </div>
                        )
                    }
                    <div className="bw_btn_wrap">
                        <button type="button" className="bw_btn bw_primary_btn" onClick={successHandle}>Success</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={errorHandle}>Error</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={warningHandle}>Warning</button>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={infoHandle}>Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationToast;