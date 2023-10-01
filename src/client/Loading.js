/**
 * Loading component
 * @author Andrew Jarombek
 * @since 5/20/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ className }) => (
  <div className={`jarbek-loading ${className}`}>
    <div className="jarbek-loading-circle jarbek-first-loading-circle"> </div>
    <div className="jarbek-loading-circle jarbek-second-loading-circle"> </div>
    <div className="jarbek-loading-circle jarbek-third-loading-circle"> </div>
  </div>
);

Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
