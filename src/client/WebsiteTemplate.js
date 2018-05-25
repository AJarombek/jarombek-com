/**
 * WebsiteTemplate component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import WebsiteNav from './WebsiteNav';
import PropTypes from "prop-types";

import './WebsiteTemplate.scss';

const WebsiteTemplate = ({children, subscribeAction}) => {
    return (
        <div className="jarombek-template">
            <WebsiteNav subscribeAction={subscribeAction} />
            {children}
        </div>
    );
};

WebsiteTemplate.propTypes = {
    children: PropTypes.any,
    subscribeAction: PropTypes.func
};

WebsiteTemplate.defaultProps = {
    subscribeAction: f=>f
};

export default WebsiteTemplate;