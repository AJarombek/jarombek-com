/**
 * LineChart React component.
 * @author Andrew Jarombek
 * @since 9/19/2021
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * @param {number} x
 * @param {number} y
 * @param {number} value
 * @param {string} language
 * @param {boolean} filtered
 * @param {boolean} bold
 * @param {number} fontSize
 * @return {JSX.Element|null}
 * @constructor
 */
const LineChartLabel = ({ x, y, value, language, filtered = true, bold = false, fontSize = 11 }) => {
  return !filtered || value > 7_500 ? (
    <text
      id="jarombek-line-chart-label"
      className={classNames(bold ? 'jarombek-line-chart-label-bold' : null)}
      x={x}
      y={y}
      dy={-6}
      fontSize={fontSize}
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
  bold: PropTypes.bool,
  fontSize: PropTypes.number,
};

export default LineChartLabel;
