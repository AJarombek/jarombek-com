/**
 * WebsiteNav component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Modal from './Modal';
import Subscribe from './Subscribe';
import PropTypes from 'prop-types';

const WebsiteNav = ({ hideSubscribe }) => {
  const [subscribing, setSubscribing] = useState(false);

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
      {!hideSubscribe ? (
        <div className="jarombek-nav-right" onClick={() => setSubscribing(true)}>
          <Button className="subscribe-button" activeColor="primary" size="medium">
            SUBSCRIBE
          </Button>
        </div>
      ) : (
        <div className="jarombek-nav-right"> </div>
      )}
      {subscribing ? (
        <Modal clickBackground={() => setSubscribing(false)}>
          <Subscribe exit={() => setSubscribing(false)} />
        </Modal>
      ) : null}
    </nav>
  );
};

WebsiteNav.propTypes = {
  hideSubscribe: PropTypes.bool
};

WebsiteNav.defaultProps = {
  hideSubscribe: false
};

export default WebsiteNav;
