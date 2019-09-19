/**
 * Subscribe Component
 * @author Andrew Jarombek
 * @since 6/1/2018
 */

import React from 'react';
import Button from "./Button";
import SubmitStatus from "./status/SubmitStatus";
import Loading from "./Loading";
import PropTypes from "prop-types";

class Subscribe extends React.Component {

    constructor(props) {
        super(props);

        this.baseUrl = (process.env.NODE_ENV === 'production') ?
            'https://jarombek.com' :
            'http://localhost:8080';

        this.state = { enabled: false };
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

    /**
     * Actions to perform when the email field is changed.  If the email in the input
     * field matches the valid email regex, the state property {emailValid} of the component is
     * set to true.  Otherwise, it is set to false.  The state is also updated with the new
     * email value.
     * @param e - the React event that occurred (which corresponds to a DOM event)
     */
    onChangeEmail(e) {
        const email = e.target.value;
        this.setState(Subscribe.validateEmail(email));
    }

    /**
     * Validate an email address based on the email regex
     * @param email - the email address that needs validating
     * @return {{email: *, emailValid}} - an object literal with the email address in one
     * property and whether the email is valid in another
     */
    static validateEmail(email) {
        return {
            email,
            emailValid: !!email.match(Subscribe.EMAIL_REGEX)
        };
    }

    /**
     * Actions to perform when the first name field is changed.  If the first name
     * input matches the name regex, the state property {firstNameValid} of the component
     * is set to true.  Otherwise, it is set to false.  The state is also updated with the new
     * first name value.
     * @param e - the React event that occurred (which corresponds to a DOM event)
     */
    onChangeFirstName(e) {
        const firstName = e.target.value;
        this.setState(Subscribe.validateFirstName(firstName));
    }

    /**
     * Validate a first name based on the name regex
     * @param firstName - the name that needs validating
     * @return {{email: *, emailValid}} - an object literal with the first name in one
     * property and whether the first name is valid in another
     */
    static validateFirstName(firstName) {
        return {
            firstName,
            firstNameValid: !!firstName.match(Subscribe.NAME_REGEX)
        };
    }

    /**
     * Actions to perform when the last name field is changed.  If the last name
     * input matches the name regex, the state property {lastNameValid} of the component
     * is set to true.  Otherwise, it is set to false.  The state is also updated with the new
     * last name value.
     * @param e - the React event that occurred (which corresponds to a DOM event)
     */
    onChangeLastName(e) {
        const lastName = e.target.value;
        this.setState(Subscribe.validateLastName(lastName));
    }

    /**
     * Validate a last name based on the name regex
     * @param lastName - the name that needs validating
     * @return {{email: *, emailValid}} - an object literal with the last name in one
     * property and whether the last name is valid in another
     */
    static validateLastName(lastName) {
        return {
            lastName,
            lastNameValid: !!lastName.match(Subscribe.NAME_REGEX)
        };
    }

    /**
     * Actions to perform when the password field is changed.  If the password
     * input matches the password regex and its length is greater or equal to 8,
     * the state property {passwordNameValid} of the component is set to true.  Otherwise,
     * it is set to false.  The state is also updated with the new password value.
     * @param e - the React event that occurred (which corresponds to a DOM event)
     */
    onChangePassword(e) {
        const password = e.target.value;
        this.setState(Subscribe.validatePassword(password));
    }

    /**
     * Validate a password based on the password regex
     * @param password - the password that needs validating
     * @return {{email: *, emailValid}} - an object literal with the password in one
     * property and whether the password is valid in another
     */
    static validatePassword(password) {

        const passwordValid = !!password.match(Subscribe.PASSWORD_REGEX) && password.length >= 8;
        const passwordProperLength = password.length >= 8;
        const passwordContainsNonLetter = !!password.match(/[^a-zA-Z]+/);
        const passwordContainsLetter = !!password.match(/[a-zA-Z]+/);

        return {
            password,
            passwordValid,
            passwordProperLength,
            passwordContainsNonLetter,
            passwordContainsLetter
        };
    }

    /**
     * Actions to perform when the form is submitted.  If all the fields in the form
     * are valid, an API call is made to create a new user.  Depending on the status of the
     * form submission, the {submitStatus} state is changed accordingly
     */
    onSubmit() {

        // The status of the form is that it has just been submitted
        this.setState({submitStatus: SubmitStatus.SUBMIT});

        const {emailValid, email, firstNameValid,
            firstName, lastNameValid, lastName,
            passwordValid, password} = this.state;

        if (emailValid && firstNameValid && lastNameValid && passwordValid) {

            // The status of the form is that the form inputs are valid and an API call can be made
            this.setState({submitStatus: SubmitStatus.SUBMIT_VALID});

            Subscribe.createUser(email, firstName, lastName, password, this.baseUrl)
                .then((status) => {
                    // The success of the API is dependent on the HTTP status code
                    if (status === 201) {
                        this.setState({submitStatus: SubmitStatus.SUBMIT_SUCCESS});
                    } else if (status === 400) {
                        this.setState({submitStatus: SubmitStatus.SUBMIT_NO_CHANGE});
                    } else {
                        this.setState({submitStatus: SubmitStatus.SUBMIT_FAIL});
                    }
                })
                .catch(() => {
                    this.setState({submitStatus: SubmitStatus.SUBMIT_FAIL});
                });

        } else {
            this.setState({
                submitStatus: SubmitStatus.SUBMIT_INVALID
            });
        }
    }

    /**
     * Call the API to create a new user.
     * @param email - the users email
     * @param firstName - the users first name
     * @param lastName - the users last name
     * @param password - the users non-hashed password
     * @param baseUrl - the base of the url dependent on the environment
     * @return {Promise<number>} - a promise containing the HTTP response status code once resolved
     */
    static async createUser(email, firstName, lastName, password, baseUrl) {
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

        await response.json();
        return response.status;
    }

    renderEmailInput() {
        const {submitStatus, emailValid, email} = this.state;

        return (
            <>
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
            </>
        );
    }

    renderFirstNameInput() {
        const {submitStatus, firstNameValid, firstName} = this.state;

        return (
            <>
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
            </>
        );
    }

    renderLastNameInput() {
        const {submitStatus, lastNameValid, lastName} = this.state;

        return (
            <>
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
            </>
        );
    }

    renderPasswordInput() {
        const {submitStatus, passwordValid, passwordProperLength,
            passwordContainsLetter, passwordContainsNonLetter, password} = this.state;

        return (
            <>
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
            </>
        );
    }

    renderSubscribing() {
        const {submitStatus} = this.state;

        return (
            <div className="jarbek-subscribe-form">
                {this.renderEmailInput()}
                {this.renderFirstNameInput()}
                {this.renderLastNameInput()}
                {this.renderPasswordInput()}
                { submitStatus === SubmitStatus.SUBMIT ||
                submitStatus === SubmitStatus.SUBMIT_VALID ?

                    <Loading className="jarbek-input-submit" />:
                    <Button className="jarbek-input-submit" size="long"
                            activeColor="primary" onClick={() => this.onSubmit()}>
                        SUBSCRIBE
                    </Button>
                }
            </div>
        );
    }

    renderSubmitted() {
        const {submitStatus} = this.state;

        return (
            <div className="jarbek-subscribe-form">
                { submitStatus === SubmitStatus.SUBMIT_SUCCESS ?
                    <p className="jarbek-input-completed">
                        Thank you for subscribing!  I sent an email confirming your
                        subscription.  Emails are sent once a month
                        with everything I have worked on related to Software
                        Development!  For additional information you can contact me at
                        andrew@jarombek.com.
                    </p>:
                    (submitStatus === SubmitStatus.SUBMIT_NO_CHANGE) ?
                        <p className="jarbek-input-completed">
                            This email is already subscribed!
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
            </div>
        );
    }

    /**
     * Render the Subscription form or a message describing the status of the users subscription.
     * @return {*} React Elements.
     */
    renderSubscriptionForm() {
        const {submitStatus} = this.state;

        if (submitStatus === SubmitStatus.SUBMIT_FAIL ||
            submitStatus === SubmitStatus.SUBMIT_SUCCESS ||
            submitStatus === SubmitStatus.SUBMIT_NO_CHANGE) {

            return this.renderSubmitted();
        } else {
            return this.renderSubscribing()
        }
    }

    /**
     * Render the Subscription component containing input fields, validation for input text,
     * and a submit button.
     * @return {*} React Elements.
     */
    render() {
        const {enabled} = this.state;
        return (
            <div className="jarbek-subscribe">
                <p className="jarbek-subscribe-title">Sign Up for Monthly Notifications</p>
                <div className="jarbek-divider">
                    <div> </div>
                </div>
                { enabled ?
                    this.renderSubscriptionForm()
                    :
                    <div className="jarbek-subscribe-coming-soon">
                        Subscription Emails Coming in 2020
                    </div>
                }
            </div>
        );
    }
}

export default Subscribe;