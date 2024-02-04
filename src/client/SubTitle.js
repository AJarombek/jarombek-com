/**
 * SubTitle Component
 * @author Andrew Jarombek
 * @since 6/22/2021
 */

import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';

/**
 * @param {string} title
 * @param {string} isCode
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
const SubTitle = ({ title, isCode, children }) => {
  return (
    <div className="jarbek-sub-title">
      <SectionTitle title={title} iscode={isCode}>
        {children}
      </SectionTitle>
    </div>
  );
};

SubTitle.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
  isCode: PropTypes.string,
};

export default SubTitle;
