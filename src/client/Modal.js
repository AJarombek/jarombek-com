/**
 * Modal Component
 * @author Andrew Jarombek
 * @since 5/24/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

// Empty function in case the onClick event is undefined
const eventDefault = { stopPropagation: (f) => f };

const Modal = ({ backdrop, children, clickBackground }) => {
  return (
    <div
      onClick={clickBackground}
      className={`jarbek-modal-backdrop
                    ${backdrop ? 'jarbek-modal-backdrop-visible' : ''}`}
    >
      >
      <div className="jarbek-modal" onClick={(e = eventDefault) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  backdrop: PropTypes.bool,
  children: PropTypes.any,
  clickBackground: PropTypes.func
};

Modal.defaultProps = {
  backdrop: true,
  clickBackground: (f) => f
};

export default Modal;
