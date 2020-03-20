import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <div style={spinnerStyle} className='center'>
            <img src={spinner} alt="Loading..."
                style={{

                }} />
        </div>
    );
}

const spinnerStyle = {
    width: '200px',
    margin: 'auto',
    display: 'block',
}

export default Spinner;