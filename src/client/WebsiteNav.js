/**
 * WebsiteNav component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from "./Button";
import PropTypes from "prop-types";

const WebsiteNav = ({subscribeAction, hideSubscribe}) => {
    return (
        <nav className="jarombek-nav">
            <NavLink to="/" className="jarombek-nav-left">
                <figure>
                    <img src={ require("./assets/home.png") } />
                </figure>
            </NavLink>
            <NavLink to="/" className="jarombek-nav-middle">
                Andrew Jarombek
            </NavLink>
            { (!hideSubscribe) ?
                <div className="jarombek-nav-right" onClick={subscribeAction}>
                    <Button className="subscribe-button" activeColor="primary" size="medium">
                        SUBSCRIBE
                    </Button>
                </div>:
                <div className="jarombek-nav-right"> </div>
            }
        </nav>
    );
};

WebsiteNav.propTypes = {
    subscribeAction: PropTypes.func,
    hideSubscribe: PropTypes.bool
};

WebsiteNav.defaultProps = {
    subscribeAction: f=>f,
    hideSubscribe: false
};

export default WebsiteNav;