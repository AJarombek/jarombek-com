/**
 * WebsiteTemplate component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import WebsiteNav from './WebsiteNav';
import PropTypes from "prop-types";

import './WebsiteTemplate.scss';

const WebsiteTemplate = ({children, subscribeAction, hideSubscribe}) => {
    return (
        <div className="jarombek-template">
            <WebsiteNav hideSubscribe={hideSubscribe} subscribeAction={subscribeAction} />
            {children}
        </div>
    );
};

WebsiteTemplate.propTypes = {
    children: PropTypes.any,
    subscribeAction: PropTypes.func,
    hideSubscribe: PropTypes.bool
};

WebsiteTemplate.defaultProps = {
    subscribeAction: f=>f,
    hideSubscribe: false
};

export default WebsiteTemplate;