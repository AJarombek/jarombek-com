/**
 * TitleImage component
 * @author Andrew Jarombek
 * @since 4/3/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

import './TitleImage.scss';

const TitleImage = ({src, title, className, link}) =>
    <div className={className}>
        <figure className="jarbek-figure">
            <a href={link}>
                <img src={ require(`${src}`) } />
            </a>
        </figure>
        <p className="jarbek-image-title">{title}</p>
    </div>;

TitleImage.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    link: PropTypes.string
};

TitleImage.defaultProps = {
    src: "",
    title: ""
};

export default TitleImage;