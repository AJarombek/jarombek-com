/**
 * WebsiteTemplate component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import WebsiteNav from './WebsiteNav';
import PropTypes from "prop-types";

const WebsiteTemplate = ({children, hideSubscribe}) => {
    return (
        <div className="jarombek-template">
            <WebsiteNav hideSubscribe={hideSubscribe} />
            {children}
        </div>
    );
};

WebsiteTemplate.propTypes = {
    children: PropTypes.any,
    hideSubscribe: PropTypes.bool
};

WebsiteTemplate.defaultProps = {
    hideSubscribe: false
};

export default WebsiteTemplate;