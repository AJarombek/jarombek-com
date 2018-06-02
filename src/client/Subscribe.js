/**
 * Subscribe Component
 * @author Andrew Jarombek
 * @since 6/1/2018
 */

import React from 'react';

import './Subscribe.scss';

class Subscribe extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="jarbek-subscribe">
                <p className="jarbek-subscribe-title">Sign Up for Monthly Notifications</p>
                <div className="jarbek-divider">
                    <div> </div>
                </div>
                <div className="jarbek-subscribe-form">
                    <div className="jarbek-input jarbek-input-email">
                        <input type="email" name="email" autoComplete="username"
                               placeholder="Email" />
                    </div>
                    <div className="jarbek-input jarbek-input-first">
                        <input type="text" name="first" placeholder="First Name" />
                    </div>
                    <div className="jarbek-input jarbek-input-last">
                        <input type="text" name="last" placeholder="Last Name" />
                    </div>
                    <div className="jarbek-input jarbek-input-password">
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Subscribe;