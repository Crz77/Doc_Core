import React, { useState } from 'react';
import './img-carousel.css';
import Image from '@theme/IdealImage';

const clickNext = (index, setIndex, images) => {
    setIndex((prevIndex) => {
        if (prevIndex < images.length - 1)
            return prevIndex + 1;
        else
            return 0;
    });
};

const clickPrev = (index, setIndex, images) => {
    setIndex((prevIndex) => {
        if (prevIndex === 0)
            return images.length - 1;
        else
            return prevIndex - 1;
    });
};


export default function ImgCarousel (props) {
    const [index, setIndex] = useState(0);

    const images = props.images;
    const captions = props.captions;

    return (
        <>
            <div className='slideshow-container'>

                <div className='arrow-number-bar'>
                    <div className="prev" onClick={() => clickPrev(index, setIndex, images)}>
                        <a>&#10094;</a>
                    </div>
        
                    <div className="numbertext">
                        <a>{index + 1} / {images.length}</a>
                    </div>
        
                    <div className="next" onClick={() => clickNext(index, setIndex, images)}>
                        <a>&#10095;</a>
                    </div>
                </div>
                
                {captions.map((cap) => {
                    return (
                        <div key={cap.id} className={index === cap.id ? 'text' : 'notVisible'}>
                            {cap.caption}
                        </div>
                    )
                })}

                {images.map((image) => {
                    return(
                        <div key={image.id}>
                            <Image className={index === image.id ? 'fade' : 'notVisible '} img={image.url} />
                        </div>                                    
                    )
                })}                
            </div>
        </>
    )
}
