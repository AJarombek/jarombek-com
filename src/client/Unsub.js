/**
 * Unsub Component
 * @author Andrew Jarombek
 * @since 6/16/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import UnsubStatus from './status/UserStatus';
import { Link } from 'react-router-dom';

import WebsiteTemplate from './WebsiteTemplate';
import Loading from './Loading';
import TitleImage from './TitleImage';

class Unsub extends React.Component {
  constructor(props) {
    super(props);

    this.baseUrl = process.env.NODE_ENV === 'production' ? 'https://jarombek.com' : 'http://localhost:8080';

    this.state = {};
  }

  static propTypes = {
    match: PropTypes.object,
  };

  /**
   * Called when the component first mounts.  Here is where we should make setup API calls
   * and initialize the state
   */
  componentDidMount() {
    const { code } = this.props.match.params;

    if (code) {
      this.setState({ status: UnsubStatus.UNSUBSCRIBING });

      // If the url of this component has an unsubscribe code, use it to try and
      // remove a users subscription.
      Unsub.unsubscribe(code, this.baseUrl).then(
        (status) => {
          // The outcome of the un-subscription is dependent on the HTTP status code
          // of the response
          if (status === 200) {
            this.setState({ status: UnsubStatus.UNSUBSCRIBE_SUCCESS });
          } else {
            this.setState({ status: UnsubStatus.UNSUBSCRIBE_FAILURE });
          }
        },
        () => {
          this.setState({ status: UnsubStatus.UNSUBSCRIBE_FAILURE });
        },
      );
    } else {
      this.setState({ status: UnsubStatus.NO_CODE });
    }
  }

  /**
   * Make a call to the API to remove a users subscription.  Return the status code
   * from the HTTP response
   * @param {string} code - the un-subscription code which will unsubscribe a user
   * @param {string} baseUrl - the base of the url dependent on the environment
   * @return {Promise<number>}
   */
  static async unsubscribe(code, baseUrl) {
    const response = await fetch(`${baseUrl}/api/subscriber/unsub/${code}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });

    await response.json();
    return response.status;
  }

  render() {
    const { status } = this.state;

    return (
      <WebsiteTemplate hideSubscribe={true}>
        <div className="jarombek-background jarombek-verify-background">
          <div className="jarombek-verify">
            <div>
              {status === UnsubStatus.NO_CODE ? (
                <p className="jarombek-verify-content jarombek-verify-error">&#x2718; No Unsubscription Code!</p>
              ) : status === UnsubStatus.UNSUBSCRIBE_FAILURE ? (
                <div className="jarombek-verify-content jarombek-verify-error">
                  <p className="jarombek-verify-title">&#x2718; Unsubscription Failure!</p>
                  <p className="jarombek-verify-thin-text">The unsubscription code is invalid or was already used.</p>
                </div>
              ) : status === UnsubStatus.UNSUBSCRIBE_SUCCESS ? (
                <p className="jarombek-verify-content jarombek-verify-success">
                  &#x2714; You are Unsubscribed. Thank you for visiting my website!
                </p>
              ) : (
                <Loading className="jarombek-verify-content" />
              )}
              <Link className="jarombek-verify-footer" to="/">
                <TitleImage src="./assets/jarombek.png" title="HOME" />
              </Link>
            </div>
          </div>
        </div>
      </WebsiteTemplate>
    );
  }
}

export default Unsub;
