/**
 * ComparisonTable Component
 * @author Andrew Jarombek
 * @since 7/11/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

const ComparisonTable = ({ title, children, primaryColor, secondaryColor }) => (
  <div className="jarombek-comparison-table">
    <div className={`jarombek-ct-header-color-${primaryColor}`}>
      <p className="jarombek-ct-title">{title}</p>
      <div
        className={`jarombek-ct-body
                jarombek-ct-primary-color-${primaryColor}
                jarombek-ct-secondary-color-${secondaryColor}`}
      >
        {children}
      </div>
    </div>
  </div>
);

ComparisonTable.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

ComparisonTable.defaultProps = {
  primaryColor: 'default',
  secondaryColor: 'default',
};

export default ComparisonTable;
