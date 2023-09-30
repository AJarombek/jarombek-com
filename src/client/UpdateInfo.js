/**
 * UpdateInfo Component
 * @author Andrew Jarombek
 * @since 10/15/2018
 */

import React from "react";
import PropTypes from "prop-types";

const UpdateInfo = ({ date, children }) => (
  <div>
    <div className="jarbek-update-info">
      <p className="jarbek-update-info-date">{date}</p>
      <div className="jarbek-update-info-body">
        <figure className="jarbek-update-info-picture-container">
          <img
            className="jarbek-update-info-picture"
            src={require("./assets/flag.svg")}
          />
        </figure>
        <p className="jarbek-update-info-contents">{children}</p>
      </div>
    </div>
  </div>
);

UpdateInfo.propTypes = {
  date: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default UpdateInfo;
