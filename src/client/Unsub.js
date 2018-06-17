/**
 * Unsub Component
 * @author Andrew Jarombek
 * @since 6/16/2018
 */

import React from 'react';

import './Unsub.scss';
import PropTypes from "prop-types";
import WebsiteTemplate from "./WebsiteTemplate";

class Unsub extends React.Component {

    constructor(props) {
        super(props);

        this.baseUrl = (process.env.NODE_ENV === 'production') ?
            'https://jarombek.com' :
            'http://localhost:8080';

        this.state = {};
    }

    static propTypes = {
        match: PropTypes.object.isRequired
    };

    render() {
        const {_} = this.state;
        console.debug(this.state);
        return (
            <WebsiteTemplate hideSubscribe={true}>
                <div className="jarombek-background">
                    {

                    }
                </div>
            </WebsiteTemplate>
        );
    }
}

export default Unsub;