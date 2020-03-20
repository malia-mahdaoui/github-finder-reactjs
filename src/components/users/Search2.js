import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'light');
        } else {
            //console.log(this.state.text)
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }

    }

    onChange = (event) => {

        //this.setState({ text: event.target.value }) we usually use this when we have a single input
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { text } = this.state;
        const { showClear, clearUsers } = this.props;
        return (
            <div style={searchStyle}>
                <form onSubmit={this.onSubmit} className='form' method='POST'>
                    <input style={searchStyle}
                        className='center'
                        type='text'
                        name='text'
                        placeholder='Search for a user'
                        value={text}
                        onChange={this.onChange}
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
}

const searchStyle = {
    marginTop: '10px'
}
export default Search
