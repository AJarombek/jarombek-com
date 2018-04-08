/**
 * WebsiteNav component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from "./Button";

import './WebsiteNav.scss';

const WebsiteNav = () => {
    return (
        <nav className="jarombek-nav">
            <NavLink to="/blog">
                BLOG
            </NavLink>
            <NavLink to="/">
                Andrew Jarombek
            </NavLink>
            <NavLink>
                <Button className="subscribe-button" color="primary">
                    SUBSCRIBE
                </Button>
            </NavLink>
        </nav>
    );
};

export default WebsiteNav;