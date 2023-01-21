import React from 'react';
import Button from '../button';
import './style.scss';

const Input = ({ placeholder, handleEvent }) => {
    return (
        <div className='input-container'>
            <input className='input-field' placeholder={placeholder} />

            <Button onClick={handleEvent}>
                Shorten
            </Button>
        </div>
    );
}

export default Input;
