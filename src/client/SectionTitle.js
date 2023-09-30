/**
 * SectionTitle Component
 * @author Andrew Jarombek
 * @since 9/29/2018
 */

import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title, iscode, children }) => {
  const sectionId = title.replace(/\s/g, "-").toLowerCase();

  return (
    <div className="jarbek-section-title">
      <div id={sectionId} className="jarbek-section-title-above">
        {" "}
      </div>
      <a href={`#${sectionId}`}>
        {iscode === "true" ? (
          <h6 className="jarbek-section-title-content">{children}</h6>
        ) : (
          <h5 className="jarbek-section-title-content">{children}</h5>
        )}
      </a>
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
  iscode: PropTypes.string,
};

SectionTitle.defaultProps = {
  iscode: "false",
};

export default SectionTitle;
