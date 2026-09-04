import React, { useState } from 'react';
import galleryImage1 from "../../images/thumbnails/nature_img1.jpg";
import galleryImage2 from "../../images/thumbnails/nature_img2.jpg";
import galleryImage3 from "../../images/thumbnails/nature_img3.jpg";
import galleryImage4 from "../../images/thumbnails/nature_img4.jpg";
import galleryImage5 from "../../images/thumbnails/nature_img5.jpg";
import galleryImage6 from "../../images/thumbnails/nature_img6.jpg";

const ImageGallery = () => {
    const [image, setImage] = useState(0);
    const images = [
        {
            id: 1,
            img: galleryImage1,
        },
        {
            id: 2,
            img: galleryImage2,
        },
        {
            id: 3,
            img: galleryImage3,
        },
        {
            id: 4,
            img: galleryImage4,
        },
        {
            id: 5,
            img: galleryImage5,
        },
        {
            id: 6,
            img: galleryImage6,
        },
    ];
    const previousHandle = () => {
        setImage((prev)=>{
            if(prev===0){
                return images.length - 1;
            }
            return prev - 1;
        });
    };
    const nextHandle = () => {
        setImage((prev)=>{
            if(prev===images.length - 1){
                return 0;
            }
            return prev + 1;
        });
    };
    return (
        <div className="bw_wrap_sec">
            <div className="bw_container">
                <h1>Image Gallery</h1>
                <div className="bw_image_gallery_wrap"> 
                    <div className="bw_image_wrap">
                        <img src={images[image].img} alt={`gallery img ${images[image].id}`}/>
                    </div>
                    <div className="bw_img_thumbnails_wrap">
                        {
                            images.map((item, index)=>(
                                <button type="button" className="bw_thumb_btn" key={item} onClick={() => setImage(index)}>
                                    <img src={images[index].img} alt={`thumbnail ${images[index].id}`} />
                                </button>
                            ))
                        }
                    </div>
                    <div className="bw_btn_wrap">
                        <button className="bw_btn bw_primary_btn" type="button" onClick={previousHandle}>Previous</button>
                        <button className="bw_btn bw_primary_btn" type="button" onClick={nextHandle}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery;