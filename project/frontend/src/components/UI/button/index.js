import React from 'react';
import './style.scss';

const Button = ({ handleEvent, children }) => {
    return (
        <button className='button' onClick={handleEvent}>
            {children}
        </button>
    );
}

export default Button;
