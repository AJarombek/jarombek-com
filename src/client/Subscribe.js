/**
 * Subscribe Component
 * @author Andrew Jarombek
 * @since 6/1/2018
 */

import React from 'react';

import './Subscribe.scss';
import Button from "./Button";
import SubmitStatus from "./SubmitStatus";
import Loading from "./Loading";
import PropTypes from "prop-types";

class Subscribe extends React.Component {

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

    // Regular Expression Patterns
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
        this.setState({submitStatus: SubmitStatus.SUBMIT});

        const {emailValid, email, firstNameValid,
            firstName, lastNameValid, lastName,
            passwordValid, password} = this.state;

        if (emailValid && firstNameValid &&
            lastNameValid && passwordValid) {

            console.info(`Valid ${email} ${firstName} ${lastName} ${password}`);

            this.setState({
                submitStatus: SubmitStatus.SUBMIT_VALID
            });

            Subscribe.createUser(email, firstName, lastName, password, this.baseUrl)
                .then(() => {
                    this.setState({submitStatus: SubmitStatus.SUBMIT_SUCCESS});
                })
                .catch(err => {
                    console.error(err);
                    this.setState({submitStatus: SubmitStatus.SUBMIT_FAIL});
                });

        } else {
            console.info("Invalid");
            this.setState({
                submitStatus: SubmitStatus.SUBMIT_INVALID
            });
        }
    }

    static async createUser(email, firstName, lastName, password, baseUrl) {
        console.info(`POST ${baseUrl}/api/user`);
        const response = await fetch(
            `${baseUrl}/api/user`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email,
                    first: firstName,
                    last: lastName,
                    hash: password
                })
            },
        );

        console.debug(response);

        const json = await response.json();

        console.info(`User JSON: ${JSON.stringify(json)}`);
    }

    render() {
        const {submitStatus, emailValid, email, firstNameValid, firstName,
            lastNameValid, lastName, passwordValid, passwordProperLength,
            passwordContainsLetter, passwordContainsNonLetter, password} = this.state;
        console.debug(this.state);
        return (
            <div className="jarbek-subscribe">
                <p className="jarbek-subscribe-title">Sign Up for Monthly Notifications</p>
                <div className="jarbek-divider">
                    <div> </div>
                </div>
                { submitStatus === SubmitStatus.SUBMIT_FAIL ||
                    submitStatus === SubmitStatus.SUBMIT_SUCCESS ?
                    <div className="jarbek-subscribe-form">
                        { submitStatus === SubmitStatus.SUBMIT_SUCCESS ?
                            <p className="jarbek-input-completed">
                                Thank you for subscribing!  I sent an email confirming your
                                subscription.  Emails are sent once a month
                                with everything I have been working on in Software
                                Development!  For additional information you can contact me at
                                andrew@jarombek.com.
                            </p>:
                            <p className="jarbek-input-completed">
                                Something went wrong!  Note: This error message is a feature,
                                not a bug.
                            </p>
                        }
                        <Button className="jarbek-input-submit" size="long"
                                activeColor="primary" onClick={() => this.props.exit()}>
                            CONTINUE
                        </Button>
                    </div>:
                    <div className="jarbek-subscribe-form">
                        <div className="jarbek-input jarbek-input-email">
                            <input className={ submitStatus === SubmitStatus.SUBMIT_INVALID
                                            && !emailValid ? "jarbek-input-warning": "" }
                                   type="email"
                                   name="email"
                                   autoComplete="username"
                                   placeholder="Email"
                                   onChange={(e) => this.onChangeEmail(e)} />
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
                            <input className={ submitStatus === SubmitStatus.SUBMIT_INVALID
                                            && !firstNameValid ? "jarbek-input-warning": "" }
                                   type="text"
                                   name="first"
                                   placeholder="First Name"
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
                            <input className={ submitStatus === SubmitStatus.SUBMIT_INVALID
                                            && !lastNameValid ? "jarbek-input-warning": "" }
                                   type="text"
                                   name="last"
                                   placeholder="Last Name"
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
                            <input className={ submitStatus === SubmitStatus.SUBMIT_INVALID
                                            && !passwordValid ? "jarbek-input-warning": "" }
                                   type="password"
                                   name="password"
                                   placeholder="Password"
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
                        { submitStatus === SubmitStatus.SUBMIT ||
                        submitStatus === SubmitStatus.SUBMIT_VALID ||
                        submitStatus === SubmitStatus.SUBMIT_INVALID ?

                            <Loading className="jarbek-input-submit" />:
                            <Button className="jarbek-input-submit" size="long"
                                    activeColor="primary" onClick={() => this.onSubmit()}>
                                SUBSCRIBE
                            </Button>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Subscribe;