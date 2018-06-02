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
    static PASSWORD_REGEX = /((?=.*[a-zA-Z])(?=.*[^a-zA-Z]))/;

    onChangeEmail(e) {
        const email = e.target.value;
        if (email.match(Subscribe.EMAIL_REGEX)) {
            this.setState({
                email,
                emailValid: true
            });
        } else {
            this.setState({
                email,
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
                firstName,
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
                lastName,
                lastNameValid: false
            });
        }
    }

    onChangePassword(e) {
        const password = e.target.value;
        if (password.match(Subscribe.PASSWORD_REGEX) && password.length >= 8) {
            this.setState({
                password,
                passwordValid: true,
                passwordProperLength: true,
                passwordContainsNonLetter: true,
                passwordContainsLetter: true
            });
        } else {
            const passwordContainsNonLetter = password.match(/[^a-zA-Z]+/);
            const passwordContainsLetter = password.match(/[a-zA-Z]+/);
            const passwordValidLength = password.length >= 8;
            this.setState({
                password,
                passwordValid: false,
                passwordProperLength: passwordValidLength,
                passwordContainsNonLetter,
                passwordContainsLetter
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
        const {emailValid, email, firstNameValid, firstName,
            lastNameValid, lastName, passwordValid, passwordProperLength,
            passwordContainsLetter, passwordContainsNonLetter, password} = this.state;
        console.info(this.state);
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
                    <div className="jarbek-input-email-comment">
                        { email ?
                            <div className="jarbek-input-comment-active">
                                { emailValid ?
                                    <p className="jarbek-input-valid">
                                        &#x2714; Valid Email Entered
                                    </p>:
                                    <p className="jarbek-input-invalid">
                                        &#x2718; Invalid Email Entered
                                    </p>
                                }
                            </div>:
                            <div> </div>
                        }
                    </div>
                    <div className="jarbek-input jarbek-input-first">
                        <input type="text" name="first" placeholder="First Name"
                               onChange={(e) => this.onChangeFirstName(e)} />
                    </div>
                    <div className="jarbek-input-first-name-comment">
                        { firstName ?
                            firstNameValid ?
                                <div> </div>:
                                <div className="jarbek-input-comment-active">
                                    <p className="jarbek-input-invalid">
                                        &#x2718; Invalid First Name Entered
                                    </p>
                                </div>:
                            <div> </div>
                        }
                    </div>
                    <div className="jarbek-input jarbek-input-last">
                        <input type="text" name="last" placeholder="Last Name"
                               onChange={(e) => this.onChangeLastName(e)} />
                    </div>
                    <div className="jarbek-input-last-name-comment">
                        { lastName ?
                            lastNameValid ?
                                <div> </div>:
                                <div className="jarbek-input-comment-active">
                                    <p className="jarbek-input-invalid">
                                        &#x2718; Invalid Last Name Entered
                                    </p>
                                </div>:
                            <div> </div>
                        }
                    </div>
                    <div className="jarbek-input jarbek-input-password">
                        <input type="password" name="password" placeholder="Password"
                               onChange={(e) => this.onChangePassword(e)} />
                    </div>
                    <div className="jarbek-input-password-comment">
                        { password ?
                            <div className="jarbek-input-comment-active">
                                { passwordValid ?
                                    <p className="jarbek-input-valid">
                                        &#x2714; Valid Password
                                    </p>:
                                    <p className="jarbek-input-invalid">
                                        &#x2718; Invalid Password
                                    </p>
                                }
                                { passwordProperLength ?
                                    <p className="jarbek-input-valid">
                                        &#x2714; Password Must Be Over 7 Characters
                                    </p>:
                                    <p className="jarbek-input-invalid">
                                        &#x2718; Password Must Be Over 7 Characters
                                    </p>
                                }
                                { passwordContainsLetter ?
                                    <p className="jarbek-input-valid">
                                        &#x2714; Password Must Contain a Letter
                                    </p>:
                                    <p className="jarbek-input-invalid">
                                        &#x2718; Password Must Contain a Letter
                                    </p>
                                }
                                { passwordContainsNonLetter ?
                                    <p className="jarbek-input-valid">
                                        &#x2714; Password Must Contain a Number or Symbol
                                    </p>:
                                    <p className="jarbek-input-invalid">
                                        &#x2718; Password Must Contain a Number or Symbol
                                    </p>
                                }
                            </div>:
                            <div> </div>
                        }
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