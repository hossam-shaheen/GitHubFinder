import React from 'react';
import {
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';


function Nav(props) {
    return (
        <nav className="navbar bg-primary">
            <h1><Link to="/">{props.title}</Link></h1>
            <ul>
                <li><Link to="/">Home</Link></li>{" "}
                <li><Link to="/about">About</Link></li>
            </ul>

        </nav>
    )
}

Nav.defaultProps = {
    title: "GithubFinder"
}
Nav.propTypes = {
    title: PropTypes.string.isRequired
};

export default Nav
