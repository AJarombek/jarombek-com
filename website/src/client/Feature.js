/**
 * Feature Component
 * @author Andrew Jarombek
 * @since 8/29/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Feature.scss';

/**
 * @param {string} title
 * @param {{text: string, picture: string}} content
 * @param {string} backgroundPicture
 * @param {string} backgroundColor
 * @param {string} orientation
 * @param {string} link
 * @return {JSX.Element}
 * @constructor
 */
const Feature = ({ title, content, backgroundPicture, backgroundColor, orientation, link }) => (
  <div
    className={`jarbek-feature jarbek-feature-orientation-${orientation}
            ${
              backgroundPicture
                ? `jarbek-feature-background-picture
                jarbek-feature-background-picture-${backgroundPicture}`
                : ''
            }
            ${
              backgroundColor
                ? `jarbek-feature-with-picture
                jarbek-feature-background-color-${backgroundColor}`
                : ''
            }`}
  >
    <div>
      <Link to={link} className="jarbek-feature-content">
        <h5>{title}</h5>
        <p>{content.text}</p>
      </Link>
      <div className="jarbek-feature-content-picture">
        {content.picture ? (
          <figure>
            <img src={`${content.picture}`} alt="" />
          </figure>
        ) : null}
      </div>
    </div>
  </div>
);

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  backgroundPicture: PropTypes.string,
  backgroundColor: PropTypes.string,
  orientation: PropTypes.string,
  link: PropTypes.string,
};

Feature.defaultProps = {
  orientation: 'left',
  link: '/',
};

export default Feature;
