/**
 * Subscribe Component
 * @author Andrew Jarombek
 * @since 6/1/2018
 */

import React from 'react';
import Button from './Button';
import SubmitStatus from './status/SubmitStatus';
import Loading from './Loading';
import PropTypes from 'prop-types';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.baseUrl = process.env.NODE_ENV === 'production' ? 'https://jarombek.com' : 'http://localhost:8080';
    this.state = { enabled: true };
  }

  static propTypes = {
    exit: PropTypes.func,
  };

  static defaultProps = {
    exit: (f) => f,
  };

  // Regular Expression Patterns
  static EMAIL_REGEX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,}$/;

  /**
   * Actions to perform when the email field is changed.  If the email in the input
   * field matches the valid email regex, the state property {emailValid} of the component is
   * set to true.  Otherwise, it is set to false.  The state is also updated with the new
   * email value.
   * @param {React.ChangeEvent} e - the React event that occurred (which corresponds to a DOM event)
   * @return {void}
   */
  onChangeEmail(e) {
    const email = e.target.value;
    this.setState(Subscribe.validateEmail(email));
  }

  /**
   * Validate an email address based on the email regex
   * @param {string} email - the email address that needs validating
   * @return {{email: string, emailValid: boolean}} - an object literal with the email address in one
   * property and whether the email is valid in another
   */
  static validateEmail(email) {
    return {
      email,
      emailValid: !!email.match(Subscribe.EMAIL_REGEX),
    };
  }

  /**
   * Actions to perform when the first name field is changed.  If the first name
   * input matches the name regex, the state property {firstNameValid} of the component
   * is set to true.  Otherwise, it is set to false.  The state is also updated with the new
   * first name value.
   * @param {React.ChangeEvent} e - the React event that occurred (which corresponds to a DOM event)
   * @return {void}
   */
  onChangeFirstName(e) {
    const firstName = e.target.value;
    this.setState(Subscribe.validateFirstName(firstName));
  }

  /**
   * Validate a first name based on the name regex
   * @param firstName {string} - the name that needs validating
   * @return {{firstName: string, firstNameValid: boolean}} - an object literal with the first name in one
   * property and whether the first name is valid in another
   */
  static validateFirstName(firstName) {
    return {
      firstName,
      firstNameValid: firstName.trim().length > 0,
    };
  }

  /**
   * Actions to perform when the last name field is changed.  If the last name
   * input matches the name regex, the state property {lastNameValid} of the component
   * is set to true.  Otherwise, it is set to false.  The state is also updated with the new
   * last name value.
   * @param {React.ChangeEvent} e - the React event that occurred (which corresponds to a DOM event)
   * @return {void}
   */
  onChangeLastName(e) {
    const lastName = e.target.value;
    this.setState(Subscribe.validateLastName(lastName));
  }

  /**
   * Validate a last name based on the name regex
   * @param {string} lastName - the name that needs validating
   * @return {{lastName: string, lastNameValid: boolean}} - an object literal with the last name in one
   * property and whether the last name is valid in another
   */
  static validateLastName(lastName) {
    return {
      lastName,
      lastNameValid: lastName.trim().length > 0,
    };
  }

  /**
   * Actions to perform when the form is submitted.  If all the fields in the form
   * are valid, an API call is made to create a new user.  Depending on the status of the
   * form submission, the {submitStatus} state is changed accordingly.
   * @return void
   */
  onSubmit() {
    // The status of the form is that it has just been submitted
    this.setState({ submitStatus: SubmitStatus.SUBMIT });

    const { emailValid, email, firstNameValid, firstName, lastNameValid, lastName } = this.state;

    if (emailValid && firstNameValid && lastNameValid) {
      // The status of the form is that the form inputs are valid and an API call can be made
      this.setState({ submitStatus: SubmitStatus.SUBMIT_VALID });

      Subscribe.createSubscriber(email, firstName, lastName, this.baseUrl)
        .then((status) => {
          // The success of the API is dependent on the HTTP status code
          if (status === 201) {
            this.setState({ submitStatus: SubmitStatus.SUBMIT_SUCCESS });
          } else if (status === 400) {
            this.setState({ submitStatus: SubmitStatus.SUBMIT_NO_CHANGE });
          } else {
            this.setState({ submitStatus: SubmitStatus.SUBMIT_FAIL });
          }
        })
        .catch(() => {
          this.setState({ submitStatus: SubmitStatus.SUBMIT_FAIL });
        });
    } else {
      this.setState({
        submitStatus: SubmitStatus.SUBMIT_INVALID,
      });
    }
  }

  /**
   * Call the API to create a new user.
   * @param {string} email - the users email
   * @param {string} firstName - the users first name
   * @param {string} lastName - the users last name
   * @param {string} baseUrl - the base of the url dependent on the environment
   * @return {Promise<number>} - a promise containing the HTTP response status code once resolved
   */
  static async createSubscriber(email, firstName, lastName, baseUrl) {
    const response = await fetch(`${baseUrl}/subscriber`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        first: firstName,
        last: lastName,
      }),
    });

    await response.json();
    return response.status;
  }

  /**
   * Render the email input field for a user subscribing.  Show validations if the
   * input text is invalid.
   * @return {JSX.Element} React Elements.
   */
  renderEmailInput() {
    const { submitStatus, emailValid, email } = this.state;

    return (
      <>
        <div className="jarbek-input jarbek-input-email">
          <input
            className={submitStatus === SubmitStatus.SUBMIT_INVALID && !emailValid ? 'jarbek-input-warning' : ''}
            type="email"
            name="email"
            autoComplete="username"
            placeholder="Email"
            onChange={(e) => this.onChangeEmail(e)}
          />
        </div>
        <div className="jarbek-input-email-comment">
          {email ? (
            <div className="jarbek-input-comment-active">
              {emailValid ? (
                <p className="jarbek-input-valid">&#x2714; Valid Email Entered</p>
              ) : (
                <p className="jarbek-input-invalid">&#x2718; Invalid Email Entered</p>
              )}
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </>
    );
  }

  /**
   * Render the first name input field for a user subscribing.  Show validations if the
   * first name contains invalid characters.
   * @return {JSX.Element} React Elements.
   */
  renderFirstNameInput() {
    const { submitStatus, firstNameValid, firstName } = this.state;

    return (
      <>
        <div className="jarbek-input jarbek-input-first">
          <input
            className={submitStatus === SubmitStatus.SUBMIT_INVALID && !firstNameValid ? 'jarbek-input-warning' : ''}
            type="text"
            name="first"
            placeholder="First Name"
            onChange={(e) => this.onChangeFirstName(e)}
          />
        </div>
        <div className="jarbek-input-first-name-comment">
          {firstName ? (
            firstNameValid ? (
              <div> </div>
            ) : (
              <div className="jarbek-input-comment-active">
                <p className="jarbek-input-invalid">&#x2718; Invalid First Name Entered</p>
              </div>
            )
          ) : (
            <div> </div>
          )}
        </div>
      </>
    );
  }

  /**
   * Render the last name input field for a user subscribing.  Show validations if the
   * last name contains invalid characters.
   * @return {JSX.Element} React Elements.
   */
  renderLastNameInput() {
    const { submitStatus, lastNameValid, lastName } = this.state;

    return (
      <>
        <div className="jarbek-input jarbek-input-last">
          <input
            className={submitStatus === SubmitStatus.SUBMIT_INVALID && !lastNameValid ? 'jarbek-input-warning' : ''}
            type="text"
            name="last"
            placeholder="Last Name"
            onChange={(e) => this.onChangeLastName(e)}
          />
        </div>
        <div className="jarbek-input-last-name-comment">
          {lastName ? (
            lastNameValid ? (
              <div> </div>
            ) : (
              <div className="jarbek-input-comment-active">
                <p className="jarbek-input-invalid">&#x2718; Invalid Last Name Entered</p>
              </div>
            )
          ) : (
            <div> </div>
          )}
        </div>
      </>
    );
  }

  /**
   * Render React elements which create a subscription input form.
   * @return {JSX.Element} React Elements.
   */
  renderSubscribing() {
    const { submitStatus } = this.state;

    return (
      <div className="jarbek-subscribe-form">
        {this.renderEmailInput()}
        {this.renderFirstNameInput()}
        {this.renderLastNameInput()}
        {submitStatus === SubmitStatus.SUBMIT || submitStatus === SubmitStatus.SUBMIT_VALID ? (
          <Loading className="jarbek-input-submit" />
        ) : (
          <Button className="jarbek-input-submit" size="long" activeColor="primary" onClick={() => this.onSubmit()}>
            SUBSCRIBE
          </Button>
        )}
      </div>
    );
  }

  /**
   * Render messages that are displayed if the user submitted their subscription request.
   * @return {JSX.Element} React Elements.
   */
  renderSubmitted() {
    const { submitStatus } = this.state;

    return (
      <div className="jarbek-subscribe-form">
        {submitStatus === SubmitStatus.SUBMIT_SUCCESS ? (
          <p className="jarbek-input-completed">
            Thank you for subscribing! An email was sent confirming your monthly subscription. For additional
            information, contact me at andrew@jarombek.com.
          </p>
        ) : submitStatus === SubmitStatus.SUBMIT_NO_CHANGE ? (
          <p className="jarbek-input-completed">This email address is already subscribed!</p>
        ) : (
          <p className="jarbek-input-completed">
            Something went wrong! Please try again, or contact andrew@jarombek.com if the issue persists.
          </p>
        )}
        <Button className="jarbek-input-submit" size="long" activeColor="primary" onClick={() => this.props.exit()}>
          CONTINUE
        </Button>
      </div>
    );
  }

  /**
   * Render the Subscription form or a message describing the status of the users subscription.
   * @return {JSX.Element} React Elements.
   */
  renderSubscriptionForm() {
    const { submitStatus } = this.state;

    if (
      submitStatus === SubmitStatus.SUBMIT_FAIL ||
      submitStatus === SubmitStatus.SUBMIT_SUCCESS ||
      submitStatus === SubmitStatus.SUBMIT_NO_CHANGE
    ) {
      return this.renderSubmitted();
    } else {
      return this.renderSubscribing();
    }
  }

  /**
   * Render the Subscription component containing input fields, validation for input text,
   * and a submit button.
   * @return {JSX.Element} React Elements.
   */
  render() {
    const { enabled } = this.state;
    return (
      <div className="jarbek-subscribe">
        <p className="jarbek-subscribe-title">Sign Up for Monthly Notifications</p>
        <div className="jarbek-divider">
          <div> </div>
        </div>
        {enabled ? (
          this.renderSubscriptionForm()
        ) : (
          <div className="jarbek-subscribe-coming-soon">Subscription Emails Coming Soon</div>
        )}
      </div>
    );
  }
}

export default Subscribe;
