/**
 * StatisticsChart functional component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React from 'react';
import PropTypes from 'prop-types';

const StatisticsTable = ({ data = [] }) => {
  return <div id="jarbek-statistics-table"></div>;
};

StatisticsTable.propTypes = {
  data: PropTypes.array
};

export default StatisticsTable;
