/**
 * LineChart React component.
 * @author Andrew Jarombek
 * @since 9/19/2021
 */

import React from 'react';
import PropTypes from 'prop-types';

const LineChartLabel = ({ x, y, value, language }) => {
  return value > 10000 ? (
    <text x={x} y={y} dy={-6} fontSize={11} textAnchor="middle">
      {language}
    </text>
  ) : null;
};

LineChartLabel.propTypes = {
  language: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  value: PropTypes.number
};

export default LineChartLabel;
