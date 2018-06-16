/**
 * Unsub Component
 * @author Andrew Jarombek
 * @since 6/16/2018
 */

import React from 'react';

import './Unsub.scss';
import PropTypes from "prop-types";

class Unsub extends React.Component {

    constructor(props) {
        super(props);

        this.baseUrl = (process.env.NODE_ENV === 'production') ?
            'https://jarombek.com' :
            'http://localhost:8080';

        this.state = {};
    }

    static propTypes = {
        exit: PropTypes.func
    };

    static defaultProps = {
        exit: f=>f
    };

    render() {
        const {_} = this.state;
        console.debug(this.state);
        return (
            <div>

            </div>
        );
    }
}

export default Unsub;