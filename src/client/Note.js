/**
 * Note Component
 * @author Andrew Jarombek
 * @since 6/23/2021
 */

import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ children }) =>
    <div className="jarbek-note">
        <p>{children}</p>
    </div>;

Note.propTypes = {
    children: PropTypes.any
};

export default Note;