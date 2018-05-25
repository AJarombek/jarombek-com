/**
 * WebsiteNav component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from "./Button";

import './WebsiteNav.scss';
import PropTypes from "prop-types";

const WebsiteNav = ({subscribeAction}) => {
    return (
        <nav className="jarombek-nav">
            <NavLink to="/blog" className="jarombek-nav-left">
                BLOG
            </NavLink>
            <NavLink to="/" className="jarombek-nav-middle">
                Andrew Jarombek
            </NavLink>
            <div className="jarombek-nav-right" onClick={subscribeAction}>
                <Button className="subscribe-button" activeColor="primary" size="medium">
                    SUBSCRIBE
                </Button>
            </div>
        </nav>
    );
};

WebsiteNav.propTypes = {
    subscribeAction: PropTypes.func
};

WebsiteNav.defaultProps = {
    subscribeAction: f=>f
};

export default WebsiteNav;