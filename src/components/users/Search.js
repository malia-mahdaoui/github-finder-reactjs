//To start with useState Hook

import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const { setAlert } = alertContext;


    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light');
        } else {
            //console.log(this.state.text)
            githubContext.searchUsers(text);
            setText('');
        }

    }

    const onChange = (event) => {

        //this.setState({ text: event.target.value }) we usually use this when we have a single input
        setText(event.target.value);
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


            {githubContext.users.length > 0 && (<button
                className='btn btn-light btn-block'
                onClick={githubContext.clearUsers} >
                Clear
            </button>)}


        </div>
    )

}

const searchStyle = {
    marginTop: '10px'
}

export default Search;
