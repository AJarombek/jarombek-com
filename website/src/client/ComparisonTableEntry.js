/**
 * ComparisonTableEntry Component
 * @author Andrew Jarombek
 * @since 7/11/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
const ComparisonTableEntry = ({ children }) => (
  <div className="jarombek-comparison-table-entry">
    <div className="jarombek-ct-entry-content">{children}</div>
  </div>
);

ComparisonTableEntry.propTypes = {
  children: PropTypes.any,
};

export default ComparisonTableEntry;
