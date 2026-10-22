import media from "./media";
import React, { useState } from 'react'
import { Link } from 'react-router';
import facebookIcon from '../../images/icons/facebook-icon.png';
import instagramIcon from '../../images/icons/instagram-icon.png';
import twitterIcon from '../../images/icons/twitter-icon.png';
import closeIcon from "../../images/icons/close.png"; 

const MediaGallery = () => { 
    const [selectedItem, setSelectedItem] = useState(null);
    const modalHandle = (item) => {
        setSelectedItem(item);
    };
    const closeModal = () => {
        setSelectedItem(null);
    }; 
    return (
        <>
        <div className="bw_wrap_sec">
            <h1>Media Gallery</h1>
            <div className="bw_container_full">
                <div className="bw_media_gallery">
                    {
                        media.map((item)=>(
                        <div className="bw_media_gallery_wrap" onClick={() => modalHandle(item)} key={item.id}>
                            <div className="bw_media_img_wrap">
                                <img src={item.image} alt={item.alt} />
                            </div>
                            <div className="bw_media_content_wrap">
                                <h4>{item.title}</h4>
                                <div className="bw_media_social_links">
                                    <Link to="/" className="bw_media_link">
                                        <img src={facebookIcon} alt="facebook icon" />
                                    </Link>
                                    <Link to="/" className="bw_media_link">
                                        <img src={instagramIcon} alt="instagram icon" />
                                    </Link>
                                    <Link to="/" className="bw_media_link">
                                        <img src={twitterIcon} alt="twitter icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div> 
        {
            selectedItem && (
                <div className="bw_gallery_modal_wrap bw_gallery_modal_wrap_open">
                    <div className="bw_modal_overlay" onClick={closeModal}></div>
                    <div className="bw_gallery_modal">
                        <div className="bw_gallery_modal_header">
                            <h3>{selectedItem.title}</h3>
                            <button type="button" className="bw_close_btn" onClick={closeModal}>
                                <img src={closeIcon} alt="close icon" />
                            </button>
                        </div>
                        <div className="bw_gallery_modal_body">
                            <div className="bw_gallery_modal_img">
                                <img src={selectedItem.image} alt={selectedItem.alt} />
                            </div>
                        </div> 
                    </div>
                </div> 
            )
        }
        </>
    )
}

export default MediaGallery