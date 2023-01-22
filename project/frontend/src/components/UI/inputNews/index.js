import React from 'react';
import { Image } from "react-bootstrap"
import './style.scss';

const InputNews = ({ placeholder, handleEvent, imgSrc }) => {
    return (
        <div className="mt-3">
            <div className='input-container-news'>
                <input className='input-field' placeholder={placeholder} />
                <Image src={imgSrc} />
            </div>
        </div>
    );
}

export default InputNews;
