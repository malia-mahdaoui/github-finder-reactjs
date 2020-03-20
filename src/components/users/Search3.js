//To start with useState Hook

import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

const Search2 = ({ searchUsers, clearUsers, showClear, setAlert }) => {

    const [text, setText] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light');
        } else {
            //console.log(this.state.text)
            searchUsers(text);
            setText('');
        }

    }

    const onChange = (event) => {

        //this.setState({ text: event.target.value }) we usually use this when we have a single input
        this.setText(event.target.value);
    }

    return (
        <div style={searchStyle}>
            <form onSubmit={onSubmit} className='form' method='POST'>
                <input style={searchStyle}
                    className='center'
                    type='text'
                    name='text'
                    placeholder='Search for a user'
                    value={text}
                    onChange={onChange}
                />

                <input style={searchStyle}
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block' />
            </form>


            {showClear && (<button
                className='btn btn-light btn-block'
                onClick={clearUsers} >
                Clear
            </button>)}


        </div>
    )

}

const searchStyle = {
    marginTop: '10px'
}

Search2.PropTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search2;
