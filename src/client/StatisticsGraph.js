/**
 * StatisticsGraph functional component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React from 'react';
import PropTypes from 'prop-types';

const StatisticsGraph = ({data={}, disabled=false}) => {
    return (
        disabled ? <div>Statistics Chart Coming Fall 2018</div> : <div> </div>
    );
};

StatisticsGraph.propTypes = {
    data: PropTypes.object.isRequired,
    disabled: PropTypes.bool
};

export default StatisticsGraph;