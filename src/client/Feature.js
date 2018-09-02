/**
 * Feature Component
 * @author Andrew Jarombek
 * @since 8/29/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

import './Feature.scss';

const Feature = ({ title, content, backgroundPicture, backgroundColor, orientation }) =>
    <div className={`jarbek-feature jarbek-feature-orientation-${orientation}
            ${backgroundPicture ? `jarbek-feature-background-picture
                jarbek-feature-background-picture-${backgroundPicture}`: ''}
            ${backgroundColor ? `jarbek-feature-background-color-${backgroundColor}`: ''}`}>
        <div>
            <div className="jarbek-feature-content">
                <h5>{ title }</h5>
                <p>{ content.text }</p>
            </div>
            <div className="jarbek-feature-content-picture">
                { content.picture ?
                    <figure>
                        <img src={`${content.picture}`} />
                    </figure>: null
                }
            </div>
        </div>
    </div>;

Feature.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    backgroundPicture: PropTypes.string,
    backgroundColor: PropTypes.string,
    orientation: PropTypes.string
};

Feature.defaultProps = {
    orientation: 'left'
};

export default Feature;