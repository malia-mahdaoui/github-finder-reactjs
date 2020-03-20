import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


/*export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    /*static PropTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };*/

/* render() {
     return (
         <div>
             <h2>
                 <i className={this.props.icon}></i> {this.props.title}
             </h2>
         </div>
     )
 }
}*/

const Navbar = ({ icon, title }) => {
    return (
        <nav >
            <h2 style={inlineStyle}>
                <i className={icon}></i> {title}
            </h2>

            <ul type='none' style={inlineStyle}>
                <li style={inlineStyle}>
                    <Link to='/'>Home</Link>
                </li>
                <li style={inlineStyle}>
                    <Link to='/about'> About</Link>
                </li>
            </ul>

        </nav >
    );
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
};

const navBarStyle = {
    marginBottom: '10px'
}

const inlineStyle = {
    display: 'inline',
    padding: '50px'
}


export default Navbar;
