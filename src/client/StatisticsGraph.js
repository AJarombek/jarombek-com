/**
 * StatisticsGraph functional component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React from 'react';
import PropTypes from 'prop-types';

const StatisticsGraph = ({data=[], disabled=false}) => {
    return (
        disabled ?
            <div id="jarbek-statistics-graph">Statistics Graph Coming 2020</div> :
            <div id="jarbek-statistics-graph"> </div>
    );
};

StatisticsGraph.propTypes = {
    data: PropTypes.array,
    disabled: PropTypes.bool
};

export default StatisticsGraph;
