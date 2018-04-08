/**
 * WebsiteTemplate component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import WebsiteNav from './WebsiteNav';
import PropTypes from "prop-types";

import './WebsiteTemplate.scss';

const WebsiteTemplate = ({children}) => {
    return (
        <div className="jarombek-template">
            <WebsiteNav />
            {children}
        </div>
    );
};

WebsiteTemplate.propTypes = {
    children: PropTypes.any
};

export default WebsiteTemplate;