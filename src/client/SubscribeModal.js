/**
 * SubscribeModal Component
 * @author Andrew Jarombek
 * @since 5/24/2018
 */

import React from 'react';

import './SubscribeModal.scss';
import PropTypes from "prop-types";

class SubscribeModal extends React.Component {

    constructor() {
        super();
    }

    static propTypes = {
        backdrop: PropTypes.bool
    };

    static defaultProps = {
        backdrop: true
    };

    render() {
        const {backdrop} = this.props;

        return (
            <div className={`jarbek-modal-backdrop
                    ${backdrop ? "jarbek-modal-backdrop-visible" : ""}`}>
                <div className="jarbek-modal">
                    I am Modal!
                </div>
            </div>
        );
    }
}

export default SubscribeModal;