/**
 * Modal Component
 * @author Andrew Jarombek
 * @since 5/24/2018
 */

import React from 'react';

import './Modal.scss';
import PropTypes from "prop-types";

const Modal = ({backdrop, children, clickBackground}) => {
    return (
        <div onClick={clickBackground} className={`jarbek-modal-backdrop
                    ${backdrop ? "jarbek-modal-backdrop-visible" : ""}`}>
            <div className="jarbek-modal">
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
    clickBackground: f=>f
};

export default Modal;