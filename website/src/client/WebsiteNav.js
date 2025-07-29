/**
 * WebsiteNav component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @return {JSX.Element}
 * @constructor
 */
const WebsiteNav = () => {
  return (
    <nav className="jarombek-nav">
      <NavLink to="/" className="jarombek-nav-left">
        <figure>
          <img src={require('./assets/home.png')} alt="" />
        </figure>
      </NavLink>
      <NavLink to="/" className="jarombek-nav-middle">
        Andrew Jarombek
      </NavLink>
    </nav>
  );
};

export default WebsiteNav;
