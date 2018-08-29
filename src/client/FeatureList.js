/**
 * FeatureList Component
 * @author Andrew Jarombek
 * @since 8/29/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature';

import './FeatureList.scss';

const FeatureList = ({ featureList=[] }) =>
    <div className="jarombek-feature-list">
        { (featureList.length === 0) ?
            <p className="jarombek-feature-list-none"> </p> :
            featureList.map(feature =>
                <Feature key={feature.title} {...feature} />
            )
        }
    </div>;

FeatureList.propTypes = {
    featureList: PropTypes.array
};

export default FeatureList;