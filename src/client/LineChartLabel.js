/**
 * LineChart React component.
 * @author Andrew Jarombek
 * @since 9/19/2021
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LineChartLabel = ({ x, y, value, language, filtered = true, bold = false }) => {
  return !filtered || value > 10000 ? (
    <text
      id="jarombek-line-chart-label"
      className={classNames(bold ? 'jarombek-line-chart-label-bold' : null)}
      x={x}
      y={y}
      dy={-6}
      fontSize={11}
      textAnchor="middle"
    >
      {language}
    </text>
  ) : null;
};

LineChartLabel.propTypes = {
  language: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  value: PropTypes.number,
  filtered: PropTypes.bool,
  bold: PropTypes.bool
};

export default LineChartLabel;
