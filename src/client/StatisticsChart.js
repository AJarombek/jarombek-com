/**
 * StatisticsChart functional component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import StatisticsGraph from "./StatisticsGraph";

const StatisticsChart = ({data={}}) => {
    return (
        <div>

        </div>
    );
};

StatisticsChart.propTypes = {
    data: PropTypes.object.isRequired
};

export default StatisticsChart;