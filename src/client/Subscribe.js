/**
 * Subscribe Component
 * @author Andrew Jarombek
 * @since 6/1/2018
 */

import React from 'react';

import './Subscribe.scss';
import Button from "./Button";

class Subscribe extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    static EMAIL_REGEX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,}$/;
    static NAME_REGEX = /^[^0-9~!@#$%^&*()?<>:;[\]{}|\\]+$/;

    onChangeEmail(e) {
        const email = e.target.value;
        if (email.match(Subscribe.EMAIL_REGEX)) {
            this.setState({
                email,
                emailValid: true
            });
        } else {
            this.setState({
                emailValid: false
            });
        }
    }

    onChangeFirstName(e) {
        const firstName = e.target.value;
        if (firstName.match(Subscribe.NAME_REGEX)) {
            this.setState({
                firstName,
                firstNameValid: true
            });
        } else {
            this.setState({
                firstNameValid: false
            });
        }
    }

    onChangeLastName(e) {
        const lastName = e.target.value;
        if (lastName.match(Subscribe.NAME_REGEX)) {
            this.setState({
                lastName,
                lastNameValid: true
            });
        } else {
            this.setState({
                lastNameValid: false
            });
        }
    }

    onChangePassword(e) {
        const password = e.target.value;
        if (password.match(Subscribe.NAME_REGEX)) {
            this.setState({
                password,
                passwordValid: true
            });
        } else {
            this.setState({
                passwordValid: false
            });
        }
    }

    onSubmit() {
        const {emailValid, email, firstNameValid,
            firstName, lastNameValid, lastName,
            passwordValid, password} = this.state;

        if (emailValid && firstNameValid &&
            lastNameValid && passwordValid) {
            console.info(`Valid ${email} ${firstName} ${lastName} ${password}`);
        } else {
            console.info("Invalid");
        }
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
                               placeholder="Email" onChange={(e) => this.onChangeEmail(e)} />
                    </div>
                    <div className="jarbek-input jarbek-input-first">
                        <input type="text" name="first" placeholder="First Name"
                               onChange={(e) => this.onChangeFirstName(e)} />
                    </div>
                    <div className="jarbek-input jarbek-input-last">
                        <input type="text" name="last" placeholder="Last Name"
                               onChange={(e) => this.onChangeLastName(e)} />
                    </div>
                    <div className="jarbek-input jarbek-input-password">
                        <input type="password" name="password" placeholder="Password"
                               onChange={(e) => this.onChangePassword(e)} />
                    </div>
                    <Button className="jarbek-input-submit" size="long"
                            activeColor="primary" onClick={() => this.onSubmit()}>
                        SUBSCRIBE
                    </Button>
                </div>
            </div>
        );
    }
}

export default Subscribe;