/**
 * Note Component
 * @author Andrew Jarombek
 * @since 6/23/2021
 */

import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ children }) => (
  <div className="jarbek-note">
    <p className="jarbek-note-icon">&#x73;</p>
    <p className="jarbek-note-body">{children}</p>
  </div>
);

Note.propTypes = {
  children: PropTypes.any
};

export default Note;
