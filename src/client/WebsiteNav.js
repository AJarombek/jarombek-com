/**
 * WebsiteNav component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from "./Button";

import './WebsiteNav.scss';

const selectedStyle = {
    color: "#555"
};

const WebsiteNav = () => {
    return (
        <nav className="jarombek-nav">
            <NavLink to="/blog" activeStyle={selectedStyle} className="jarombek-nav-left">
                BLOG
            </NavLink>
            <NavLink to="/" className="jarombek-nav-middle">
                Andrew Jarombek
            </NavLink>
            <NavLink to="/" className="jarombek-nav-right">
                <Button className="subscribe-button" color="primary" size="medium">
                    SUBSCRIBE
                </Button>
            </NavLink>
        </nav>
    );
};

export default WebsiteNav;